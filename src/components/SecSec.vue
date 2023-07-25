<template>
  <section id="seo-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="main-head text-center text-black" data-aos="fade-up" data-aos-duration="2000">
            {{ $t('SecH2') }}
          </h2>
          <ul
            data-aos="fade-up"
            data-aos-duration="2000"
            class="nav gap-1 gap-sm-2 gap-md-0 border-bottom-0 nav-tabs"
          >
            <li class="nav-item">
              <button
                :class="{ active: active === '1' }"
                @click="setActive('1')"
                val="1"
                class="nav-link rounded-1"
                aria-current="page"
              >
                <i class="fab fa-instagram"></i>
                {{ $t('SeoNav1') }}
              </button>
            </li>
            <li class="nav-item">
              <button
                :class="{ active: active === '2' }"
                @click="setActive('2')"
                val="2"
                class="nav-link rounded-1"
              >
                <i class="fab fa-facebook"></i>
                {{ $t('SeoNav2') }}
              </button>
            </li>
            <li class="nav-item">
              <button
                :class="{ active: active === '3' }"
                @click="setActive('3')"
                val="3"
                class="nav-link rounded-1"
              >
                <i class="fab fa-tikhrefk"></i>
                {{ $t('SeoNav3') }}
              </button>
            </li>
            <li class="nav-item">
              <button
                :class="{ active: active === '4' }"
                @click="setActive('4')"
                val="4"
                class="nav-link rounded-1"
              >
                <i class="fab fa-youtube"></i>
                {{ $t('SeoNav4') }}
              </button>
            </li>
            <li class="nav-item">
              <button
                :class="{ active: active === '5' }"
                @click="setActive('5')"
                val="5"
                class="nav-link rounded-1"
              >
                <i class="fab fa-spotify"></i>
                {{ $t('SeoNav5') }}
              </button>
            </li>
            <li class="nav-item">
              <button
                :class="{ active: active === '6' }"
                @click="setActive('6')"
                val="6"
                class="nav-link rounded-1"
              >
                <i class="fab fa-twitter"></i>
                {{ $t('SeoNav6') }}
              </button>
            </li>
            <li class="nav-item">
              <button
                :class="{ active: active === '7' }"
                @click="setActive('7')"
                val="7"
                class="nav-link rounded-1"
              >
                <i class="fab fa-snapchat"></i>
                {{ $t('SeoNav7') }}
              </button>
            </li>
            <li class="nav-item">
              <button
                :class="{ active: active === '8' }"
                @click="setActive('8')"
                val="8"
                class="nav-link rounded-1"
              >
                <i class="fa-solid fa-lightbulb"></i>
                {{ $t('SeoNav8') }}
              </button>
            </li>
          </ul>
          <div class="tab-content" data-aos="fade-up" data-aos-duration="2000">
            <div
              :details="filteredDetails[active]"
              role="tabpanel"
              class="tab-pane active"
              id="tab1"
            >
              <img
                data-aos="flip-right"
                data-aos-duration="2000"
                :src="filteredDetails[0].imgUrl"
                alt=""
              />
              <h2 data-aos="zoom-out" data-aos-duration="2000">
                {{ $i18n.locale === 'ar' ? filteredDetails[0].ar.title : filteredDetails[0].title }}
              </h2>
              <p data-aos="zoom-out" data-aos-duration="2000" class="text-center">
                {{
                  $i18n.locale === 'ar'
                    ? filteredDetails[0].ar.description
                    : filteredDetails[0].description
                }}
              </p>
            </div>
          </div>
          <div class="text-center">
            <RouterLink
              to="/signup"
              class="btn bg-yellow fw-bold aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="3000"
              >{{ $t('signupnow') }}</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import details from '../detailsServices'
export default {
  name: 'SeoSec',
  data() {
    return {
      details: [],
      active: '1'
    }
  },
  computed: {
    filteredDetails() {
      const filtered = this.details.filter((detail) => detail.id === this.active)
      return filtered.length > 0 ? filtered : null
    }
  },
  created() {
    this.details = details
  },
  methods: {
    setActive(clicked) {
      this.active = clicked
    },
    getItemById(id) {
      return this.jsonData.find((item) => item.id === id)
    }
  }
}
</script>

<style lang="scss" scoped>
#seo-sec {
  padding: 60px 0;
  background-image: url(https://cdn.mypanel.link/1847ba/4wn0kfpty5gf108y.png);
  background-repeat: no-repeat;
  background-position: center;

  .nav-tabs {
    justify-content: center;
    display: flex;

    & li {
      margin: 0 3px;

      .nav-link {
        background-color: #000000;
        color: #ffffff;
        font-weight: 700;
        transition: all 0.2s ease-in;
        font-size: 17px;
        border: 0;
        cursor: pointer;
      }
    }
  }

  .nav-tabs li button.active {
    color: #000000;
    background-color: #fdf001;
    border: 0;
    box-shadow: 2px 2px 5px 0px #000000;
  }

  & .nav.nav-tabs {
    justify-content: center;
    display: flex;
  }
}

@media (max-width: 550px) {
  #seo-sec {
    & .nav.nav-tabs {
      flex-wrap: wrap;
      & li {
        margin: 2px 2px;
        & a {
          font-size: 14px;
          padding: 10px 10px;
        }
      }
    }
    .tab-pane h2 {
      font-size: 26px;
    }
  }

  .main-head {
    font-size: 38px;
  }
}

.tab-content {
  & .tab-pane {
    display: block;
    overflow: hidden;
  }
  img {
    width: 160px;
    display: block;
    margin: 40px auto 30px;
  }

  .tab-pane h2 {
    color: #000000;
    font-size: 46px;
    font-weight: 900;
    margin-top: 0;
    text-align: center;
  }
}

@media (max-width: 1400px) {
  .nav-tabs > li > .nav-link {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
  }
}
</style>
