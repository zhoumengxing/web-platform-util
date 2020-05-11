<template>
  <div class="logo">
    <router-link :to="{ name: 'dashboard' }">
      <img :src="src" />
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  components: {},
  props: {
    title: {
      type: String,
      default: '管理系统模版',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data() {
    return {
      src: require('@/assets/icons/icon-bixin.png')
    }
  }
}
</script>
