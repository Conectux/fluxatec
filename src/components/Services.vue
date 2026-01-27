<script setup lang="ts">
const services = [
  {
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Servicio técnico especializado KAESER',
    description: 'Prestamos servicio técnico bajo los estándares de KAESER Compresores, con un equipo que cuenta con más de 20 años de experiencia en sistemas de aire comprimido.',
    features: [
      'Diagnóstico especializado',
      'Mantenimiento preventivo y correctivo',
      'Repuestos 100 % originales',
      'Soporte técnico confiable y oportuno',
    ],
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Análisis de demanda de aire comprimido',
    description: 'Conocer el consumo real y la presión ideal de cada proceso es el primer paso para una correcta gestión energética.',
    features: [
      'Estudios con tecnología especializada',
      'Optimización del uso del aire comprimido',
      'Reducción de costos operativos',
      'Informe técnico detallado',
    ],
    cta: 'Ver informe técnico',
  },
  {
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    title: 'Detección de fugas de aire comprimido',
    description: 'Entre el 20 % y el 30 % del aire comprimido producido se pierde por fugas. En Fluxatec realizamos:',
    features: [
      'Detección con tecnología de punta',
      'Identificación precisa de fugas',
      'Marcación del desperdicio',
      'Apoyo en planes de corrección',
    ],
    highlight: 'Resultado: menor consumo energético y mayor eficiencia operativa.',
  },
  {
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    title: 'Diseño e instalación de redes de aire comprimido',
    description: 'Diseñamos e implementamos redes de aire comprimido utilizando ingeniería especializada y materiales de alto desempeño.',
    features: [
      'Redes en aluminio',
      'Diámetros desde 20 mm hasta 200 mm',
      'Menor pérdida de presión',
      'Instalaciones limpias, seguras y eficientes',
    ],
    cta: 'Ver catálogo de tubería',
  },
];
</script>

<template>
  <section id="servicios" class="section services">
    <div class="container">
      <div class="section-title">
        <h2>Servicios Especializados</h2>
        <p class="section-subtitle">
          Soluciones integrales para optimizar sus sistemas de aire comprimido
        </p>
      </div>
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
            </svg>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="(feature, idx) in service.features" :key="idx">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ feature }}
            </li>
          </ul>
          <p v-if="service.highlight" class="service-highlight">{{ service.highlight }}</p>
          <a v-if="service.cta" href="#contacto" class="service-cta">{{ service.cta }} →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background-color: var(--white);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.service-card {
  background: var(--white);
  border: 2px solid var(--neutral-light);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  border-color: var(--primary-blue);
  box-shadow: 0 12px 32px rgba(11, 79, 140, 0.15);
  transform: translateY(-4px);
}

.service-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--accent-orange), var(--accent-yellow));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--white);
}

.service-icon svg {
  width: 36px;
  height: 36px;
}

.service-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 16px;
  line-height: 1.3;
}

.service-description {
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.9375rem;
  color: var(--text-dark);
  line-height: 1.5;
}

.service-features svg {
  width: 20px;
  height: 20px;
  color: var(--primary-blue);
  flex-shrink: 0;
  margin-top: 2px;
}

.service-highlight {
  background: var(--neutral-light);
  padding: 16px;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--primary-blue);
  margin-top: auto;
  margin-bottom: 16px;
}

.service-cta {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: var(--primary-blue);
  margin-top: auto;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.service-cta:hover {
  color: var(--accent-orange);
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 24px;
  }

  .service-icon {
    width: 56px;
    height: 56px;
  }

  .service-icon svg {
    width: 32px;
    height: 32px;
  }

  .service-title {
    font-size: 1.25rem;
  }
}
</style>
