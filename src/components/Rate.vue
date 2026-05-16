<template>
  <view class="at-rate">
    <view
      v-for="(item, index) in max"
      :key="index"
      class="at-rate__item"
      :style="{ fontSize: size + 'px' }"
      @tap="handleClick(index + 1)"
    >
      <text :class="index < value ? 'at-rate__icon--on' : 'at-rate__icon--off'">★</text>
    </view>
  </view>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Rate',
  props: {
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 20
    },
    max: {
      type: Number,
      default: 5
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const handleClick = (val) => {
      emit('change', val)
    }

    return {
      handleClick
    }
  }
})
</script>

<style lang="scss">
.at-rate {
  display: inline-flex;
  align-items: center;

  &__item {
    display: inline-block;
    margin-right: 2px;
  }

  &__icon--on {
    color: #ffc107;
  }

  &__icon--off {
    color: #e0e0e0;
  }
}
</style>
