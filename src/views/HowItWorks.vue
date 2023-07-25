<template>
  <div class="howitworks my-5 container">
    <div class="row position-relative">
      <div class="col-md-12">
        <h2 class="text-center text-black main-head">{{ $t('howH2') }}</h2>
        <p class="text-center">
          {{ $t('howP') }}
        </p>
      </div>
    </div>
    <div class="row custom-row mt-5 pt-5 pt-md-0 border-left">
      <div class="col-sm-6 d-flex flex-column justify-content-center">
        <h3><span>01</span>{{ $t('howBox1H3') }}</h3>
        <p>
          {{ $t('howBox1Text1') }}
          <a class="yellow" href="/en/signup"
            ><strong>{{ $t('howBox1Link') }}</strong
            >.
          </a>
        </p>
        <p>{{ $t('howBox1Text2') }}</p>
        <br class="d-none d-md-block" />
        <br class="d-none d-md-block" />
        <br class="d-none d-md-block" />
        <br class="d-none d-md-block" />
        <br class="d-none d-md-block" />
        <br />
        <br />
      </div>
      <div class="col-sm-6">
        <div class="screenpic">
          <img :src="$t('howBox1Img')" alt="screenshot" />
        </div>
      </div>
    </div>
    <div class="row border-right">
      <div class="col-sm-6">
        <div class="screenpic">
          <img :src="$t('howBox2Img')" alt="screenshot" />
        </div>
      </div>
      <div class="col-sm-6 py-3">
        <h3>
          <span>02</span>
          {{ $t('howBox2H3') }}
        </h3>
        <p>
          {{ $t('howBox2Text1') }}
        </p>
      </div>
    </div>
    <div class="row py-5 border-left">
      <div class="col-sm-6">
        <h3>
          <span>03</span>
          {{ $t('howBox3H3') }}
        </h3>
        <p>
          {{ $t('howBox3Text1') }}
        </p>
        <p>
          {{ $t('howBox3Text2') }}
        </p>
      </div>
      <div class="col-sm-6">
        <div class="screenpic">
          <img :src="$t('howBox3Img')" alt="screenshot" />
        </div>
      </div>
    </div>
    <div class="row py-5 border-right">
      <div class="col-sm-6">
        <div class="screenpic">
          <img :src="$t('howBox4Img')" alt="screenshot" />
        </div>
      </div>
      <div class="col-sm-6">
        <h3>
          <span>04</span>
          {{ $t('howBox4H3') }}
        </h3>
        <p>
          {{ $t('howBox4Text1') }}
        </p>
        <p>{{ $t('howBox4Text2') }}</p>
      </div>
    </div>
    <div class="row mb-5 border-left">
      <div class="col-sm-6">
        <h3>
          <span>05</span>
          {{ $t('howBox5H3') }}
        </h3>
        <p>
          {{ $t('howBox5Text1') }}
        </p>
        <p>
          {{ $t('howBox5Text2') }}
        </p>
      </div>
      <div class="col-sm-6">
        <div class="screenpic">
          <img :src="$t('howBox5Img')" alt="screenshot" />
        </div>
        <span class="end-badge">END</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.howitworks {
  & h3 {
    font-size: 20px;
    font-weight: 400;
    color: #000;
    margin-bottom: 35px;

    & span {
      font-size: 25px;
      font-weight: 700;
      display: inline-flex;
      width: 58px;
      height: 58px;
      align-items: center;
      justify-content: center;
      background-color: #fdf001;
      border-radius: 50px;
    }
  }

  & p {
    font-size: 18px;
    color: #000000;
    margin-bottom: 20px;
  }

  .custom-row {
    &::before {
      content: 'START';
      width: 90px;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      background-color: #fdf001;
      font-size: 22px;
      position: absolute;
      top: -45px;
      right: 50%;
      transform: translateX(50%);
      font-weight: 700;
      color: #000000;
      z-index: 3;
    }

    &::after {
      content: '';
      width: 50%;
      border-bottom: 3px dashed black;
      position: absolute;
      top: 0px;
      left: 0;
    }
  }
  & .row.border-left {
    border-left: 3px dashed #000;
  }

  & .row.border-right {
    border-right: 3px dashed #000;
  }

  & .row.border-left,
  .row.border-right {
    padding-top: 60px;
    padding-bottom: 60px;
    border-bottom: 3px dashed #000;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
  }
  & .row.border-left:nth-child(2) {
    padding-top: 0;
  }

  & .start-badge,
  .end-badge {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: #fdf001;
    font-size: 22px;
    font-weight: 700;
    color: #000000;
    position: absolute;
  }

  & .end-badge {
    right: -15px;
    bottom: -48px;
  }

  & .parent-start-badge {
    border-bottom: 3px dashed #000;
    position: absolute;
    top: 305px;
    left: 105px;
    & span {
      width: 90px;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      background-color: #fdf001;
      font-size: 22px;
      position: absolute;
      top: -45px;
      right: -10px;

      font-weight: 700;
      color: #000000;
    }
  }

  & .screenpic img {
    width: 100%;
    display: block;
    margin: auto;
  }
}
</style>
