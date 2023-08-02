<script setup lang="ts">
import { computed } from "vue";
import { NLayout, NLayoutContent } from "naive-ui";
import { useRouter } from "vue-router";
import Sider from "./sider/index.vue";
import { useBasicLayout } from "@/hooks/useBasicLayout";
import { useAppStore, useChatStore } from "@/store";

const router = useRouter();
const appStore = useAppStore();
const chatStore = useChatStore();

router.replace({ name: "Chat", params: { uuid: chatStore.active } });

const { isMobile } = useBasicLayout();

const collapsed = computed(() => appStore.siderCollapsed);

const getMobileClass = computed(() => {
	if (isMobile.value) return ["rounded-none", "shadow-none"];
	return ["border", "rounded-md", "shadow-md", "dark:border-neutral-800"];
});

const getContainerClass = computed(() => {
	return ["h-full", { "pl-[260px]": !isMobile.value && !collapsed.value }];
});
</script>

<template>
	<div
		class="h-full dark:bg-[#24272e] transition-all"
		:class="[isMobile ? 'p-0' : 'p-4 pb-8']"
	>
		<div class="h-full overflow-hidden" :class="getMobileClass">
			<NLayout class="z-40 transition" :class="getContainerClass" has-sider>
				<Sider />
				<NLayoutContent class="h-full">
					<RouterView v-slot="{ Component, route }">
						<component :is="Component" :key="route.fullPath" />
					</RouterView>
				</NLayoutContent>
			</NLayout>
		</div>
    <div v-if="!isMobile" style="color: #c9d1d9e0" class="h-8 flex justify-center items-center">
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >蜀ICP备2021032713号-1</a
      >
    </div>
	</div>
</template>
