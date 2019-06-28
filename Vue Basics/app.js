new Vue({
  el: '#app', // selecting   <div id="app"></div> from html, just query selector
  data: {
    title: "Becoming a Vue ninja",
    url: "http://www.youtube.com",
    classes: ['one', 'two'],
    wage: 10,
    name: "Mark",
    name2: "Peter",
    m: "class",
    toggle: true,
    state: 1,
    one: "one",
    two: "two",
    three: "three",
    array: ["one", "two", "three"],
    object: {
      a: "a",
      b: "b",
      c: "c"
    },

    coord: {
      x: 0,
      y: 0,
    }
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
    },

    logCoord(e) {
      this.coord.x = e.offsetX;
      this.coord.y = e.offsetY;
    },

    updateName({target}) {
      this.name = target.value;
    },

    toggling() {
      this.toggle = !this.toggle;
    },

    changeNumber() {
      this.state++;
      if (this.state === 4) this.state = 1;
    }
  }
});