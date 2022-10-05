<template>
  <aside
    :class="sidebarState ? 'w-full' : 'w-full hidden'"
    aria-label="Sidebar"
  >
    <div
      :class="
        sidebarState
          ? 'overflow-y-auto py-4 px-3 bg-gray-50 rounded h-screen dark:bg-gray-800 transition-all duration-400'
          : 'overflow-y-auto py-4 px-3 bg-gray-50 rounded h-screen dark:bg-gray-800 transition-all duration-400'
      "
    >
      <ul class="space-y-2">
        <li v-for="(navLink, index) in navLinks" :key="'sidebar-' + index">
          <a
            :href="navLink.href"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <i :class="navLink.iconClass" aria-hidden="true"></i>
            <span class="ml-3">{{ navLink.linkName }}</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["navLinks", "toggleSidebar", "sidebarState"],
};
</script>

<style></style>
