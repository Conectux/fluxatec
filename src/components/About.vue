<script setup lang="ts">
</script>

<template>
  <section id="nosotros" class="section about">
    <div class="container">
      <div class="section-title">
        <h2>Quiénes Somos</h2>
      </div>
      <div class="about-content">
        <div class="about-text">
          <p class="about-intro">
            Fluxatec Ingeniería es una empresa colombiana especializada en consultoría técnica, diseño e implementación de soluciones en aire comprimido y sistemas neumáticos.
          </p>
          <p>
            Somos ingenieros especialistas y <strong>distribuidores autorizados de KAESER Compresores de Colombia</strong>, una de las marcas más reconocidas a nivel mundial en sistemas de aire comprimido.
          </p>
          <p>
            Cada proyecto se desarrolla bajo consultoría especializada, con enfoque en eficiencia energética, confiabilidad operativa y retorno de inversión para nuestros clientes.
          </p>
        </div>
        <div class="about-logo">
          <div class="logo-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>KAESER</span>
            <span class="authorized">Distribuidor Autorizado</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background-color: var(--neutral-light);
}

.about-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-text {
  font-size: 1.125rem;
}

.about-intro {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 24px;
}

.about-text p {
  margin-bottom: 20px;
}

.about-text strong {
  color: var(--primary-blue);
  font-weight: 600;
}

.about-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-placeholder {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-light));
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  box-shadow: 0 8px 24px rgba(11, 79, 140, 0.2);
  padding: 32px;
}

.logo-placeholder svg {
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  opacity: 0.9;
}

.logo-placeholder span {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 2px;
}

.logo-placeholder .authorized {
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 8px;
  opacity: 0.9;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-text {
    font-size: 1rem;
  }

  .about-intro {
    font-size: 1.125rem;
  }

  .logo-placeholder {
    max-width: 260px;
  }

  .logo-placeholder svg {
    width: 60px;
    height: 60px;
  }

  .logo-placeholder span {
    font-size: 1.5rem;
  }
}
</style>
