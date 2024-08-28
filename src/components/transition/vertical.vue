<template>
  <Transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform opacity-0 -translate-y-6"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0 translate-y-6"
    mode="out-in"
  >
    <slot />
  </Transition>
</template>
