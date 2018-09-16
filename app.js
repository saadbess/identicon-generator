// Vue Instance
new Vue({
  // By providing #app, this provides a DOM query selector and to the Vue instance and tells it exactly where its template is inside the DOM
  el: "#app",
  data: {
    // Initialise our list of 'ingredients'
    textInput: ""
  },
  computed: {
    // Turn data into viewable values
    identicon: function() {
      return jdenticon.toSvg(this.textInput, 200);
    }
  },
  methods: {
    // Use these functions to change data
    onInput: function(event) {
      this.textInput = event.target.value;
    }
  },
  template: `
    <div>
        <h1>Identicon Generator</h1>
        <div>
            Input: <input v-on:input="onInput" />
        </div>
        <div>
            Output:
            <div v-html="identicon"></div>
        </div>
    </div>
  `
});
