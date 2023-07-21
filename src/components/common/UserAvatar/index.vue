<script setup lang='ts'>
import { computed } from 'vue'
import { NAvatar } from 'naive-ui'
import { useUserStore } from '@/store'
import { isString } from '@/utils/is'
import { getFallbackAvatar } from '@/utils/common'

const userStore = useUserStore()

const userInfo = computed(() => userStore.userInfo)

const avatar = computed(() => {
  if(userInfo.value.avatar.match(/\/assets\/avatar.jpg/)){
    return userStore.userInfo.defaultAvatar
  }
  return userStore.userInfo.avatar || userStore.userInfo.defaultAvatar
})

</script>
<template>
  <div class="flex items-center overflow-hidden">
    <div class="w-10 h-10 overflow-hidden rounded-full shrink-0">
      <template v-if="isString(avatar) && avatar.length > 0">
        <NAvatar
          size="large"
          round
          :src="avatar"
          :fallback-src="getFallbackAvatar(userInfo.name)"
        />
      </template>
      <template v-else>
        <NAvatar size="large" round :src="avatar" :fallback-src="getFallbackAvatar(userInfo.name)" />
      </template>
    </div>
    <div class="flex-1 min-w-0 ml-2">
      <h2 class="overflow-hidden font-bold text-md text-ellipsis whitespace-nowrap">
        {{ userInfo.name ?? 'siegaii' }}
      </h2>
      <p class="overflow-hidden text-xs text-gray-500 text-ellipsis whitespace-nowrap">
        <span
          v-if="isString(userInfo.description) && userInfo.description !== ''"
          v-html="userInfo.description"
        />
      </p>
    </div>
  </div>
</template>
