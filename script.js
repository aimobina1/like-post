const app = Vue.createApp({
    data() {
      return {
        heart:false,
      }
    },
    methods: {
      toggleheart(){
        this.heart=!this.heart
    }

    }
  })
  
  app.mount('#app')