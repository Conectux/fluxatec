<script setup lang="ts">
const products = [
  {
    text: "Compresores de tornillo rotativo (3 HP a 650 HP)",
    image: product1,
    alt: "Compresor de tornillo rotativo Kaeser para aire comprimido industrial – desde 3 HP hasta 650 HP",
    image2: product11,
    alt2: "Compresor Kaeser de tornillo rotativo de alta eficiencia energética para industria",
  },
  {
    text: "Tubería en aluminio para aire comprimido (20 mm hasta 200 mm de diámetro)",
    image: product8,
    alt: "Tubería en aluminio Kaeser para redes de aire comprimido industrial – 20 mm a 200 mm",
  },
  {
    text: "Compresores libres de aceite",
    image: product2,
    alt: "Compresor Kaeser libre de aceite para aire comprimido de alta pureza en industria farmacéutica y alimentaria",
  },
  {
    text: "Compresores de alta presión",
    image: product3,
    alt: "Compresor Kaeser de alta presión para procesos industriales con requerimientos especiales",
  },
  {
    text: "Compresores portátiles (Mobilair)",
    image: product4,
    alt: "Compresor portátil Kaeser Mobilair para obras civiles, minería y trabajo en campo",
    image2: product10,
    alt2: "Kaeser Mobilair – compresor portátil compacto para industria y construcción",
  },
  {
    text: "Tratamiento de aire comprimido (secadores y filtros)",
    image: product5,
    alt: "Secadores y filtros Kaeser para tratamiento y purificación de aire comprimido industrial",
  },
  {
    text: "Tanques de almacenamiento",
    image: product6,
    alt: "Tanques de almacenamiento para sistemas de aire comprimido industrial Kaeser",
  },
  {
    text: "Bombas de vacío y sopladores",
    image: product7,
    alt: "Bombas de vacío y sopladores Kaeser para procesos industriales que requieren vacío o presión positiva",
  },
  {
    text: "Equipos usados certificados",
    image: product9,
    alt: "Compresores Kaeser usados certificados – equipos revisados y garantizados por Fluxatec",
    text2: "Si tienes un equipo usado marca Kaeser, te lo ayudamos a vender",
  },
];
import product1 from "../assets/producto1.png";
import product2 from "../assets/producto2.png";
import product3 from "../assets/producto3.png";
import product4 from "../assets/producto4.png";
import product5 from "../assets/producto5.png";
import product6 from "../assets/producto6.png";
import product7 from "../assets/producto7.png";
import product8 from "../assets/producto8.png";
import product9 from "../assets/producto9.png";
import product10 from "../assets/producto10.jpg";
import product11 from "../assets/producto11.png";
</script>

<template>
  <section id="productos" class="section products">
    <div class="container">
      <div class="section-title">
        <span class="section-label">Portafolio</span>
        <h2>Compresores y Equipos Kaeser</h2>
        <p class="section-subtitle">
          Distribuidores autorizados del portafolio completo de Kaeser Compresores
          en Colombia — líder mundial en sistemas de aire comprimido industrial.
        </p>
      </div>
      <div class="products-content">
        <div class="products-list">
          <ul>
            <li
              v-for="(product, index) in products"
              :key="index"
              class="product-item"
            >
              <div class="product-container">
                <div>
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{{ product.text }}</span>
                </div>
                <div>
                  <img
                    :src="product.image"
                    style="max-width: 300px; width: 100%; height: auto"
                    :alt="product.alt"
                  />
                </div>
                <div v-if="product.image2">
                  <img
                    :src="product.image2"
                    style="max-width: 300px; width: 100%; height: auto"
                    :alt="product.alt2"
                  />
                </div>
                <div v-if="product.text2">
                  <span>{{ product.text2 }}</span>
                  <div style="margin-top: 20px">
                    <a
                      href="https://wa.me/573014879719"
                      target="blank"
                      rel="noopener noreferrer"
                      class="boton-whatsapp btn btn-primary"
                      >Vender equipo</a
                    >
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="products-cta">
          <div class="cta-card">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3>Catálogo completo</h3>
            <p class="">
              Solicita nuestro catálogo de aire comprimido con especificaciones
              técnicas detalladas vía WhatsApp
            </p>
            <a
              href="#contacto"
              rel="noopener noreferrer"
              class="boton-whatsapp btn btn-primary"
              >Solicitar catálogo o cotización</a
            >
            <a
              href="https://docs.google.com/forms/d/10yTmnfaJWhcFZ_wCaH_pnm5fS_Gq3QMUwxMMEDwXuXE/edit"
              target="blank"
              rel="noopener noreferrer"
              class="btn btn-secondary"
              >Califica nuestro servicio</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  background-color: var(--white);
}

.section-title {
  text-align: center;
  margin-bottom: 56px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 14px;
}

.section-subtitle {
  font-size: 1.0625rem;
  color: var(--text-light);
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.7;
}

.products-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 56px;
  align-items: start;
}

.products-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-item {
  margin-bottom: 10px;
  background: var(--section-alt);
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.25s ease;
}

.product-item:hover {
  border-color: #fecd01;
  background: #fff;
  transform: translateX(6px);
  box-shadow: 0 6px 24px rgba(254, 205, 1, 0.15);
}

.product-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  gap: 12px;
}

.product-container > div:first-child {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  text-align: left;
}

.product-container svg {
  width: 22px;
  height: 22px;
  color: #fecd01;
  flex-shrink: 0;
}

.product-container span {
  font-size: 1rem;
  color: var(--text-dark);
  font-weight: 600;
  line-height: 1.5;
}

.product-container img {
  border-radius: 8px;
  border: 1px solid var(--neutral-light);
}

.boton-whatsapp {
  background: #25d366 !important;
  color: #fff !important;
  font-weight: 700;
}

.boton-whatsapp:hover {
  background: #1ea952 !important;
}

/* CTA sticky */
.products-cta {
  position: sticky;
  top: 32px;
}

.cta-card {
  background: var(--navy-dark);
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  border: 2px solid rgba(254, 205, 1, 0.2);
}

.cta-card svg {
  width: 52px;
  height: 52px;
  margin-bottom: 20px;
  color: #fecd01;
}

.cta-card h3 {
  font-size: 1.5rem;
  margin-bottom: 14px;
  color: #fff;
  font-weight: 800;
}

.cta-card p {
  font-size: 0.9375rem;
  line-height: 1.65;
  margin-bottom: 28px;
  color: rgba(255, 255, 255, 0.65);
}

.cta-card .btn {
  width: 100%;
  margin-bottom: 12px;
  font-weight: 700;
}

.products-cta .btn-secondary {
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
}

.products-cta .btn-secondary:hover {
  border-color: #fecd01;
  color: #fecd01;
  background: rgba(254, 205, 1, 0.08);
}

@media (max-width: 968px) {
  .products-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .products-cta {
    position: static;
  }

  .section-title h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .product-container {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .product-item {
    padding: 12px;
  }

  .product-item svg {
    width: 20px;
    height: 20px;
  }

  .cta-card {
    padding: 32px 24px;
  }

  .cta-card h3 {
    font-size: 1.5rem;
  }
}
</style>
