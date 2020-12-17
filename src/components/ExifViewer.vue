<template>
  <div class="ev-viewer">
    <div class="ev-viewer__left">
      <img
        class="ev-viewer__photo"
        :src="dataUrl"
        ref="img"
      >
    </div>
    <div class="ev-viewer__right">
      <ExifList :exif-data="exifData"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ExifList from '@/components/ExifList.vue';

export default {
  name: 'ExifViewer',
  components: {
    ExifList,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['dataUrl', 'exifData']),
  },
};
</script>

<style lang="scss" scoped>
  .ev-viewer {
    display: flex;

    &__left,
    &__right {
      padding: 20px;
    }

    &__photo {
      display: block;
      width: 400px;
      object-fit: contain;
    }
  }
</style>
