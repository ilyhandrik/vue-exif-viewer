<template>
  <div class="home">
    <ExifViewer />
  </div>
</template>

<script>
import ExifViewer from '@/components/ExifViewer.vue';

export default {
  name: 'Home',
  components: {
    ExifViewer,
  },
};
</script>
