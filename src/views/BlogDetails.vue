<template>
  <main>
    <div id="blog-header">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="top-head">{{ $t('blogH') }}</h1>
            <h3>{{ $t('blogH3') }}</h3>
            <p>{{ $t('blogP') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="blog-inner" class="py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-sm-12 border p-4">
            <div class="card border-0 rounded-0">
              <img
                height="240px"
                :src="blog.imgUrl"
                class="card-img-top rounded-0 h-100"
                alt="posts"
              />
              <div class="card-body text-center">
                <h5 class="card-title pb-3">
                  {{ $i18n.locale === 'ar' ? blog.ar.title : blog.title }}
                </h5>
                <p class="card-text">
                  {{ $i18n.locale === 'ar' ? blog.ar.parag : blog.parag }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import axios from 'axios'
import blogs from '../blogs'
export default {
  props: ['id'],
  // name: 'BlogData',
  data() {
    return {
      blog: []
    }
  },
  created() {
    this.blog = blogs.find((blog) => blog.id === parseInt(this.id))
  }
}
</script>

<style lang="scss" scoped>
#blog-header {
  padding: 40px 0;
  background-color: #000;
  text-align: center;
  border-top: 1px solid #1a1a1a;

  & .top-head {
    font-size: 42px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 0;
    color: #fdf001;
  }

  h3,
  p {
    color: #fff;
  }
}
</style>
