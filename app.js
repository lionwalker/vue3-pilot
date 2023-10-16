const app = Vue.createApp({
    data() {
        return {
            url: "http://lahiru.info",
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg' },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg' },
                { title: 'the final empire', author: 'patrick rothfuss', img: 'assets/3.jpg' },
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