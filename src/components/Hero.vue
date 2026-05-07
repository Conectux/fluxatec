<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero-overlay"></div>

    <div class="container hero-layout">
      <div class="hero-content">

        <div class="hero-badge">
          <span class="badge-pulse"></span>
          Distribuidores Autorizados · Kaeser Compresores Colombia
        </div>

        <h1 class="hero-title">
          Ingeniería en<br />
          <span class="title-accent">Aire Comprimido</span><br />
          Industrial
        </h1>

        <p class="hero-subtitle">
          Venta, mantenimiento, repuestos originales y servicio técnico Kaeser
          con más de 20 años de experiencia en Medellín, Antioquia y Colombia.
        </p>

        <div class="hero-ctas">
          <a href="#productos" class="btn hero-btn-primary">Ver portafolio Kaeser</a>
          <a href="#servicios" class="btn hero-btn-outline">
            Servicio técnico
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">20<span class="stat-plus">+</span></span>
            <span class="stat-label">Años de experiencia</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">100<span class="stat-plus">%</span></span>
            <span class="stat-label">Repuestos originales</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number">Kaeser<span class="stat-reg">®</span></span>
            <span class="stat-label">Distribuidor autorizado</span>
          </div>
        </div>

      </div>
    </div>

    <a href="#nosotros" class="scroll-indicator" aria-label="Ir a la siguiente sección">
      <span class="scroll-label">Conoce más</span>
      <div class="scroll-arrow"></div>
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("../assets/kadi.jpg");
  background-size: cover;
  background-position: center 30%;
  background-repeat: no-repeat;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      105deg,
      rgba(10, 22, 40, 0.97) 0%,
      rgba(10, 22, 40, 0.88) 38%,
      rgba(10, 22, 40, 0.55) 62%,
      rgba(10, 22, 40, 0.15) 100%
    ),
    linear-gradient(to top, rgba(10, 22, 40, 0.75) 0%, transparent 45%);
  pointer-events: none;
}

.hero-layout {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 120px;
}

.hero-content {
  max-width: 660px;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(254, 205, 1, 0.12);
  border: 1px solid rgba(254, 205, 1, 0.45);
  color: #fecd01;
  padding: 8px 18px;
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  margin-bottom: 36px;
  text-transform: uppercase;
}

.badge-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fecd01;
  flex-shrink: 0;
  animation: pulse 2.2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.75); }
}

/* Título */
.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.05;
  color: #ffffff;
  margin-bottom: 28px;
  letter-spacing: -0.5px;
}

.title-accent {
  color: #fecd01;
  position: relative;
  display: inline-block;
}

.title-accent::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 3px;
  background: rgba(254, 205, 1, 0.4);
  border-radius: 2px;
}

/* Subtítulo */
.hero-subtitle {
  font-size: 1.125rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 44px;
  max-width: 560px;
}

/* CTAs */
.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 56px;
}

.hero-btn-primary {
  background: #fecd01;
  color: #0a1628;
  font-weight: 700;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.25s ease;
  border: 2px solid #fecd01;
  white-space: nowrap;
  text-decoration: none;
}

.hero-btn-primary:hover {
  background: #fff;
  color: #0a1628;
  border-color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(254, 205, 1, 0.4);
}

.hero-btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: #ffffff;
  font-weight: 600;
  padding: 16px 28px;
  border-radius: 8px;
  font-size: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.4);
  transition: all 0.25s ease;
  white-space: nowrap;
  text-decoration: none;
}

.hero-btn-outline svg {
  width: 18px;
  height: 18px;
  transition: transform 0.25s ease;
}

.hero-btn-outline:hover {
  border-color: #fecd01;
  color: #fecd01;
  background: rgba(254, 205, 1, 0.08);
  transform: translateY(-2px);
}

.hero-btn-outline:hover svg {
  transform: translateX(4px);
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-right: 32px;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: #fecd01;
  line-height: 1;
  letter-spacing: -0.5px;
}

.stat-plus,
.stat-reg {
  font-size: 1.1rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 500;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  white-space: nowrap;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.18);
  margin-right: 28px;
  flex-shrink: 0;
}

/* Scroll */
.scroll-indicator {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 2;
  cursor: pointer;
  text-decoration: none;
  animation: float 2.8s ease-in-out infinite;
}

.scroll-label {
  font-size: 0.6875rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 500;
}

.scroll-arrow {
  width: 18px;
  height: 18px;
  border-right: 2px solid rgba(255, 255, 255, 0.45);
  border-bottom: 2px solid rgba(255, 255, 255, 0.45);
  transform: rotate(45deg);
  margin-top: -4px;
}

@keyframes float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(8px); }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-layout { padding-top: 80px; padding-bottom: 100px; }
  .hero-title { font-size: 2.625rem; }
  .hero-subtitle { font-size: 1rem; margin-bottom: 36px; }
  .hero-ctas { flex-direction: column; gap: 12px; margin-bottom: 44px; }
  .hero-btn-primary,
  .hero-btn-outline { justify-content: center; width: 100%; }
  .stat { padding-right: 20px; }
  .stat-number { font-size: 1.375rem; }
  .stat-divider { margin-right: 20px; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 2.125rem; }
  .hero-badge { font-size: 0.6875rem; padding: 7px 14px; }
  .hero-stats { flex-wrap: wrap; gap: 20px; }
  .stat { padding: 0; }
  .stat-divider { display: none; }
  .scroll-indicator { display: none; }
}
</style>
