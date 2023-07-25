<template>
  <div class="container">
    <div class="row text-center py-4">
      <p>
        {{ $t('onPage') }}
        <strong>{{ $t('faq') }}</strong>
      </p>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <ul class="nav nav-tabs d-none d-md-flex border-bottom-0 faq-tabs">
          <li>
            <button class="text-start" :class="{ active: active === '1' }" @click="setActive('1')">
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL1') }}
            </button>
          </li>
          <li>
            <button class="text-start" :class="{ active: active === '2' }" @click="setActive('2')">
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL2') }}
            </button>
          </li>
          <li>
            <button class="text-start" :class="{ active: active === '3' }" @click="setActive('3')">
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL3') }}
            </button>
          </li>
          <li>
            <button class="text-start" :class="{ active: active === '4' }" @click="setActive('4')">
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL4') }}
            </button>
          </li>
          <li>
            <button class="text-start" :class="{ active: active === '5' }" @click="setActive('5')">
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL5') }}
            </button>
          </li>
          <li>
            <button class="text-start" :class="{ active: active === '6' }" @click="setActive('6')">
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL6') }}
            </button>
          </li>
          <li>
            <button class="text-start" :class="{ active: active === '7' }" @click="setActive('7')">
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL7') }}
            </button>
          </li>
          <li>
            <button class="text-start" :class="{ active: active === '8' }" @click="setActive('8')">
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL8') }}
            </button>
          </li>
          <li>
            <button class="text-start" :class="{ active: active === '9' }" @click="setActive('9')">
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL9') }}
            </button>
          </li>
          <li>
            <button
              class="text-start"
              :class="{ active: active === '10' }"
              @click="setActive('10')"
            >
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL10') }}
            </button>
          </li>
          <li>
            <button
              class="text-start"
              :class="{ active: active === '11' }"
              @click="setActive('11')"
            >
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL11') }}
            </button>
          </li>
          <li>
            <button
              class="text-start"
              :class="{ active: active === '12' }"
              @click="setActive('12')"
            >
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL12') }}
            </button>
          </li>
          <li>
            <button
              class="text-start"
              :class="{ active: active === '13' }"
              @click="setActive('13')"
            >
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL13') }}
            </button>
          </li>
          <li>
            <button
              class="text-start"
              :class="{ active: active === '14' }"
              @click="setActive('14')"
            >
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL14') }}
            </button>
          </li>
          <li>
            <button
              class="text-start"
              :class="{ active: active === '15' }"
              @click="setActive('15')"
            >
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL15') }}
            </button>
          </li>
          <li>
            <button
              class="text-start"
              :class="{ active: active === '16' }"
              @click="setActive('16')"
            >
              <span class="faq-icon">
                <i class="fa-solid fa-question"></i>
              </span>
              {{ $t('faqL16') }}
            </button>
          </li>
        </ul>
        <div class="input-group faq-selector d-flex d-md-none">
          <span class="input-group-addon">
            <i class="far fa-question"></i>
          </span>
          <select class="form-control" id="tab_selector">
            <option :class="{ active: active === '1' }" @click="setActive('1')">
              {{ $t('faqL1') }}
            </option>
            <option :class="{ active: active === '2' }" @click="setActive('2')">
              {{ $t('faqL2') }}
            </option>
            <option :class="{ active: active === '3' }" @click="setActive('3')">
              {{ $t('faqL3') }}
            </option>
            <option :class="{ active: active === '4' }" @click="setActive('4')">
              {{ $t('faqL4') }}
            </option>
            <option :class="{ active: active === '5' }" @click="setActive('5')">
              {{ $t('faqL5') }}
            </option>
            <option :class="{ active: active === '6' }" @click="setActive('6')">
              {{ $t('faqL6') }}
            </option>
            <option :class="{ active: active === '7' }" @click="setActive('7')">
              {{ $t('faqL7') }}
            </option>
            <option :class="{ active: active === '8' }" @click="setActive('8')">
              {{ $t('faqL8') }}
            </option>
            <option :class="{ active: active === '9' }" @click="setActive('9')">
              {{ $t('faqL9') }}
            </option>
            <option :class="{ active: active === '10' }" @click="setActive('10')">
              {{ $t('faqL10') }}
            </option>
            <option :class="{ active: active === '11' }" @click="setActive('11')">
              {{ $t('faqL11') }}
            </option>
            <option :class="{ active: active === '12' }" @click="setActive('12')">
              {{ $t('faqL12') }}
            </option>
            <option :class="{ active: active === '13' }" @click="setActive('13')">
              {{ $t('faqL13') }}
            </option>
            <option :class="{ active: active === '14' }" @click="setActive('14')">
              {{ $t('faqL14') }}
            </option>
            <option :class="{ active: active === '15' }" @click="setActive('15')">
              {{ $t('faqL15') }}
            </option>
            <option :class="{ active: active === '16' }" @click="setActive('16')">
              {{ $t('faqL16') }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="tab-content faq-cont">
          <div :class="{ active: active === '1' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL1') }}</h4>
            <p v-if="$i18n.locale == 'en'">
              Partial Status is when we partially refund the remains of an order. Sometimes for some
              reasons we are unable to deliver a full order, so we refund you the remaining
              undelivered amount.
              <br />
              Example: You bought an order with quantity 10 000 and charges 10$, let's say we
              delivered 9 000 and the remaining 1 000 we couldn't deliver, then we will "Partial"
              the order and refund you the remaining 1 000 (1$ in this example).
            </p>
            <p v-else>
              {{ $t('faqBox1P1') }}
            </p>
          </div>
          <div :class="{ active: active === '2' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL2') }}</h4>
            <p v-if="$i18n.locale == 'en'">
              Drip Feed is a service that we are offering so you would be able to put the same order
              multiple times automatically.
              <br />
              Example: let's say you want to get 1000 likes on your Instagram Post but you want to
              get 100 likes each 30 minutes, you will put
              <br />
              Link: Your Post Link
              <br />
              Quantity: 100
              <br />
              Runs: 10 (as you want to run this order 10 times, if you want to get 2000 likes, you
              will run it 20 times, etc…)
              <br />
              Interval: 30 (because you want to get 100 likes on your post each 30 minutes, if you
              want each hour, you will put 60 because the time is in minutes)
              <br />
              P.S: Never order more quantity than the maximum which is written on the service name
              (Quantity x Runs),
              <br />
              Example if the service's max is 4000, you don’t put Quantity: 500 and Run: 10, because
              total quantity will be 500x10 = 5000 which is bigger than the service max (4000).
              <br />
              Also never put the Interval below the actual start time (some services need 60 minutes
              to start, don’t put Interval less than the service start time or it will cause a fail
              in your order).
            </p>
            <p v-else>{{ $t('faqBox2P') }}</p>
          </div>
          <div :class="{ active: active === '3' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL3') }}</h4>
            <p>
              {{ $t('faqBox3P1') }}
            </p>
            <a href="https://smmcpan.com/en/services">https://smmcpan.com/en/services</a>
            <p>
              {{ $t('faqBox3P2') }}
            </p>
            <p>
              {{ $t('faqBox3P3') }}
            </p>
            <p>
              {{ $t('faqBox3P4') }}
            </p>
            <p>{{ $t('faqBox3P5') }}</p>
            <p>
              3740 | abcd | 1000
              <br />
              3740 | asdf | 1000
              <br />
              3740 | qwer | 1000
            </p>
          </div>
          <div :class="{ active: active === '4' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL4') }}</h4>
            <p>
              {{ $t('faqBox4P1') }}
              <a href="https://smmcpan.com/en/child-panels">https://smmcpan.com/en/child-panels</a>
              {{ $t('faqBox4P2') }}
            </p>
          </div>
          <div :class="{ active: active === '5' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL5') }}</h4>
            <p>
              {{ $t('faqBox5P') }}
            </p>
          </div>
          <div :class="{ active: active === '6' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL56') }}</h4>
            <p>{{ $t('faqBox6P') }}</p>
          </div>
          <div :class="{ active: active === '7' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL7') }}</h4>
            <p>
              {{ $t('faqBox7P') }}
              <a href="https://smmcpan.com/tickets/">{{ $t('faqBoxL') }}</a
              >.
            </p>
          </div>
          <div :class="{ active: active === '8' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL8') }}</h4>
            <p>{{ $t('faqBox8P') }}.</p>
          </div>
          <div :class="{ active: active === '9' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL9') }}</h4>
            <p>
              {{ $t('faqBox9P') }} <a href="https://smmcpan.com/tickets/">{{ $t('faqBoxL') }}</a>
            </p>
          </div>
          <div :class="{ active: active === '10' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL10') }}</h4>
            <p>
              {{ $t('faqBox10P1') }}
              <br />
              <span v-if="!$t('faqBox10P2') === ''">
                {{ $t('faqBox10P2') }}
              </span>
            </p>
          </div>
          <div :class="{ active: active === '11' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL11') }}</h4>
            <p>{{ $t('faqBox11P') }}</p>
          </div>
          <div :class="{ active: active === '12' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL12') }}</h4>
            <p>
              {{ $t('faqBox12P1') }}
              <br />
              <span v-if="!$t('faqBox12P2') === ''">
                {{ $t('faqBox12P2') }}
              </span>
            </p>
          </div>
          <div :class="{ active: active === '13' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL13') }}</h4>
            <p>
              {{ $t('faqBox13P') }}
            </p>
          </div>
          <div :class="{ active: active === '14' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL14') }}</h4>
            <p>{{ $t('faqBox14P') }}</p>
          </div>
          <div :class="{ active: active === '15' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL15') }}</h4>
            <p>
              {{ $t('faqBox15P') }}
            </p>
          </div>
          <div :class="{ active: active === '16' }" class="tab-pane">
            <div class="faq-cont-icon">
              <i class="far fa-question"></i>
            </div>
            <h4>{{ $t('faqL16') }}</h4>
            <p>
              {{ $t('faqBox16P') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: '1'
    }
  },
  methods: {
    setActive(clicked) {
      return (this.active = clicked)
    },
    getItemById() {
      return
    }
  }
}
</script>

<style lang="scss" scoped>
.nav.nav-tabs.faq-tabs {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 35px;

  & li {
    flex: 0 0 25%;
    max-width: 25%;
    float: none;

    & button {
      color: #0006;
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      margin-right: 0;
      transition: all 0.3s ease-in-out;
      font-size: 14px;
      font-weight: 600;
      padding: 10px 15px;

      &:hover span {
        background-color: #fdf001;
        color: #000000;
      }

      &.active {
        transform: scale(1.1);
        span {
          background-color: #fdf001;
          color: #000000;
          box-shadow: 1px 2px 5px 0 #000;
        }
      }

      &:hover,
      &:focus,
      &:active {
        color: #000;
      }

      & .faq-icon {
        width: 56px;
        height: 56px;
        min-width: 56px;
        background-color: #000000;
        text-align: center;
        line-height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fdf001;
        font-size: 20px;
        font-weight: 400;
        border-radius: 50px;
        margin-right: 15px;
        transition: all 0.3s ease-in-out;
      }
    }
  }
}

.tab-content.faq-cont {
  background-color: #fdf001;
  border-radius: 10px;
  padding: 45px 30px;
  text-align: center;
  position: relative;
  margin-bottom: 40px;

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 19px solid transparent;
    border-bottom: 34px solid #fdf001;
    border-right: 19px solid transparent;
    position: absolute;
    left: 50%;
    top: -33px;
    transform: translateX(-50%);
  }

  & .tab-content > .active {
    height: auto;
  }

  & .faq-cont-icon {
    width: 56px;
    height: 56px;
    display: block;
    margin: 0px auto 20px;
    background-color: #000;
    text-align: center;
    line-height: 56px;
    color: #fdf001;
    font-size: 20px;
    border-radius: 50px;
  }

  & h4 {
    font-size: 14px;
    color: #000;
    font-weight: 700;
    margin-bottom: 15px;
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 20px;
  }
}

.form-control {
  border: 1px solid #000000;
  height: 52px;
  font-size: 16px;
  color: #000000;
  border-radius: 6px;
  padding-left: 30px;
  padding-left: 25px;
  appearance: revert;

  &:focus {
    box-shadow: none;
  }
}

.input-group.faq-selector {
  margin-bottom: 50px;

  & .input-group-addon {
    color: #fdf001;
    padding: 6px 12px;
    font-size: 18px;
    font-weight: normal;
    line-height: 1;
    background-color: #000000;
    border: 1px solid #000000;
    border-radius: 4px;
    align-items: center;
    display: flex;
  }
}

.rtl {
  .nav.nav-tabs.faq-tabs li button span {
    margin-left: 15px !important;
    margin-right: 0 !important;
  }
}
</style>
