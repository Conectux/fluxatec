<script setup lang="ts">
const products = [
  'Compresores de tornillo rotativo (3 HP a 650 HP)',
  'Compresores libres de aceite',
  'Compresores de alta presión',
  'Compresores portátiles (Mobilair)',
  'Tratamiento de aire comprimido (secadores y filtros)',
  'Tanques de almacenamiento',
  'Bombas de vacío y sopladores',
  'Tubería para aire comprimido (20 mm a 200 mm)',
  'Equipos usados certificados',
];
</script>

<template>
  <section id="productos" class="section products">
    <div class="container">
      <div class="section-title">
        <h2>Portafolio KAESER</h2>
        <p class="section-subtitle">
          Ofrecemos el portafolio completo de KAESER Compresores, líder mundial en sistemas de aire comprimido
        </p>
      </div>
      <div class="products-content">
        <div class="products-list">
          <ul>
            <li v-for="(product, index) in products" :key="index" class="product-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ product }}</span>
            </li>
          </ul>
        </div>
        <div class="products-cta">
          <div class="cta-card">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3>Catálogo completo</h3>
            <p>Descarga nuestro catálogo de aire comprimido con especificaciones técnicas detalladas</p>
            <a href="#contacto" class="btn btn-accent">Descargar catálogo</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  background: linear-gradient(to bottom, var(--neutral-light) 0%, var(--white) 100%);
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
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-light));
  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
  color: var(--white);
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
  color: var(--white);
}

.cta-card p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 28px;
  color: rgba(255, 255, 255, 0.9);
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
