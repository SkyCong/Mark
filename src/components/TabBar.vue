<template>
  <view class="at-tab-bar" :class="{ 'at-tab-bar--fixed': fixed }">
    <view
      v-for="(item, index) in tabList"
      :key="index"
      class="at-tab-bar__item"
      :class="{ 'at-tab-bar__item--active': current === index }"
      :style="{ color: current === index ? selectedColor : color }"
      @click="handleClick(index)"
    >
      <image
        v-if="item.image || item.selectedImage"
        class="at-tab-bar__icon"
        :src="current === index && item.selectedImage ? item.selectedImage : item.image"
        mode="aspectFit"
        :style="{ width: iconSize + 'px', height: iconSize + 'px' }"
      />
      <view class="at-tab-bar__title" :style="{ fontSize: fontSize + 'px' }">
        {{ item.title }}
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TabBar',
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: Number,
      default: 11
    },
    iconSize: {
      type: Number,
      default: 22
    },
    selectedColor: {
      type: String,
      default: '#000'
    },
    color: {
      type: String,
      default: '#496069'
    },
    tabList: {
      type: Array,
      default: () => []
    },
    current: {
      type: Number,
      default: 0
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (index) => {
      emit('click', index)
    }

    return {
      handleClick
    }
  }
})
</script>

<style lang="scss">
.at-tab-bar {
  display: flex;
  width: 100%;
  min-height: 56px;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;

  &--fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }

  &__item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    font-size: 12px;

    &--active {
      color: #000;
    }
  }

  &__icon {
    width: 22px;
    height: 22px;
    margin-bottom: 4px;
  }

  &__title {
    font-size: 12px;
    line-height: 1.2;
  }
}
</style>
