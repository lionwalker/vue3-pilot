<template>
  <div class="home">
    <h2>Home</h2>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Increse age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'HomeView',
  setup() {
    
    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'lahiru'
      age.value = 35
    }

    return { name, age, handleClick }
  }
}
</script>
