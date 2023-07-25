<template>
  <main>
    <section id="hero-sec">
      <div class="container text-center text-md-start px-16 position-relative">
        <div class="row">
          <div class="col-md-7 grid-cols-1">
            <h1 data-aos="fade-up" id="" data-aos-duration="3000" class="text-white font-bold">
              {{ $t('landH1T') }}
              <br />
              {{ $t('landH1B') }}
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="3000" class="text-white py-2 fw-medium">
              {{ $t('landP') }}
            </h2>
            <RouterLink
              to="/signup"
              data-aos="fade-up"
              data-aos-duration="3000"
              class="rounded btn bg-yellow border-0 fw-medium text-black"
            >
              {{ $t('signupnow') }}
            </RouterLink>
          </div>
          <div
            class="col-md-5 parent-mobile-slider d-flex justify-content-md-end justify-content-center pt-4 pt-md-0"
          >
            <div class="mobile-slider slick-slider">
              <div
                id="carouselExampleInterval"
                class="slick-list carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  class="images-fade overflow-hidden carousel-inner"
                >
                  <div class="carousel-item active" data-bs-interval="2000" pause="false">
                    <img src="../assets/images/1.png" class="d-block img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000" pause="false">
                    <img src="../assets/images/2.png" class="d-block img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="4000" pause="false">
                    <img src="../assets/images/3.png" class="d-block img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="4000" pause="false">
                    <img src="../assets/images/4.png" class="d-block img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="4000" pause="false">
                    <img src="../assets/images/5.png" class="d-block img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="4000" pause="false">
                    <img src="../assets/images/6.png" class="d-block img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="4000" pause="false">
                    <img src="../assets/images/7.png" class="d-block img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="4000" pause="false">
                    <img src="../assets/images/8.png" class="d-block img-fluid" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="form-sec">
      <div class="container-fluid container-md">
        <div class="row">
          <div class="col-md-12 text-start">
            <h2 data-aos="fade-up" data-aos-duration="2000">
              {{ $t('fromSecH2T') }}
              <br />
              {{ $t('fromSecH2B') }}
            </h2>
            <p data-aos="fade-up" class="pt-1 pb-4 text-start" data-aos-duration="2000">
              {{ $t('fromSecP') }}
            </p>
            <form>
              <div class="row" data-aos="fade-up" data-aos-duration="2000">
                <div class="col-sm-5">
                  <div class="form-group icon-group">
                    <input type="text" class="form-control" :placeholder="$t('username')" />
                    <span class="input-icon">
                      <i class="fa-solid fa-user"></i>
                    </span>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="form-group form-group__password icon-group">
                    <input type="password" :placeholder="$t('password')" class="form-control" />
                    <span class="input-icon">
                      <i class="fa-solid fa-lock"></i>
                    </span>
                    <div class="ps-5 pb-3 d-flex d-sm-none">
                      {{ $t('fromSecForgot') }}
                      <RouterLink
                        to="/resetpassword"
                        class="link-underline link-underline-opacity-0"
                        >Reset</RouterLink
                      >
                    </div>
                  </div>
                </div>
                <div class="col-sm-2 px-3 px-sm-0 form-check">
                  <button type="submit" class="btn bg-yellow">{{ $t('signin') }}</button>
                  <br />
                </div>
                <div class="row">
                  <div class="col-sm-5 checkbox">
                    <input type="checkbox" id="remember" class="form-check-input" />
                    <label
                      @click="checkBox"
                      :class="{ 'with-icon': clicked }"
                      class="form-check-label"
                      for="exampleCheck1"
                      >{{ $t('fromSecRemember') }}</label
                    >
                    <div class="register-text">
                      {{ $t('fromSecRegister') }}
                      <RouterLink to="/signup" class="link-underline link-underline-opacity-0">{{
                        $t('signupnow')
                      }}</RouterLink>
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="ps-5 d-none d-sm-flex">
                      {{ $t('fromSecForgot') }}
                      <RouterLink
                        to="/resetpassword"
                        class="link-underline link-underline-opacity-0"
                        >{{ $t('fromSecReset') }}</RouterLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row justify-content-center py-5">
          <div class="col-md-4">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              class="stats-box text-center"
            >
              <div class="stat-pic">
                <i class="far fa-hourglass-half"></i>
              </div>
              <h3>10 {{ $t('fromSecond') }}</h3>
              <p>{{ $t('fromSecStat3') }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              class="stats-box text-center"
            >
              <div class="stat-pic">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <h3>14894756</h3>
              <p>{{ $t('fromSecStat2') }}</p>
            </div>
          </div>
          <div class="col-md-4 py-4 py-md-0">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              class="stats-box text-center"
            >
              <div class="stat-pic">
                <i class="fa-solid fa-coins"></i>
              </div>
              <h3>$0.01/1K</h3>
              <p>{{ $t('fromSecStat1') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div class="container-fluid container-md">
        <div class="row">
          <div class="col-md-4">
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              class="feat-bulb"
              src="https://cdn.mypanel.link/1847ba/g8hxr9kk5we88uf9.png"
              alt="bulb"
            />
          </div>
          <div class="col-md-8">
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              class="main-head text-center text-md-start"
            >
              {{ $t('featH2') }}
            </h2>
            <ul class="feature-list">
              <li data-aos="zoom-in-up" data-aos-duration="2000">
                <p>{{ $t('feat1') }}</p>
                <span class="feat-icon">
                  <i class="fa-solid fa-percent"></i>
                </span>
              </li>
              <li data-aos="zoom-in-up" data-aos-duration="2000">
                <p>{{ $t('feat2') }}</p>
                <span class="feat-icon">
                  <i class="fa-solid fa-jet-fighter"></i>
                </span>
              </li>
              <li data-aos="zoom-in-up" data-aos-duration="2000">
                <p>{{ $t('feat3') }}</p>
                <span class="feat-icon">
                  <i class="fa-solid fa-headset"></i>
                </span>
              </li>
              <li data-aos="zoom-in-up" data-aos-duration="2000">
                <p>{{ $t('feat4') }}</p>
                <span class="feat-icon">
                  <i class="fa-solid fa-money-bill-wave"></i>
                </span>
              </li>
              <li data-aos="zoom-in-up" data-aos-duration="2000">
                <p>{{ $t('feat5') }}</p>
                <span class="feat-icon">
                  <i class="fa-solid fa-medal"></i>
                </span>
              </li>
              <li data-aos="zoom-in-up" data-aos-duration="2000">
                <p>{{ $t('feat6') }}</p>
                <span class="feat-icon">
                  <i class="fa-solid fa-laptop"></i>
                </span>
              </li>
              <li data-aos="zoom-in-up" data-aos-duration="2000">
                <p>{{ $t('feat7') }}</p>
                <span class="feat-icon">
                  <i class="fa-solid fa-chart-line"></i>
                </span>
              </li>
              <li data-aos="zoom-in-up" data-aos-duration="2000">
                <p>{{ $t('feat8') }}</p>
                <span class="feat-icon">
                  <i class="fa-solid fa-hand-holding-heart"></i>
                </span>
              </li>
              <li data-aos="zoom-in-up" data-aos-duration="2000">
                <p>{{ $t('feat9') }}</p>
                <span class="feat-icon">
                  <i class="fa-solid fa-baby"></i>
                </span>
              </li>
              <li data-aos="zoom-in-up" data-aos-duration="2000">
                <p>{{ $t('feat10') }}</p>
                <span class="feat-icon">
                  <i class="fa-solid fa-database"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="payment-methods">
      <div class="container-fluid container-md">
        <div class="row">
          <div class="col-md-12">
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              class="main-head text-black text-center"
            >
              {{ $t('payH2') }}
            </h2>
            <br />
            <br /><img
              class="payment-logos"
              src="https://cdn.mypanel.link/1847ba/fzkxecmg5x9iki33.png"
              alt="payment-logos"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
    </section>
    <SeoSec />
  </main>
</template>

<script>
import SeoSec from '../components/SecSec.vue'

export default {
  components: { SeoSec },
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    checkBox() {
      this.clicked = !this.clicked
    }
  }
}
</script>

<style lang="scss" scoped>
#hero-sec {
  background-color: #000000;
  background-size: cover;
  padding: 70px 0 40px;
  background-position: center bottom;
  position: relative;

  .btn.bg-yellow {
    line-height: 42px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 5px;
  }

  h1 {
    font-size: 64px;
    font-weight: 900;
  }

  h2 {
    font-size: 22px;
  }

  &::before {
    content: '';
    background-image: url(https://cdn.mypanel.link/1847ba/0uhn18kxqnssebk8.png);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% 240px;
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    width: 100%;
    height: 240px;
  }
}

.parent-mobile-slider {
  .mobile-slider {
    width: 269px;
    height: 505px;

    .images-fade {
      position: relative;
      // border-radius: 50px;
      overflow: hidden;

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        margin-left: auto;
        background-image: url(https://cdn.mypanel.link/1847ba/l56f266impdh2ey9.png);
        background-size: 100% 100%;
        padding: 16px 18px 16px 18px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
      }

      .carousel-item {
        border-radius: 20px;
        overflow: hidden;
        height: 98%;
        width: 95%;

        img {
          height: 100%;
          width: 100%;
          position: relative;
          left: 10px;
          top: 10px;
          z-index: 998;
          border-radius: 20px;
        }
      }
    }
  }
}

#form-sec {
  .form-group.icon-group {
    position: relative;
    padding-left: 30px;

    & .input-icon {
      background-color: #fdf001;
      position: absolute;
      display: flex;
      width: 42px;
      height: 42px;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      color: #000;
      left: 8px;
      top: 5px;
      font-size: 18px;
      z-index: 1;
      transition: all ease-in 0.3s;
      border: 2px solid #ffffff;
    }
  }
  .btn.bg-yellow {
    line-height: 40px;
    width: 100%;
    display: block;
    font-size: 16px;
    font-weight: 600;
    border-color: #fdf001;
    color: #000;
  }

  #remember {
    display: none;
  }
  .checkbox {
    position: relative;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;

    .form-check-label {
      padding-left: 25px;
      margin-left: 30px;
      position: relative;
      cursor: pointer;
      transition: 0.3s all;

      &::before {
        content: '';
        width: 20px;
        height: 20px;
        background-color: transparent;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 50px;
        border: 2px solid #fdf001;
        transition: 0.2s all;
      }
    }
  }
  .checkbox .with-icon::after {
    content: '\f004';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #f42f2fa6;
    display: block;
    position: absolute;
    left: 4px;
    top: 4px;
    text-align: center;
    line-height: 13px;
    font-size: 12px;
  }
  .icon-group .form-control:focus + .input-icon {
    color: #fff;
    background-color: #000;
    border-color: #fdf001;
  }
  .form-control {
    border: 1px solid #000000;
    height: 52px;
    font-size: 16px;
    color: #000000;
    border-radius: 6px;
    padding-left: 30px;
    &:focus {
      background-color: #fdf001;
      border-color: #fdf001;
      color: #000000;
      box-shadow: 0px 6px 25px -5px #fdf001;
    }

    &::placeholder {
      font-weight: 600;
    }
  }
  .register-text {
    padding-left: 30px;
  }

  .stat-pic {
    width: 160px;
    height: 160px;
    background-image: url(https://cdn.mypanel.link/1847ba/lz41ocpdx3smg2ne.png);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    background-size: 100% 100%;
    & i {
      width: 52px;
      height: 52px;
      background-color: #000;
      color: #fdf001;
      text-align: center;
      line-height: 53px;
      border-radius: 60px;
    }
  }
  & h3 {
    font-size: 46px;
    text-align: center;
    color: #000;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 15px;
  }

  & p {
    font-size: 14px;
    text-align: center;
    font-weight: 700;
    color: #000;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }
}

#features {
  background-color: #000000;
  padding: 300px 0 60px;
  position: relative;
  background-image: url(https://cdn.mypanel.link/1847ba/2hinb1cos9mqym8a.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 330px;

  &:hover {
    .feat-bulb {
      filter: grayscale(0);
    }
  }
  .feat-bulb {
    width: 100%;
    display: block;
    margin: 100px auto 0;
    filter: grayscale(1);
  }
  .feature-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;

    li {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-width: 50%;
      flex: 0 0 50%;
      margin-top: 40px;
      padding: 0;
      text-align: right;
      flex-direction: row-reverse;
    }

    p {
      color: #fff;
      margin: 0;
      font-weight: 600;
    }

    .feat-icon {
      width: 56px;
      height: 56px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: #fdf001;
      color: #000000;
      font-size: 22px;
      text-align: center;
      line-height: 56px;
      border-radius: 50px;
      margin-right: 10px;
    }
  }
}

#payment-methods {
  background-color: #fdf001;
  background-image: url(https://cdn.mypanel.link/1847ba/0uhn18kxqnssebk8.png);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% 330px;
  padding: 60px 0 380px;

  .payment-logos {
    width: 100%;
  }
}

@media (max-width: 550px) {
  #hero-sec {
    margin-bottom: 50px;
    &::before {
      padding: 130px 0 40px;
      background-size: 100% 100px;
    }

    & h1 {
      margin-top: 0;
      font-size: 36px;
      line-height: 1;
    }

    & h2 {
      font-size: 15px;
      margin-bottom: 15px;
    }

    & .btn.bg-yellow {
      line-height: 32px;
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 15px;
    }

    & .nav.nav-tabs {
      flex-wrap: wrap;
    }
  }

  #features {
    padding: 130px 0 40px;
    background-size: 100% 100px;

    .feature-list {
      padding: 0;
      justify-content: center;
      align-items: flex-start;

      li {
        max-width: 33.333333333%;
        flex: 0 0 33.333333333%;
        margin-top: 15px;
        flex-direction: column-reverse;
        text-align: center;
        justify-content: center;
        padding: 0 1px;
      }

      & .feat-icon {
        width: 32px;
        height: 32px;
        font-size: 18px;
        line-height: 32px;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 8px;
      }
    }
  }

  #payment-methods {
    background-size: 100% 100px;
    padding: 40px 0 130px;
  }

  #form-sec .form-group.icon-group {
    padding-left: 10px;
  }
  #form-sec .form-group.icon-group .input-icon {
    left: -10px;
  }

  #form-sec .form-control {
    padding-left: 25px;
    margin: 15px 0;
  }

  .main-head {
    font-size: 38px;
  }
}

@media (max-width: 1400px) {
  .images-fade {
    width: 269px;
    height: 505px;
  }

  .nav-tabs > li > a {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
  }
}
</style>
