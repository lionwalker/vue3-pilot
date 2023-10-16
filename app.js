const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brndon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
});
app.mount('#app');