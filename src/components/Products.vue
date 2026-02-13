<script setup lang="ts">
const products = [
  {
    text: "Compresores de tornillo rotativo (3 HP a 650 HP)",
    image: product1,
    image2: product11,
  },
  {
    text: "Tubería en aluminio para aire comprimido ( 20 mm hasta 200 mm de diámetro)",
    image: product8,
  },
  { text: "Compresores libres de aceite", image: product2 },
  { text: "Compresores de alta presión", image: product3 },
  {
    text: "Compresores portátiles (Mobilair)",
    image: product4,
    image2: product10,
  },
  {
    text: "Tratamiento de aire comprimido (secadores y filtros)",
    image: product5,
  },
  { text: "Tanques de almacenamiento", image: product6 },
  { text: "Bombas de vacío y sopladores", image: product7 },

  {
    text: "Equipos usados certificados",
    image: product9,
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
        <h2>Portafolio KAESER</h2>
        <p class="section-subtitle">
          Ofrecemos el portafolio completo de KAESER Compresores, líder mundial
          en sistemas de aire comprimido
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
                    alt="Producto"
                  />
                </div>
                <div v-if="product.image2">
                  <img
                    :src="product.image2"
                    style="max-width: 300px; width: 100%; height: auto"
                    alt="Producto"
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
.products-cta .btn-secondary {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: var(--white);
  color: var(--white);
  backdrop-filter: blur(10px);
  margin-top: 10px;
}

.product-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center !important;
  text-align: center;
}

.products {
  background: linear-gradient(
    to bottom,
    var(--neutral-light) 0%,
    var(--white) 100%
  );
}

.boton-whatsapp {
  background: green;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
}

.products-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 64px;
  align-items: start;
}

.products-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  margin-bottom: 12px;
  background: var(--white);
  border-radius: 8px;
  border: 1px solid var(--neutral-light);
  transition: all 0.3s ease;
}

.product-item:hover {
  border-color: var(--primary-blue);
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(11, 79, 140, 0.1);
}

.product-item svg {
  width: 24px;
  height: 24px;
  color: var(--accent-orange);
  flex-shrink: 0;
  margin-top: 2px;
}

.product-item span {
  font-size: 1.125rem;
  color: var(--text-dark);
  font-weight: 500;
  line-height: 1.5;
}

.products-cta {
  position: sticky;
  top: 32px;
}

.cta-card {
  background: linear-gradient(
    135deg,
    #fae20f 0%,
    /* Amarillo principal */ #f5d400 55%,
    /* Transición suave */ #c9a800 100% /* Dorado oscuro elegante */
  );

  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
  color: #000;
  box-shadow: 0 8px 24px rgba(11, 79, 140, 0.2);
}

.cta-card svg {
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.cta-card h3 {
  font-size: 1.75rem;
  margin-bottom: 16px;
  color: #000;
}

.cta-card p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 28px;
  color: #000;
}

.cta-card .btn {
  width: 100%;
}

@media (max-width: 968px) {
  .products-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .products-cta {
    position: static;
  }

  .product-item span {
    font-size: 1rem;
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
