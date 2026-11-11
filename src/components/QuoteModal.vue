<script setup lang="ts">
import { computed, nextTick, reactive, ref, watch, onBeforeUnmount } from "vue";
import { useQuoteForm, PROJECT_TYPES, WHATSAPP_PHONE, LEADS_URL } from "../composables/useQuoteForm";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const { state, closeQuote } = useQuoteForm();

const COMPRA = "Compra de compresor Kaeser";

const needsBudgetConfirm = computed(() => form.tipo === COMPRA && !form.presupuesto);

const form = reactive({
  nombre: "",
  empresa: "",
  telefono: "",
  ciudad: "",
  tipo: "",
  detalle: "",
  presupuesto: false,
  website: "", // campo trampa anti-spam
});

const firstInput = ref<HTMLInputElement | null>(null);
let lastFocused: HTMLElement | null = null;

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") closeQuote();
}

watch(
  () => state.open,
  async (open) => {
    if (open) {
      lastFocused = document.activeElement as HTMLElement | null;
      if (state.projectType) form.tipo = state.projectType;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeydown);
      await nextTick();
      firstInput.value?.focus();
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeydown);
      lastFocused?.focus();
    }
  }
);

onBeforeUnmount(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", onKeydown);
});

function buildMessage() {
  const fields = [
    `*Nombre:* ${form.nombre.trim()}`,
    form.empresa.trim() && `*Empresa:* ${form.empresa.trim()}`,
    `*Teléfono:* ${form.telefono.trim()}`,
    form.ciudad.trim() && `*Ciudad:* ${form.ciudad.trim()}`,
    `*Tipo de proyecto:* ${form.tipo}`,
    form.tipo === COMPRA && form.presupuesto && "*Presupuesto:* Confirma inversión desde $30.000.000 COP",
    form.detalle.trim() && `*Sobre el proyecto:* ${form.detalle.trim()}`,
  ].filter(Boolean);
  return `Hola Fluxatec, quiero cotizar un proyecto.\n\n${fields.join("\n")}`;
}

// Guarda el lead en Google Sheets sin bloquear la apertura de WhatsApp.
function saveLead() {
  if (!LEADS_URL) return;
  const payload = JSON.stringify({ ...form, origen: window.location.href });
  try {
    // text/plain evita la verificación CORS previa; sendBeacon sobrevive al cambio de página.
    const sent = navigator.sendBeacon?.(LEADS_URL, new Blob([payload], { type: "text/plain" }));
    if (!sent) {
      fetch(LEADS_URL, { method: "POST", mode: "no-cors", keepalive: true, body: payload });
    }
  } catch {
    /* si falla el registro, el cliente igual continúa a WhatsApp */
  }
}

function submit() {
  saveLead();

  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(buildMessage())}`;

  try {
    window.fbq?.("track", "Lead", { content_name: form.tipo });
  } catch {
    /* el pixel no debe bloquear el envío */
  }

  const win = window.open(url, "_blank");
  if (win) win.opener = null;
  else window.location.href = url; // si el navegador bloquea la ventana nueva

  closeQuote();
  Object.assign(form, { nombre: "", empresa: "", telefono: "", ciudad: "", tipo: "", detalle: "", presupuesto: false, website: "" });
}
</script>

<template>
  <Teleport to="body">
    <Transition name="quote-fade">
      <div v-if="state.open" class="quote-backdrop" @click.self="closeQuote">
        <div
          class="quote-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-title"
        >
          <button type="button" class="quote-close" aria-label="Cerrar" @click="closeQuote">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <span class="quote-label">Cotizar proyecto</span>
          <h2 id="quote-title">Cuéntenos sobre su proyecto</h2>
          <p class="quote-intro">
            Complete sus datos y continúe por WhatsApp con un ingeniero de Fluxatec.
          </p>

          <form class="quote-form" @submit.prevent="submit">
            <div class="quote-row">
              <label class="quote-field">
                <span>Nombre completo *</span>
                <input ref="firstInput" v-model="form.nombre" type="text" required autocomplete="name" maxlength="80" />
              </label>
              <label class="quote-field">
                <span>Empresa</span>
                <input v-model="form.empresa" type="text" autocomplete="organization" maxlength="80" />
              </label>
            </div>

            <div class="quote-row">
              <label class="quote-field">
                <span>Teléfono / celular *</span>
                <input
                  v-model="form.telefono"
                  type="tel"
                  required
                  autocomplete="tel"
                  inputmode="tel"
                  pattern="[0-9+\s()-]{7,20}"
                  title="Ingrese un número válido"
                  maxlength="20"
                />
              </label>
              <label class="quote-field">
                <span>Ciudad</span>
                <input v-model="form.ciudad" type="text" autocomplete="address-level2" maxlength="60" />
              </label>
            </div>

            <label class="quote-field">
              <span>Tipo de proyecto *</span>
              <select v-model="form.tipo" required>
                <option value="" disabled>Seleccione una opción</option>
                <option v-for="t in PROJECT_TYPES" :key="t" :value="t">{{ t }}</option>
              </select>
            </label>

            <Transition name="quote-fade">
              <div v-if="form.tipo === COMPRA" class="quote-budget">
                <p class="quote-budget-title">Inversión mínima: desde $30.000.000 COP</p>
                <p>
                  Kaeser es una de las marcas de compresores más reconocidas del mundo, con
                  ingeniería alemana y más de 100 años de trayectoria. Su inversión le da:
                </p>
                <ul>
                  <li><strong>Respaldo de primer nivel:</strong> distribuidor autorizado, repuestos 100&nbsp;% originales y servicio técnico especializado.</li>
                  <li><strong>Menor consumo de energía:</strong> rotores con perfil SIGMA PROFILE (hasta 15&nbsp;% más eficientes según el fabricante) y motores de alta eficiencia IE4.</li>
                  <li><strong>Ahorros medibles:</strong> el control SIGMA AIR MANAGER 4.0 registra el consumo y genera reportes que apoyan la gestión energética bajo la norma ISO 50001.</li>
                </ul>
                <label class="quote-confirm">
                  <input v-model="form.presupuesto" type="checkbox" required />
                  <span>Confirmo que cuento con un presupuesto desde $30.000.000 COP *</span>
                </label>
              </div>
            </Transition>

            <label class="quote-field">
              <span>Cuéntanos un poco sobre tu proyecto o necesidades</span>
              <textarea
                v-model="form.detalle"
                rows="3"
                maxlength="600"
                placeholder="Ej.: compresor de 30 HP, mantenimiento preventivo, referencia de repuesto…"
              ></textarea>
            </label>

            <input
              v-model="form.website"
              type="text"
              name="website"
              class="quote-hp"
              tabindex="-1"
              autocomplete="off"
              aria-hidden="true"
            />

            <button
              type="submit"
              class="quote-submit"
              :disabled="needsBudgetConfirm"
              :title="needsBudgetConfirm ? 'Confirme el presupuesto para continuar' : undefined"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Continuar en WhatsApp
            </button>
            <p v-if="needsBudgetConfirm" class="quote-note quote-note--warn">
              Marque la confirmación de presupuesto para continuar.
            </p>
            <p class="quote-note">* Campos obligatorios</p>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.quote-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(10, 22, 40, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow-y: auto;
}

.quote-dialog {
  position: relative;
  background: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 560px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  padding: 40px 36px 32px;
  border-top: 6px solid #fecd01;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
}

.quote-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: var(--neutral-light);
  color: var(--text-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.quote-close:hover {
  background: #fecd01;
}

.quote-close svg {
  width: 20px;
  height: 20px;
}

.quote-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0a1628;
  background: #fecd01;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 12px;
}

.quote-dialog h2 {
  font-size: 1.625rem;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0 0 8px;
  line-height: 1.25;
}

.quote-intro {
  font-size: 0.9375rem;
  color: var(--text-light);
  margin: 0 0 24px;
  line-height: 1.6;
}

.quote-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.quote-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.quote-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.quote-field span {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-dark);
}

.quote-field input,
.quote-field select,
.quote-field textarea {
  width: 100%;
  font: inherit;
  font-size: 1rem;
  color: var(--text-dark);
  background: var(--section-alt);
  border: 2px solid var(--neutral-light);
  border-radius: 10px;
  padding: 12px 14px;
  transition: border-color 0.2s ease, background 0.2s ease;
  box-sizing: border-box;
}

.quote-field textarea {
  resize: vertical;
  min-height: 84px;
}

.quote-field input:focus,
.quote-field select:focus,
.quote-field textarea:focus {
  outline: none;
  border-color: #fecd01;
  background: #fff;
}

.quote-budget {
  background: rgba(254, 205, 1, 0.12);
  border: 2px solid #fecd01;
  border-radius: 12px;
  padding: 16px 18px;
  font-size: 0.875rem;
  line-height: 1.55;
  color: var(--text-dark);
}

.quote-budget p {
  margin: 0 0 8px;
}

.quote-budget-title {
  font-weight: 800;
  font-size: 1rem;
}

.quote-confirm {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid rgba(10, 22, 40, 0.12);
  font-weight: 700;
  cursor: pointer;
}

.quote-confirm input {
  width: 18px;
  height: 18px;
  margin: 2px 0 0;
  flex-shrink: 0;
  accent-color: #0a1628;
  cursor: pointer;
}

.quote-budget ul {
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.quote-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 8px;
  background: #25d366;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  padding: 16px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.quote-submit svg {
  width: 20px;
  height: 20px;
}

.quote-submit:hover {
  background: #1ebe5d;
  box-shadow: 0 8px 28px rgba(37, 211, 102, 0.4);
}

.quote-submit:disabled,
.quote-submit:disabled:hover {
  background: #b8c0cc;
  box-shadow: none;
  cursor: not-allowed;
}

.quote-note--warn {
  color: #b45309;
  font-weight: 600;
}

.quote-hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.quote-note {
  font-size: 0.75rem;
  color: var(--neutral-gray);
  margin: 0;
  text-align: center;
}

.quote-fade-enter-active,
.quote-fade-leave-active {
  transition: opacity 0.2s ease;
}

.quote-fade-enter-from,
.quote-fade-leave-to {
  opacity: 0;
}

@media (max-width: 560px) {
  .quote-dialog {
    padding: 36px 20px 24px;
  }

  .quote-row {
    grid-template-columns: 1fr;
  }

  .quote-dialog h2 {
    font-size: 1.375rem;
  }
}
</style>
