<template>
  <home-setting />
</template>

<script>
import { defineComponent } from 'vue'
import HomeSetting from '../../../components/HomeSetting.vue'

export default defineComponent({
  name: 'SettingPage',
  components: {
    HomeSetting
  }
})
</script>

<style lang="scss">
@import '../../../components/HomeSetting.scss';
</style>
