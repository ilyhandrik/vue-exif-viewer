<template>
  <div class="home">
    <ImageLoader />
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader.vue';

export default {
  name: 'Home',
  components: {
    ImageLoader,
  },
};
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
