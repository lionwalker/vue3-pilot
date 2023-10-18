<template>
  <div class="home">
    <h2>Home</h2>
    <p>My name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">click me</button>

    <h1>Reactive</h1>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">click me</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'HomeView',
  setup() {
    
    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name: 'luigi', age: 35 })

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    
    const updateNinjaTwo = () => {
      ninjaTwo.age = 40
    }

    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo }
  }
}
</script>
