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
              alt="Fluxatec Ingeniería – Distribuidores Kaeser Compresores Colombia"
              class="footer-logo-img"
            />
          </div>
          <p class="brand-description">
            Ingeniería especializada en aire comprimido industrial y sistemas
            neumáticos. Distribuidores autorizados Kaeser Compresores de
            Colombia. Servicio técnico, mantenimiento y repuestos originales
            en Medellín, Antioquia y Colombia.
          </p>
          <div class="brand-location">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Envigado, Antioquia, Colombia</span>
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
              <li><a href="tel:+573242108469">324 210 8469</a></li>
              <li><a href="mailto:asistente@fluxatec.com">asistente@fluxatec.com</a></li>
              <li>
                <a href="https://www.fluxatec.com" target="_blank" rel="noopener noreferrer">
                  www.fluxatec.com
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <div class="footer-legal">
          <p class="copyright">© {{ currentYear }} Fluxatec Ingeniería. Todos los derechos reservados.</p>
          <div class="legal-links">
            <a v-for="link in footerLinks.legal" :key="link.name" :href="link.href">
              {{ link.name }}
            </a>
          </div>
        </div>
        <div class="footer-credits">
          <span class="kaeser-badge">Distribuidor autorizado Kaeser Compresores de Colombia</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--navy-dark);
  color: var(--white);
  padding: 72px 0 32px;
}

/* Content */
.footer-content {
  display: grid;
  grid-template-columns: 1.6fr 2fr;
  gap: 72px;
  padding-bottom: 52px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Brand */
.footer-brand {
  max-width: 380px;
}

.brand-logo {
  margin-bottom: 24px;
}

.footer-logo-img {
  max-width: 200px;
  width: 100%;
  height: auto;
  filter: brightness(0) invert(1);
  opacity: 0.9;
}

.brand-description {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 24px;
}

.brand-location {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
}

.brand-location svg {
  width: 18px;
  height: 18px;
  color: #fecd01;
  flex-shrink: 0;
}

/* Links group */
.footer-links-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer-links h4 {
  font-size: 0.75rem;
  font-weight: 700;
  color: #fecd01;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
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
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9375rem;
  transition: color 0.2s ease;
  text-decoration: none;
}

.footer-links a:hover {
  color: #fecd01;
}

/* Bottom */
.footer-bottom {
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.footer-legal {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.copyright {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.35);
  margin: 0;
}

.legal-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.legal-links a {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.35);
  transition: color 0.2s ease;
  text-decoration: none;
}

.legal-links a:hover {
  color: #fecd01;
}

/* Kaeser badge */
.kaeser-badge {
  display: inline-block;
  background: rgba(254, 205, 1, 0.1);
  border: 1px solid rgba(254, 205, 1, 0.3);
  color: #fecd01;
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 100px;
  letter-spacing: 0.2px;
}

/* Responsive */
@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .footer-brand {
    max-width: 100%;
  }

  .footer-links-group {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 48px 0 28px;
  }

  .footer-links-group {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .legal-links {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
