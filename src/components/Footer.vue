<script setup lang="ts">
const currentYear = new Date().getFullYear();

const footerLinks = {
  company: [
    { name: "Inicio", href: "#inicio" },
    { name: "Quiénes Somos", href: "#nosotros" },
    { name: "Propuesta de Valor", href: "#propuesta-valor" },
    { name: "Productos", href: "#productos" },
  ],
  services: [
    { name: "Servicio Técnico", href: "#servicios" },
    { name: "Análisis de Demanda", href: "#servicios" },
    { name: "Detección de Fugas", href: "#servicios" },
    { name: "Redes de Aire Comprimido", href: "#servicios" },
  ],
  legal: [
    { name: "Política de privacidad", href: "#privacidad" },
    { name: "Términos y condiciones", href: "#terminos" },
  ],
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">
            <img
              src="../assets/logo-fluxatec-simply.png"
              style="max-width: 280px; width: 100%; height: auto"
              alt="Logo"
            />
          </div>
          <p class="brand-description">
            Ingeniería especializada en aire comprimido y sistemas neumáticos.
            Distribuidores autorizados KAESER.
          </p>
          <div class="brand-location">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Envigado, Colombia</span>
          </div>
        </div>

        <div class="footer-links-group">
          <div class="footer-links">
            <h4>Empresa</h4>
            <ul>
              <li v-for="link in footerLinks.company" :key="link.name">
                <a :href="link.href">{{ link.name }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Servicios</h4>
            <ul>
              <li v-for="link in footerLinks.services" :key="link.name">
                <a :href="link.href">{{ link.name }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href="tel:+573242108469">324 210 8469</a>
              </li>
              <li>
                <a href="mailto:asistente@fluxatec.com"
                  >asistente@fluxatec.com</a
                >
              </li>
              <li>
                <a
                  href="https://www.fluxatec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >www.fluxatec.com</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-legal">
          <p class="copyright">
            © {{ currentYear }} Fluxatec Ingeniería. Todos los derechos
            reservados.
          </p>
          <div class="legal-links">
            <a
              v-for="link in footerLinks.legal"
              :key="link.name"
              :href="link.href"
              >{{ link.name }}</a
            >
          </div>
        </div>
        <div class="footer-credits">
          <p>Distribuidor autorizado KAESER Compresores de Colombia</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--neutral-dark);
  color: var(--white);
  padding: 64px 0 32px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 64px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  max-width: 400px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.brand-logo svg {
  width: 36px;
  height: 36px;
  color: var(--accent-orange);
}

.brand-logo span {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--white);
}

.brand-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
}

.brand-location {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9375rem;
}

.brand-location svg {
  width: 20px;
  height: 20px;
  color: var(--accent-orange);
}

.footer-links-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}

.footer-links h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9375rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--accent-orange);
}

.footer-bottom {
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.footer-legal {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.copyright {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.legal-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.legal-links a {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: var(--white);
}

.footer-credits {
  text-align: right;
}

.footer-credits p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 500;
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .footer-links-group {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .footer-credits {
    text-align: left;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 48px 0 24px;
  }

  .footer-links-group {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-legal {
    width: 100%;
  }

  .legal-links {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
