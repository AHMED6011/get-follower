<template>
  <div id="sign-up">
    <div class="container p-0">
      <div class="row py-5">
        <div class="col-md-5 order-2 order-md-1" data-aos-duration="1500" data-aos="fade-up-right">
          <form method="post">
            <div class="form-group icon-group">
              <input
                type="text"
                class="form-control"
                id="username"
                value
                name="RegistrationForm[login]"
                :placeholder="$t('username')"
              />
              <span class="input-icon">
                <i class="material-icons">person</i>
              </span>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group icon-group">
                  <input
                    type="text"
                    class="form-control popup-input"
                    id="firstname"
                    value
                    name="RegistrationForm[first_name]"
                    :placeholder="$t('signupFN')"
                  />
                  <span class="input-icon">
                    <i class="material-icons">verified_user</i>
                  </span>
                  <div class="popupInWrapper" style="display: none">
                    <span class="popupIcon">
                      NOTE:
                      <br />
                      Please use your REAL and ACCURATE Personal Information in order to be eligible
                      to site benefits including multiple payment methods.
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group icon-group">
                  <input
                    type="text"
                    class="form-control popup-input"
                    id="firstname"
                    value
                    name="RegistrationForm[first_name]"
                    :placeholder="$t('signupLN')"
                  />
                  <span class="input-icon">
                    <i class="material-icons">person</i>
                  </span>
                </div>
              </div>
            </div>
            <div class="form-group icon-group">
              <input
                type="email"
                class="form-control"
                id="email"
                value
                name="RegistrationForm[email]"
                :placeholder="$t('email')"
              />
              <span class="input-icon">
                <i class="material-icons">email</i>
              </span>
            </div>
            <div class="form-group icon-group">
              <input
                type="text"
                class="form-control"
                id="skype"
                value
                name="RegistrationForm[skype]"
                :placeholder="$t('signupM')"
              />
              <span class="input-icon">
                <i class="fab fa-whatsapp"></i>
              </span>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group icon-group">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="RegistrationForm[password]"
                    :placeholder="$t('password')"
                  />
                  <span class="input-icon">
                    <i class="material-icons">lock</i>
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group icon-group">
                  <input
                    type="password"
                    class="form-control"
                    id="confirm"
                    name="RegistrationForm[password_again]"
                    :placeholder="$t('signupC')"
                  />
                  <span class="input-icon">
                    <i class="material-icons">lock</i>
                  </span>
                </div>
              </div>
            </div>
            <button type="submit" class="btn bg-yellow w-100 btn-block">{{ $t('signup') }}</button>
            <div class="text-center fw-medium py-4">
              {{ $t('signupHaveAcount') }}
              <RouterLink
                class="link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                to="/signin"
                >{{ $t('signin') }}</RouterLink
              >
            </div>
          </form>
        </div>
        <div
          class="col-md-7 ps-5 order-1 order-md-2"
          data-aos-duration="1500"
          data-aos="fade-up-left"
        >
          <h2 class="inner-main-head">{{ $t('signupH2') }}</h2>
          <h3 class="inner-sub-head">{{ $t('signupH3') }}</h3>
          <img class="lap img-fluid" :src="$t('signupImg')" alt="laptop" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  components: { RouterLink }
}
</script>

<style lang="scss" scoped>
#sign-up {
  & .form-group {
    margin-bottom: 15px;
    &.icon-group {
      position: relative;
      padding-left: 30px;

      & .form-control {
        border: 1px solid #000000;
        height: 52px;
        font-size: 15px;
        color: #000000;
        border-radius: 6px;
        padding-left: 25px;

        &:focus {
          background-color: #fdf001;
          border-color: #fdf001;
          color: #000000;
          box-shadow: 0px 6px 25px -5px #fdf001;
        }
      }
      & .form-control:focus + .input-icon {
        color: #fff;
        background-color: #000;
        border-color: #fdf001;
      }
    }
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
      font-size: 22px;
      z-index: 1;
      transition: all ease-in 0.3s;
      border: 2px solid #ffffff;
    }
  }

  .inner-main-head {
    color: #000000;
    font-size: 35px;
    text-transform: capitalize;
    font-weight: 300;
    margin-bottom: 10px;
  }
  .inner-sub-head {
    margin-bottom: 35px;
    font-size: 20px;
    font-weight: 300;
  }

  .bg-yellow {
    line-height: 40px;
    font-weight: 600;
  }
}
</style>
