<script setup lang="ts">
const contactInfo = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Sede principal",
    content: "Carrera 27AA #36 Sur – 151",
    location: "Envigado, Colombia",
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    title: "Teléfono / WhatsApp",
    content:
      "Servicio ténico: \n324 210 8469 \nVenta de equipos: \n301 487 9719 \nVenta de equipo: \n313 471 2329",
    href: "tel:+573242108469",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Correo electrónico",
    content:
      "asistente@fluxatec.com \nVictor.torres@fluxatec.com \nJuan.areiza@fluxatec.com",
    href: "mailto:asistente@fluxatec.com",
  },
  {
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    title: "Sitio web",
    content: "www.fluxatec.com",
    href: "https://www.fluxatec.com",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Horario de atención",
    content: "Lunes a viernes",
    location: "7:00 a.m. a 5:00 p.m.",
  },
];
</script>

<template>
  <section id="contacto" class="section contact">
    <div class="container">
      <div class="section-title">
        <h2>Contáctanos</h2>
        <p class="section-subtitle">
          ¿Necesitas asesoría técnica especializada? Hablemos.
        </p>
      </div>
      <div class="contact-grid">
        <div
          v-for="(info, index) in contactInfo"
          :key="index"
          class="contact-card"
        >
          <div class="contact-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="info.icon"
              />
            </svg>
          </div>
          <div class="contact-info">
            <h3 class="contact-title">{{ info.title }}</h3>
            <a
              v-if="info.href"
              :href="info.href"
              style="white-space: pre-line"
              class="contact-link"
            >
              {{ info.content }}
            </a>
            <p v-else style="white-space: pre-line" class="contact-text">
              {{ info.content }}
            </p>
            <p v-if="info.location" class="contact-location">
              {{ info.location }}
            </p>
          </div>
        </div>
      </div>
      <div class="cta-section">
        <h3>¿Listo para optimizar sus sistemas de aire comprimido?</h3>
        <p>Nuestro equipo de especialistas está disponible para asesorarlo</p>
        <a
          href="https://wa.me/573242108469"
          target="_blank"
          rel="noopener noreferrer"
          class="boton-whatsapp btn btn-large"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.boton-whatsapp {
  background: green;
  color: white;
}
.contact {
  background-color: var(--white);
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 500;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-bottom: 64px;
}

.contact-card {
  background: var(--neutral-light);
  border-radius: 12px;
  padding: 32px 24px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  transition: all 0.3s ease;
}

.contact-card:hover {
  background: var(--white);
  box-shadow: 0 8px 24px rgba(11, 79, 140, 0.15);
  transform: translateY(-4px);
}

.contact-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(
    135deg,
    var(--accent-orange),
    var(--accent-yellow)
  );
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
}

.contact-icon svg {
  width: 24px;
  height: 24px;
}

.contact-info {
  flex: 1;
}

.contact-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--neutral-gray);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-link {
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--primary-blue);
  margin-bottom: 4px;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--accent-orange);
}

.contact-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.contact-location {
  font-size: 1rem;
  color: var(--text-light);
  margin: 0;
}

.cta-section {
  background: linear-gradient(135deg, #c99700 0%, #ffd84d 100%);
  border-radius: 16px;
  padding: 64px 48px;
  text-align: center;
  color: var(--white);
}

.cta-section h3 {
  font-size: 2rem;
  margin-bottom: 16px;
  color: var(--white);
}

.cta-section p {
  font-size: 1.125rem;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.9);
}

.btn-large {
  font-size: 1.125rem;
  padding: 18px 40px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--accent-orange);
}

.btn-large:hover {
  background-color: #d66e00;
}

.btn-large svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .contact-card {
    padding: 24px 20px;
  }

  .contact-icon {
    width: 44px;
    height: 44px;
  }

  .cta-section {
    padding: 48px 32px;
  }

  .cta-section h3 {
    font-size: 1.5rem;
  }

  .cta-section p {
    font-size: 1rem;
  }

  .btn-large {
    font-size: 1rem;
    padding: 16px 32px;
  }
}

@media (max-width: 480px) {
  .cta-section {
    padding: 40px 24px;
  }

  .btn-large {
    width: 100%;
  }
}
</style>
