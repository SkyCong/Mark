<template>
  <web-view :src="src"></web-view>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WebView',
  props: {
    src: {
      type: String,
      default: 'http://www.skycong.xyz/'
    }
  }
})
</script>
