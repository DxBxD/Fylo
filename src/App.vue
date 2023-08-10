<template>
  <section class="main-layout">
    <AppHeader />
    <AppHome />
    <AppFooter />
  </section>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppHome from './views/AppHome.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'app',
  created() {
  },
  methods: {},
  components: {
    AppHeader,
    AppHome,
    AppFooter
  },
}
</script>
