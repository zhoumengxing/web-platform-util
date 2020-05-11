<template>
  <div>
    <PageLoading v-if="false"></PageLoading>
  </div>
</template>

<script>
import { PageLoading } from '@/components/PageLoading'

export default {
  name: 'Workplace',
  components: {
    PageLoading
  }
}
</script>

<style scoped></style>
