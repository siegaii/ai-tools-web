<script setup lang="ts">
import { defineProps } from 'vue'
import {
  NButton,
  NPopconfirm,
} from 'naive-ui'
import { t } from '@/locales'

const props = defineProps(['onDelete'])

const confirmDelete = () => {
  props.onDelete()
}

const cancelDelete = () => {
  // Do nothing for canceling the delete action
}
</script>

<template>
  <NPopconfirm @positive-click="confirmDelete" @negative-click="cancelDelete">
    <template #trigger>
      <NButton tertiary size="small" type="error">
        {{ t("common.delete") }}
      </NButton>
    </template>
    {{ t("common.confirmOperation") }}: {{ t("common.delete") }}
  </NPopconfirm>
</template>
