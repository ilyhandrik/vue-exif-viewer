<template>
 <div
   class="ev-image-loader"
   :class="{'ev-image-loader--drag-over': isDragOver}"
   @drop="dragAndDropHandler"
   @dragover="dragAndDropHandler"
   @dragleave="dragAndDropHandler"
 >
   <label
     class="ev-image-loader__label"
     for="inputPhoto"
   >
     Выберите файл
   </label>
   <input
     @input="inputHandler"
     id="inputPhoto"
     hidden
     type="file"
   >
 </div>
</template>

<script>
import getExifData from '@/utils/exif';

export default {
  name: 'ImageLoader',
  data() {
    return {
      file: null,
      isDragOver: false,
    };
  },
  methods: {
    inputHandler(e) {
      this.loadFile(e.target.files[0]);
    },
    dragAndDropHandler(event) {
      event.preventDefault();
      switch (event.type) {
        case 'dragover': this.isDragOver = true;
          break;
        case 'drop': this.loadFile(event.dataTransfer.files[0]);
          break;
        case 'dragleave':
        default: this.isDragOver = false;
      }
    },
    loadFile(file) {
      this.file = file;
      const fileReader = new FileReader();
      fileReader.onload = async (event) => {
        const dataUrl = event.target.result;
        this.$store.dispatch('setDataUrl', dataUrl);
        this.$store.dispatch('setExifData', await getExifData(dataUrl));
        this.$router.push({ name: 'About' });
      };
      fileReader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "src/styles/styles";

  .ev-image-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 300px;
    background: $color-8;
    border: 1px dashed $color-4;
    // background-color: #42b983;

    &__label {
      @include button;
    }

    &--drag-over {
      border-color: $color-1;
    }
  }
</style>
