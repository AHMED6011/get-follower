<template>
  <div class="bg-black">
    <nav class="navbar navbar-expand-lg container">
      <div class="container-fluid">
        <RouterLink to="/">
          <img src="https://cdn.mypanel.link/1847ba/wglhinh0oxtulz1k.png" alt="SMMCPAN" />
        </RouterLink>
        <select
          onchange="this.size=1; this.blur()"
          @change="updateLanguage()"
          class="form-select d-none d-md-block px-2 bg-transparent border-0 text-white w-auto ms-2"
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
          class="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon text-white"></span>
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
            <li class="d-block d-md-none">
              <select
                onchange="this.size=1; this.blur()"
                @change="updateLanguage()"
                class="form- px-2 bg-transparent border-0 text-white w-auto ms-2"
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

nav img {
  width: 270px;
  height: 50px;
}

@media (max-width: 550px) {
  nav {
    padding-bottom: 20px;
  }
  nav img {
    width: 200px;
    height: 40px;
  }
}
</style>
