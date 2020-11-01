<template>
  <div style="text-align: center">
    <h1>{{ user.name}} {{ user.lastName }}</h1>
    <button @click="setLastName">Set last name</button>
    <Teleport to="#modal">
      <div style="text-align:center; color: red">
        <strong>Esse trecho de código foi transportado para fora da Div #app</strong>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    user: {
      name: 'Guilherme'
    }
  }),
  methods: {
    setLastName () {
      this.user.lastName = 'Cazaroto'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
