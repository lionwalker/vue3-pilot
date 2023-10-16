const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss' },
                { title: 'the way of kings', author: 'brandon sanderson' },
                { title: 'the final empire', author: 'patrick rothfuss' },
            ]
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBook() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event, data) {
            console.log('event', event.type);
            if (data) {
                console.log(data);
            }
        },
        handleMousemove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
});
app.mount('#app');