<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <hr>
  <Composition />
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Composition from './components/CompositionApi'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Composition
  }
}
</script>
