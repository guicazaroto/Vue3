<template>
  <button @click="increment">
    Count is: {{ count }} , double is: {{ double }}
  </button>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup () {
    const count = ref(1)
    const double = computed(() => count.value * 2 )
 
    function increment () {
      count.value++
    }

    return { count, double, increment}
  }
}
</script>

<style>

</style>