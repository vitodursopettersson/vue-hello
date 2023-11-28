'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            imageVueJs: 'vuejs.png'

        }
    }
}).mount('#app')