<template>
  <h1>{{ title }}</h1>
  <p>Welcome ...... </p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </div>
  <div v-if="showModal2">
    <Modal theme="sale" @close="toggleModal2">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      
      <h1>Second modal</h1>
      <p>Text of the second modal</p>
    </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
  <button @click="toggleModal2">open modal 2</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: 'App',
  data() {
    return {
      title: 'My first Vue app',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your walker\'s swag for half price!',
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  },
  components: {
    Modal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
