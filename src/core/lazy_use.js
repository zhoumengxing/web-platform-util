import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/config/defaultSettings'

// base library
import '@/core/lazy_lib/components_use'
import PageLoading from '@/components/PageLoading'
import MultiTab from '@/components/MultiTab'

// ext library

Vue.use(VueStorage, config.storageOptions)
Vue.use(PageLoading)
Vue.use(MultiTab)

process.env.NODE_ENV !== 'production' && console.warn('[antd-pro] NOTICE: Antd use lazy-load.')
