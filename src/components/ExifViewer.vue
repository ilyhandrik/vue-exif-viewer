<template>
  <div class="ev-main">
    ExifViewer
    <input type="file"/>
    <img ref="img" class="photo" src="test_photo.jpg">
    <div v-if="exifData.length">
      <div
        v-for="(item, i) in exifData"
        :key="i"
      >
        <span>{{ item.tag }}</span>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import EXIF from 'exif-js';

export default {
  name: 'ExifViewer',
  data() {
    return {
      exifData: [],
    };
  },
  created() {
    console.log(EXIF);
  },
  mounted() {
    this.getData().then((res) => {
      console.log(res);
      this.exifData = Object.keys(res).map((key) => ({
        tag: key,
        value: res[key],
      }));
    });
  },
  methods: {
    async getData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          EXIF.getData(this.$refs.img, function () {
            resolve(EXIF.getAllTags(this));
          });
        }, 4000);
      });
    },
  },
};
</script>

<style scoped>
  .photo {
    display: block;
    width: 800px;
  }
</style>
