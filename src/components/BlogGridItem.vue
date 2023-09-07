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
        <div class="row">
          <div v-for="blog in blogs" :key="blog.id" class="col-md-4 pb-3">
            <div class="card rounded-0">
              <div class="post-img-wrap">
                <img :src="blog.imgUrl" class="card-img-top rounded-0 h-100" alt="posts" />
              </div>
              <div class="card-body post-content">
                <h5 class="card-title pb-3">
                  {{ $i18n.locale === 'ar' ? blog.ar.title : blog.title }}
                </h5>
                <p class="card-text">
                  {{ $i18n.locale === 'ar' ? blog.ar.parag : blog.parag }}
                </p>
                <RouterLink
                  class="btn bg-yellow rounded-pill"
                  :to="{ name: 'blogdetails', params: { id: blog.id } }"
                >
                  {{ $t('more') }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>



<script>
import blogs from '../blogs'
export default {
  name: 'BlogGridItem',
  data() {
    return {
      blogs
    }
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

.card {
  transition: 0.5s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 10px 0px #707070;
  }
}

.post-img-wrap {
  display: block;
  overflow: hidden;
  height: 240px;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
  }
}

.post-content {
  background-color: #fff;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
