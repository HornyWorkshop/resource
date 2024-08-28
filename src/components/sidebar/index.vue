<script setup lang="ts">
import CookieIcon from '~icons/ic/baseline-cookie'
import GamesIcon from '~icons/ic/baseline-games'
import SettingsIcon from '~icons/ic/baseline-settings'
</script>

<template>
  <aside class="bg-neutral-900">
    <nav class="flex flex-col gap-2 p-2">
      <RouterLink to="/games">
        <SidebarItem>
          <CookieIcon />
        </SidebarItem>
      </RouterLink>

      <RouterLink to="/plugins">
        <SidebarItem>
          <GamesIcon />
        </SidebarItem>
      </RouterLink>

      <RouterLink to="/settings">
        <SidebarItem>
          <SettingsIcon />
        </SidebarItem>
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
a {
  @apply rounded-md transition-colors
}

.router-link-active {
  @apply pointer-events-none bg-neutral-700
}

a:not(.router-link-active) {
  @apply hover:bg-neutral-700
}
</style>
