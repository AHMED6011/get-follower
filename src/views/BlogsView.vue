<template>
  <div>
    <BlogGrid :BlogGrid="BlogGrid" />
  </div>
</template>

<script>
import BlogGrid from '../components/BlogGridItem.vue'
export default {
  components: { BlogGrid },
  data() {
    return {
      BlogGrid: []
    }
  }
}
</script>
