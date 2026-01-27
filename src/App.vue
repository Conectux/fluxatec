<script setup lang="ts">
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import ValueProposition from './components/ValueProposition.vue'
import Products from './components/Products.vue'
import Services from './components/Services.vue'
import TargetAudience from './components/TargetAudience.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <Hero />
    <About />
    <ValueProposition />
    <Products />
    <Services />
    <TargetAudience />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
}
</style>
