<template>
  <page-view :avatar="avatar" :title="false">
    <div slot="headerContent">
      <div class="title">
        {{ timeFix }}，test<span class="welcome-text">，{{ welcome }}</span>
      </div>
      <div>前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台</div>
    </div>
    <div slot="extra">
      <a-row class="more-info">
        <a-col :span="8">
          <head-info title="项目" content="56" :center="false" :bordered="false" />
        </a-col>
        <a-col :span="8">
          <head-info title="团队排名" content="8/24" :center="false" :bordered="false" />
        </a-col>
        <a-col :span="8">
          <head-info title="项目数" content="2,223" :center="false" />
        </a-col>
      </a-row>
    </div>
    <div>
      <TextArea></TextArea>
      <ellipsis :length="100" tooltip>
        There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety
        recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.
      </ellipsis>
    </div>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView'
import HeadInfo from '@/components/tools/HeadInfo'
import TextArea from '@/components/TextArea'
import Ellipsis from '@/components/Ellipsis'

import { timeFix, welcome } from '@/utils/util'

export default {
  name: 'Workplace',
  components: {
    PageView,
    HeadInfo,
    TextArea,
    Ellipsis
  },
  data() {
    return {
      timeFix: timeFix(),
      welcome: welcome(),
      avatar: require('@/assets/icons/yuer.png')
    }
  }
}
</script>

<style scoped></style>
