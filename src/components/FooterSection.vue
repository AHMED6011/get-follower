<template>
  <footer :class="$i18n.locale == 'ar' ? 'rtl' : ''">
    <div class="footer-top">
      <div class="container">
        <div class="row text-center text-md-start">
          <div class="col-md-6">
            <img
              class="footer-logo"
              src="https://cdn.mypanel.link/1847ba/wglhinh0oxtulz1k.png"
              alt="SMMCPAN"
              title="SMMCPAN"
            />
            <p>
              {{ $t('footerP') }}
            </p>
          </div>
          <div class="col-md-3">
            <h4 class="widget-title">{{ $t('footeQH4') }}</h4>
            <ul class="footer-nav">
              <li>
                <RouterLink to="/">API</RouterLink>
              </li>
              <li>
                <RouterLink to="/howitworks">{{ $t('footerQL1') }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/faq">{{ $t('faq') }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/terms">{{ $t('footerQL2') }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/blog">{{ $t('footerQL3') }}</RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4 class="widget-title">{{ $t('footerH4') }}</h4>
            <p>
              <strong>Email</strong>:
              <a href="mailto:info@.com">for@example.com</a>
            </p>
            <ul class="follow-us">
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class="copyright-text text-center">
              {{ $t('footerCopyRight') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style lang="scss" scoped>
.footer-top {
  background-color: #000;
  padding: 40px 0;

  & .footer-logo {
    width: 190px;
    margin-bottom: 20px;
  }

  & p {
    color: #fff;
    line-height: 26px;
  }

  & .widget-title {
    margin-top: 0;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
  }

  & .footer-nav {
    padding: 0;
    list-style: none;

    & a {
      color: #fff;
      line-height: 26px;
      display: block;
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        color: #fdf001;
      }
    }
  }

  & .follow-us {
    padding: 0;
    list-style: none;
    display: flex;

    & li a {
      text-decoration: none;
      width: 32px;
      height: 32px;
      display: flex;
      background: #ffffff;
      color: #000000;
      border-radius: 500px;
      margin: 0 2px;
      transition: all ease-in 0.3s;
      justify-content: center;
      align-items: center;

      &:hover,
      &:active,
      &:focus {
        background-color: #fdf001;
        transform: scale(1.3);
        transition: all ease-in 0.3s;
      }

      & i {
        width: 26px;
        text-align: center;
      }
    }
  }
}

.footer-bottom {
  padding: 15px 0;

  .copyright-text {
    margin-bottom: 0;
  }
}

@media (max-width: 767px) {
  .footer-top p {
    line-height: 20px;
    text-align: center;
    margin-bottom: 20px;
    font-size: 14px;
  }
  .footer-top .col-md-3:nth-child(2) {
    width: 45%;
  }
  .footer-top .col-md-3 {
    width: 55%;
    float: left;
  }
}
</style>
