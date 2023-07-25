<template>
  <div class="container">
    <div class="row pt-4">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <p class="text-center">
          {{ $t('onPage') }}
          <strong>{{ $t('termstitle') }}</strong>
        </p>
      </div>
      <div class="col-sm-4"></div>
    </div>
    <div class="row pb-5">
      <div class="accordion rounded-0" id="accordionExample">
        <div class="accordion-item bg-body-secondary mb-1 rounded-0">
          <h2 class="accordion-header">
            <button
              class="accordion-button bg-yellow rounded-0 fs-5 text-black fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {{ $t('terms1H') }}
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                {{ $t('terms1P1') }}
              </p>
              <p>
                {{ $t('terms1P2') }}
              </p>
              <p>
                {{ $t('terms1P3') }}
              </p>
              <p>
                {{ $t('terms1P4') }}
              </p>
              <p>
                {{ $t('terms1P5') }}
              </p>
              <p>
                {{ $t('terms1P6') }}
              </p>
              <p>
                {{ $t('terms1P7') }}
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-body-secondary mb-1 rounded-0">
          <h2 class="accordion-header rounded-0">
            <button
              class="accordion-button bg-yellow rounded-0 fs-5 text-black fw-semibold collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {{ $t('terms2H') }}
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                {{ $t('terms2P1') }}
              </p>
              <p>
                {{ $t('terms2P2') }}
              </p>
              <p>
                {{ $t('terms2P3') }}
              </p>
              <p>
                {{ $t('terms2P4') }}
              </p>
              <p>
                {{ $t('terms2P5') }}
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-body-secondary mb-1 rounded-0">
          <h2 class="accordion-header">
            <button
              class="accordion-button bg-yellow rounded-0 fs-5 text-black fw-semibold collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {{ $t('terms3H') }}
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                {{ $t('terms3P1') }}
              </p>
              <p>
                {{ $t('terms3P2') }}
              </p>
              <p>
                {{ $t('terms3P3') }}
              </p>
              <p>
                {{ $t('terms3P4') }}
              </p>
              <p>
                {{ $t('terms3P5') }}
              </p>
              <p>
                {{ $t('terms3P6') }}
              </p>
              <p>
                {{ $t('terms3P7') }}
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-body-secondary rounded-0">
          <h2 class="accordion-header">
            <button
              class="accordion-button bg-yellow rounded-0 fs-5 text-black fw-semibold collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {{ $t('terms4H') }}
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                {{ $t('terms4P1') }}
              </p>
              <p>
                {{ $t('terms4P2') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.rtl {
  .accordion-button::after {
    margin-right: auto;
    margin-left: 0;
  }
}
.accordion-button {
  &:focus {
    box-shadow: none;
  }
}
</style>
