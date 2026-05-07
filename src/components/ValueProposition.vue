<script setup lang="ts">
const values = [
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    title: "Consultoría técnica especializada en aire comprimido",
    desc: "Acompañamos cada proyecto desde el diagnóstico inicial hasta la puesta en marcha.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Procesos ágiles y soluciones a la medida",
    desc: "Respondemos con rapidez y diseñamos soluciones ajustadas a sus necesidades reales.",
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Servicio técnico con estándares Kaeser",
    desc: "Nuestros técnicos están certificados y trabajan bajo los protocolos de fábrica.",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Repuestos 100 % originales al costo del fabricante",
    desc: "Acceso directo al catálogo Kaeser sin intermediarios adicionales.",
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Enfoque en eficiencia energética y ahorro operativo",
    desc: "Identificamos oportunidades reales de ahorro en cada sistema que intervenimos.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Acompañamiento técnico antes, durante y después",
    desc: "La relación con nuestros clientes no termina en la instalación.",
  },
];
</script>

<template>
  <section id="propuesta-valor" class="section value-proposition">
    <div class="container">

      <div class="vp-header">
        <div class="vp-header-text">
          <span class="section-label">¿Por qué elegirnos?</span>
          <h2>Por qué Fluxatec</h2>
          <p class="vp-subtitle">
            Especialistas en aire comprimido comprometidos con el servicio técnico
            de alto nivel, la agilidad y el valor real para nuestros clientes.
          </p>
        </div>
        <div class="vp-image-wrap">
          <img
            src="../assets/tecnicos2.png"
            alt="Técnicos especializados de Fluxatec realizando mantenimiento de compresores Kaeser en Colombia"
            class="vp-image"
          />
        </div>
      </div>

      <div class="values-grid">
        <div v-for="(value, index) in values" :key="index" class="value-card">
          <div class="value-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="value.icon" />
            </svg>
          </div>
          <h3 class="value-title">{{ value.title }}</h3>
          <p class="value-desc">{{ value.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.value-proposition {
  background-color: var(--white);
}

/* Header */
.vp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  margin-bottom: 64px;
  flex-wrap: wrap;
}

.vp-header-text {
  flex: 1;
  min-width: 280px;
}

.vp-header-text h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.vp-subtitle {
  font-size: 1.0625rem;
  color: var(--text-light);
  line-height: 1.75;
  max-width: 480px;
  margin: 0;
}

.vp-image-wrap {
  flex-shrink: 0;
}

.vp-image {
  max-width: 420px;
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
  box-shadow: 0 8px 40px rgba(10, 22, 40, 0.1);
}

/* Grid */
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.value-card {
  background: var(--section-alt);
  border: 2px solid transparent;
  border-radius: 16px;
  padding: 32px 24px;
  transition: all 0.28s ease;
  cursor: default;
}

.value-card:hover {
  border-color: #fecd01;
  background: #fff;
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(254, 205, 1, 0.18);
}

.value-icon {
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
  background: #fecd01;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a1628;
  flex-shrink: 0;
}

.value-icon svg {
  width: 28px;
  height: 28px;
}

.value-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.45;
  color: var(--text-dark);
  margin-bottom: 10px;
}

.value-desc {
  font-size: 0.9rem;
  color: var(--text-light);
  line-height: 1.65;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .vp-header {
    flex-direction: column;
    margin-bottom: 48px;
  }

  .vp-header-text h2 {
    font-size: 2rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .value-card {
    padding: 24px 20px;
  }
}
</style>
