new Vue({
  el: '#app', // selecting   <div id="app"></div> from html, just query selector
  data: {
    title: "Becoming a Vue ninja",
    url: "http://www.youtube.com",
    classes: ['one', 'two'],
    wage: 10
  },
  methods: {
    greet() {
      return `${this.title}`; // => 'Becoming a Vue Ninja'
    },
    time(t) {
      return `it is ${t}, right now`;
    },

    changeWage(amount) {
      this.wage += amount;
    },

    logEvent(e) {
      console.log(e);
    }
  }
});