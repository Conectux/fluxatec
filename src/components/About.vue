<script setup lang="ts"></script>

<template>
  <section id="nosotros" class="section about">
    <div class="container">
      <div class="about-grid">

        <div class="about-text">
          <span class="section-label">Sobre Nosotros</span>
          <h2>Quiénes Somos</h2>

          <div class="about-logo-wrap">
            <img
              src="../assets/logo-fluxatec-negro.png"
              alt="Fluxatec Ingeniería – especialistas en aire comprimido industrial Colombia"
              class="about-logo-img"
            />
          </div>

          <p class="about-intro">
            Empresa colombiana con sede en Envigado, Antioquia, especializada en
            consultoría técnica, diseño e implementación de soluciones en
            aire comprimido industrial y sistemas neumáticos.
          </p>
          <p>
            Somos ingenieros especialistas y
            <strong>distribuidores autorizados de Kaeser Compresores de Colombia</strong>,
            marca líder mundial en sistemas de aire comprimido, con presencia en
            Medellín, Antioquia y el resto del país.
          </p>
          <p>
            Cada proyecto se desarrolla con consultoría especializada, enfocada en
            eficiencia energética, confiabilidad operativa y retorno de inversión.
            Ofrecemos mantenimiento preventivo y correctivo, repuestos Kaeser 100&nbsp;%
            originales y servicio técnico certificado.
          </p>

          <div class="about-chips">
            <span class="chip">+20 años de experiencia</span>
            <span class="chip">Distribuidor autorizado Kaeser</span>
            <span class="chip">Envigado, Antioquia</span>
          </div>
        </div>

        <div class="about-visual">
          <div class="about-badge-frame">
            <img
              src="../assets/distribuidor.png"
              alt="Fluxatec – distribuidor autorizado de Kaeser Compresores de Colombia"
              class="about-badge-img"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background-color: var(--section-alt);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 72px;
  align-items: center;
}

/* Texto */
.about-text h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 32px;
  line-height: 1.15;
}

.about-logo-wrap {
  margin-bottom: 28px;
}

.about-logo-img {
  max-width: 240px;
  width: 100%;
  height: auto;
}

.about-intro {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--text-dark);
  line-height: 1.7;
  margin-bottom: 20px;
}

.about-text p {
  font-size: 1rem;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 18px;
}

.about-text strong {
  color: var(--text-dark);
  font-weight: 700;
}

/* Chips */
.about-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.chip {
  display: inline-block;
  background: #fecd01;
  color: #0a1628;
  font-size: 0.8125rem;
  font-weight: 700;
  padding: 7px 16px;
  border-radius: 100px;
  letter-spacing: 0.2px;
}

/* Visual */
.about-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-badge-frame {
  position: relative;
  background: #fff;
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 4px 32px rgba(10, 22, 40, 0.08);
  border: 2px solid #fecd01;
}

.about-badge-frame::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border-radius: 26px;
  border: 1px solid rgba(254, 205, 1, 0.25);
  pointer-events: none;
}

.about-badge-img {
  max-width: 340px;
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .about-text h2 {
    font-size: 2rem;
  }

  .about-badge-frame {
    padding: 24px;
    max-width: 360px;
    margin: 0 auto;
  }
}
</style>
