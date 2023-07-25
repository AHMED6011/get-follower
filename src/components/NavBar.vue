<template>
  <div class="bg-black">
    <nav class="navbar navbar-expand-lg container">
      <div class="container-fluid">
        <RouterLink to="/">
          <img
            width="270"
            height="50"
            src="https://cdn.mypanel.link/1847ba/wglhinh0oxtulz1k.png"
            alt="SMMCPAN"
          />
        </RouterLink>
        <select
          onchange="this.size=1; this.blur()"
          @change="updateLanguage()"
          class="form-select px-2 bg-transparent border-0 text-white w-auto ms-2"
          v-model="$i18n.locale"
        >
          <option
            class="text-black"
            :value="locale"
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
          >
            {{ locale === 'en' ? 'English' : 'عربي' }}
          </option>
        </select>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav fw-medium">
            <li class="nav-item px-2">
              <RouterLink class="nav-link text-white" to="/service">{{
                $t('services')
              }}</RouterLink>
            </li>
            <li class="nav-item px-2">
              <RouterLink class="nav-link text-white" to="/faq">{{ $t('faq') }}</RouterLink>
            </li>
            <li class="nav-item px-2">
              <RouterLink class="nav-link text-white" to="/signup">{{ $t('signup') }}</RouterLink>
            </li>
            <li class="nav-item px-2">
              <RouterLink class="nav-link text-white" to="/">{{ $t('signin') }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar',
  components: { RouterLink },
  data() {
    return { locales: ['ar', 'en'] }
  },
  methods: {
    updateLanguage() {
      sessionStorage.setItem('locale', this.$i18n.locale)
    }
  },
  mounted() {
    if (sessionStorage.getItem('locale')) {
      this.$i18n.locale = sessionStorage.getItem('locale')
    } else {
      sessionStorage.setItem('locale', this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-select {
  appearance: auto;
  background-image: none;
  padding: 0;
  &:focus {
    box-shadow: none;
  }
}
</style>
