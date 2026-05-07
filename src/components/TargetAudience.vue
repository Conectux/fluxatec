<script setup lang="ts">
const industries = [
  {
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z",
    name: "Manufactura",
    desc: "Plantas de producción que requieren aire comprimido confiable y continuo.",
  },
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    name: "Minería",
    desc: "Operaciones mineras con requerimientos de alta presión y ambientes exigentes.",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    name: "Industria en general",
    desc: "Cualquier sector industrial que dependa de sistemas de aire comprimido eficientes.",
  },
];

const professionals = [
  "Ingenieros",
  "Tecnólogos",
  "Técnicos",
  "Gerentes",
  "Compradores",
  "Diseñadores de redes",
  "Personal administrativo y de mantenimiento",
];

const focusTags = [
  "Eficiencia energética",
  "Confiabilidad operativa",
  "Optimización de sistemas",
  "Repuestos originales",
  "Calidad del servicio",
  "Ahorros de energía",
];
</script>

<template>
  <section id="publico" class="section target-audience">
    <div class="container">

      <div class="audience-header">
        <span class="section-label-light">¿A quién servimos?</span>
        <h2>Industrias y Profesionales que Atendemos</h2>
        <p class="audience-subtitle">
          Trabajamos con empresas y profesionales de Medellín, Antioquia y Colombia
          comprometidos con la eficiencia energética y la excelencia operativa.
        </p>
      </div>

      <div class="audience-content">

        <div class="industries-section">
          <h3 class="subsection-title">Sectores Industriales</h3>
          <div class="industries-grid">
            <div v-for="(industry, index) in industries" :key="index" class="industry-card">
              <div class="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="industry.icon" />
                </svg>
              </div>
              <div class="industry-info">
                <h4>{{ industry.name }}</h4>
                <p>{{ industry.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="professionals-section">
          <h3 class="subsection-title">Perfiles Profesionales</h3>
          <ul class="professionals-list">
            <li v-for="(p, index) in professionals" :key="index">
              <span class="pro-check">✓</span>
              {{ p }}
            </li>
          </ul>
          <div class="focus-areas">
            <p class="focus-title">Interesados en:</p>
            <div class="focus-tags">
              <span v-for="tag in focusTags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.target-audience {
  background: var(--navy-dark);
}

/* Header */
.audience-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-label-light {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fecd01;
  margin-bottom: 12px;
}

.audience-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
}

.audience-subtitle {
  font-size: 1.0625rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.75;
}

/* Layout */
.audience-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.subsection-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #fecd01;
  margin-bottom: 28px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  font-size: 0.8125rem;
  letter-spacing: 1.5px;
}

/* Industries */
.industries-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.industry-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  transition: all 0.28s ease;
}

.industry-card:hover {
  background: rgba(254, 205, 1, 0.08);
  border-color: rgba(254, 205, 1, 0.35);
  transform: translateX(6px);
}

.industry-icon {
  width: 52px;
  height: 52px;
  background: #fecd01;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a1628;
  flex-shrink: 0;
}

.industry-icon svg {
  width: 28px;
  height: 28px;
}

.industry-info h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6px;
}

.industry-info p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.6;
  margin: 0;
}

/* Professionals */
.professionals-section {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 36px;
}

.professionals-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
}

.professionals-list li {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 11px 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: color 0.2s ease;
}

.professionals-list li:last-child {
  border-bottom: none;
}

.professionals-list li:hover {
  color: #fecd01;
}

.pro-check {
  width: 22px;
  height: 22px;
  background: #fecd01;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  color: #0a1628;
  flex-shrink: 0;
  line-height: 22px;
  text-align: center;
}

/* Focus tags */
.focus-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 14px;
}

.focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-block;
  background: rgba(254, 205, 1, 0.12);
  border: 1px solid rgba(254, 205, 1, 0.35);
  color: #fecd01;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: default;
}

.tag:hover {
  background: #fecd01;
  color: #0a1628;
}

/* Responsive */
@media (max-width: 900px) {
  .audience-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .audience-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .professionals-section {
    padding: 28px 20px;
  }
}
</style>
