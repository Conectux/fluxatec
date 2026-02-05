<script setup lang="ts">
const values = [
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    title: "Consultoría técnica especializada en aire comprimido",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Procesos ágiles y soluciones a la medida",
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Servicio técnico con estándares KAESER",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Repuestos 100 % originales al costo del fabricante",
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Enfoque en eficiencia energética y ahorro operativo",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Acompañamiento técnico antes, durante y después del proyecto",
  },
];
</script>

<template>
  <section id="propuesta-valor" class="section value-proposition">
    <div class="container">
      <div class="section-title">
        <div>
          <h2>¿Por qué Fluxatec?</h2>
          <p class="section-subtitle">
            Nos diferenciamos por nuestra especialización técnica y compromiso
            con la excelencia operativa
          </p>
        </div>
        <img
          src="../assets/tecnicos2.png"
          style="max-width: 500px; width: 100%; height: auto"
          alt="Logo"
        />
      </div>
      <div class="values-grid">
        <div v-for="(value, index) in values" :key="index" class="value-card">
          <div class="value-icon">
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
                :d="value.icon"
              />
            </svg>
          </div>
          <h3 class="value-title">{{ value.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.value-proposition {
  background-color: var(--white);
}

.section-title {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  height: auto;
  justify-content: center;
  align-items: center;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-light);
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

.value-card {
  background: var(--white);
  border: 2px solid var(--neutral-light);
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;
}

.value-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(11, 79, 140, 0.15);
}

.value-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #c99700 0%, #ffd84d 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
}

.value-icon svg {
  width: 36px;
  height: 36px;
}

.value-title {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--text-dark);
  margin: 0;
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .value-card {
    padding: 24px 20px;
  }

  .value-icon {
    width: 56px;
    height: 56px;
  }

  .value-icon svg {
    width: 32px;
    height: 32px;
  }

  .value-title {
    font-size: 1rem;
  }
}
</style>
