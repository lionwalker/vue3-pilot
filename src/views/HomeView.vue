<template>
  <div class="home">
    <h2>Home</h2>
    <p ref="reference">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HomeView',
  setup() {
    
    const reference = ref(null);

    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log(reference, reference.value);
      reference.value.classList.add('test')
      reference.value.textContent = 'hello, ninjas'
    }

    return { name, age, handleClick, reference }
  }
}
</script>
