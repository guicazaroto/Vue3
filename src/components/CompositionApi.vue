<template>
  <div style="text-align: center">
    <div v-if="loading">Carregando...</div>
    <div v-else>
      <div
        v-for="user in data.users"
        v-bind:key="user.id"
      >
        {{ user.name }} - {{ user.mobile }}
      </div>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import useHttpGet from '@/use/httpGet'

export default {
  setup () {
    
    const { data, loading, error } = useHttpGet('/api/users')

    return { data, loading, error }
  }
}
</script>
