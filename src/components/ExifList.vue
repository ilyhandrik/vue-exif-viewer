<template>
  <div class="ev-exif-list">
    <div
      class="ev-exif-list__item"
      v-for="(item, i) in exifData"
      :key="i"
    >
      <span class="ev-exif-list__tag">{{ item.tag }}</span>
      <span class="ev-exif-list__value">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExifList',
  props: {
    exifData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "src/styles/styles";

  .ev-exif-list{
    background-color: $color-8;
    padding: 8px 16px;
    &__item {
      font-size: 13px;
      line-height: 24px;
      border-bottom: $color-7 1px dashed;
      &:last-child {
        border-bottom: none;
      }
    }
    &__tag {
      display: inline-block;
      width: 180px;
      color: $color-5;
    }
    &__value {
      color: $color-4;
    }
  }
</style>
