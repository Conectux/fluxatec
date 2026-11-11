import { reactive } from "vue";

export const WHATSAPP_PHONE = "573242108469";

// URL de la aplicación web de Google Apps Script (termina en /exec).
// Instrucciones en google-apps-script/cotizaciones.gs. Vacía = no se guarda en Google Sheets.
export const LEADS_URL =
  "https://script.google.com/macros/s/AKfycbz24byO0nl4lyGoD3XWr15N9RLUJWM4Rc89BkjOBTvrhwTCryp606Lq-qQBjhB1_agFyA/exec";

export const PROJECT_TYPES = [
  "Compra de compresor Kaeser",
  "Mantenimiento / servicio técnico",
  "Repuestos Kaeser",
  "Detección de fugas / eficiencia energética",
  "Catálogo de productos",
  "Otro",
] as const;

const state = reactive({
  open: false,
  projectType: "" as string,
});

export function useQuoteForm() {
  function openQuote(projectType = "") {
    state.projectType = projectType;
    state.open = true;
  }

  function closeQuote() {
    state.open = false;
  }

  return { state, openQuote, closeQuote };
}
