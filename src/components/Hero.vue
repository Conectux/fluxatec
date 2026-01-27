<script setup lang="ts">
</script>

<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title">Ingeniería experta en aire comprimido y sistemas neumáticos</h1>
      <p class="hero-subtitle">
        Soluciones integrales en aire comprimido con respaldo KAESER, consultoría especializada y servicio técnico de alto nivel.
      </p>
      <p class="hero-text">
        En Fluxatec ayudamos a las industrias a optimizar sus procesos productivos mediante la selección, implementación y mantenimiento de sistemas de aire comprimido eficientes, confiables y diseñados a la medida.
      </p>
      <div class="hero-ctas">
        <a href="#contacto" class="btn btn-primary">Solicita asesoría técnica</a>
        <a href="#productos" class="btn btn-secondary">Ver portafolio de soluciones</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-blue) 50%, var(--primary-light) 100%);
  color: var(--white);
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 50%, rgba(247, 127, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(252, 191, 73, 0.1) 0%, transparent 50%);
  pointer-events: none;
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
</style>
