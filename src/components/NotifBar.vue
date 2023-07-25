<template>
  <div class="parent-btn">
    <div>
      <button
        class="btn rounded-circle bg-yellow custom-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i class="fa-solid fa-bell text-white fa-xl"></i>
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header bg-dark">
          <h3 class="offcanvas-title text-white" id="offcanvasRightLabel">So Soon</h3>
          <button
            type="button"
            class="btn-close bg-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body bg-dark"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotifBar'
}
</script>

<style lang="scss" scoped>
.parent-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
}
.custom-btn {
  width: 60px;
  height: 60px;
  box-shadow: 0px 2px 10px 0px black;
}
</style>
