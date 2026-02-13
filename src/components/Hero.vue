<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title">
        Bienvenido a Fluxatec Ingeniería:
        <!-- Ingeniería experta en aire comprimido y sistemas neumáticos -->
      </h1>
      <p class="hero-subtitle">
        Soluciones integrales en aire comprimido con respaldo KAESER,
        consultoría especializada y servicio técnico de alto nivel.
      </p>
      <p class="hero-text">
        En Fluxatec ayudamos a las industrias a optimizar sus procesos
        productivos mediante la selección, implementación y mantenimiento de
        sistemas de aire comprimido eficientes, confiables y diseñados a la
        medida.
      </p>
      <div class="hero-ctas">
        <a href="#productos" class="btn btn-secondary"
          >Portafolio de productos</a
        >
        <a href="#servicios" class="btn btn-secondary"
          >Portafolio de servicios</a
        >
        <a href="#contacto" class="btn btn-secondary"
          >Mantenimiento/repuestos</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Imagen de fondo */
  background-image: url("../assets/kadi.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: var(--white);
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.9) 0%,
    /* Negro fuerte */ rgba(0, 0, 0, 0.85) 45%,
    rgba(250, 226, 15, 0.5) 70%,
    /* Amarillo sutil */ rgba(250, 226, 15, 0.25) 100% /* Toque final */
  );

  pointer-events: none;
}

/* .hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--primary-dark) 0%,
    var(--primary-blue) 50%,
    var(--primary-light) 100%
  );
  color: var(--white);
  overflow: hidden;
} */

/* .hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 25% 35%,
      rgb(228, 197, 0) 0%,
      rgba(122, 106, 0, 0.95) 35%,
      rgba(0, 0, 0, 0) 60%
    ),
    radial-gradient(
      circle at 80% 75%,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.9) 35%,
      rgba(0, 0, 0, 0) 62%
    ),
    linear-gradient(
      135deg,
      rgb(255, 236, 111) 0%,
      rgb(255, 246, 188) 48%,
      rgb(0, 0, 0) 52%,
      rgba(0, 0, 0, 1) 100%
    );

  pointer-events: none;
} */

.about-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 80px 24px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  color: var(--white);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.95);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.hero-text {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.85);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero .btn {
  min-width: 240px;
}

.hero .btn-secondary {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: var(--white);
  color: var(--white);
  backdrop-filter: blur(10px);
}

.hero .btn-secondary:hover {
  background-color: var(--white);
  color: var(--primary-blue);
}

@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
  }

  .hero-content {
    padding: 48px 24px;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-ctas {
    flex-direction: column;
    align-items: center;
  }

  .hero .btn {
    min-width: 200px;
    width: 100%;
    max-width: 320px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }
}

.btn-black {
  background-color: black;
  color: white;
}
</style>
