<template>
  <div style="text-align: center">
    <h1>{{name}}</h1>
    <button @click="handleClick">Clique aqui</button>

    <ul>
      <li
        v-for="user in users"
        v-bind:key="user.name"
      >
        {{ user.name }} - {{ user.age }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const handleClick = () => console.log('Fui clicado')
    const users = ref([])
    users.value = [
      { name: 'Julio', age: 18 },
      { name: 'Marcell', age: 40 }
    ]

    return {
      name: 'Guimarães',
      handleClick,
      users
    }
  }
}
</script>
