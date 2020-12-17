<template>
  <div class="home">
    <ExifViewer />
  </div>
</template>

<script>
import ExifViewer from '@/components/ExifViewer.vue';

export default {
  name: 'View',
  components: {
    ExifViewer,
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
