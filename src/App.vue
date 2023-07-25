<template>
  <main :class="$i18n.locale == 'ar' ? 'rtl' : ''" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <NavBar />
    <RouterView />
    <NotifBar />
    <FooterSection />
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import NotifBar from './components/NotifBar.vue'

export default {
  components: { RouterView, NavBar, NotifBar, FooterSection }
}
</script>

<style lang="scss"></style>
