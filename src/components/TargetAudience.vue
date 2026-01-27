<script setup lang="ts">
const industries = [
  {
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z',
    name: 'Manufactura',
  },
  {
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    name: 'Minería',
  },
  {
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    name: 'Industria en general',
  },
];

const professionals = [
  'Ingenieros',
  'Tecnólogos',
  'Técnicos',
  'Personal administrativo y de mantenimiento',
];
</script>

<template>
  <section id="publico" class="section target-audience">
    <div class="container">
      <div class="section-title">
        <h2>¿A quién servimos?</h2>
        <p class="section-subtitle">
          Trabajamos con empresas y profesionales comprometidos con la excelencia operativa
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
              <h4>{{ industry.name }}</h4>
            </div>
          </div>
        </div>
        <div class="professionals-section">
          <h3 class="subsection-title">Profesionales</h3>
          <p class="professionals-intro">Dirigido a:</p>
          <ul class="professionals-list">
            <li v-for="(professional, index) in professionals" :key="index">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {{ professional }}
            </li>
          </ul>
          <div class="focus-areas">
            <p>Interesados en:</p>
            <div class="focus-tags">
              <span class="tag">Eficiencia energética</span>
              <span class="tag">Confiabilidad operativa</span>
              <span class="tag">Optimización de sistemas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.target-audience {
  background: linear-gradient(to bottom, var(--neutral-light) 0%, var(--white) 100%);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
}

.audience-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

.subsection-title {
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-bottom: 32px;
  text-align: center;
}

.industries-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.industry-card {
  background: var(--white);
  border: 2px solid var(--neutral-light);
  border-radius: 12px;
  padding: 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  transition: all 0.3s ease;
}

.industry-card:hover {
  border-color: var(--primary-blue);
  transform: translateX(8px);
  box-shadow: 0 8px 24px rgba(11, 79, 140, 0.15);
}

.industry-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-light));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
}

.industry-icon svg {
  width: 32px;
  height: 32px;
}

.industry-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin: 0;
}

.professionals-section {
  background: var(--white);
  border: 2px solid var(--neutral-light);
  border-radius: 16px;
  padding: 40px;
}

.professionals-intro {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 20px;
}

.professionals-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
}

.professionals-list li {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  margin-bottom: 12px;
  font-size: 1.0625rem;
  color: var(--text-dark);
  background: var(--neutral-light);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.professionals-list li:hover {
  background: var(--primary-blue);
  color: var(--white);
  transform: translateX(4px);
}

.professionals-list li:hover svg {
  color: var(--white);
}

.professionals-list svg {
  width: 24px;
  height: 24px;
  color: var(--primary-blue);
  flex-shrink: 0;
  transition: color 0.3s ease;
}

.focus-areas {
  padding-top: 24px;
  border-top: 2px solid var(--neutral-light);
}

.focus-areas > p {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  display: inline-block;
  background: linear-gradient(135deg, var(--accent-orange), var(--accent-yellow));
  color: var(--white);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.tag:hover {
  transform: translateY(-2px);
}

@media (max-width: 968px) {
  .audience-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .subsection-title {
    font-size: 1.25rem;
  }

  .industry-card {
    padding: 24px;
  }

  .industry-icon {
    width: 48px;
    height: 48px;
  }

  .industry-icon svg {
    width: 28px;
    height: 28px;
  }

  .industry-card h4 {
    font-size: 1.125rem;
  }

  .professionals-section {
    padding: 32px 24px;
  }

  .professionals-list li {
    font-size: 1rem;
  }
}
</style>
