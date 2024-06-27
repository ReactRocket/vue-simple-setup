const app = Vue.createApp({
  // Lifecycle Hooks

  // 1. beforeCreate (Optional)
  // Called before the data object is created.
  beforeCreate() {
    console.log(
      "beforeCreate: The component is being initialized, but data hasn't been created yet."
    );
  },

  // 2. created (Optional)
  // Called after the data object is created.
  created() {
    console.log(
      "created: The component has finished setting up its data. Good time to fetch data from an API or perform other setup logic."
    );
  },

  // 3. beforeMount (Optional)
  // Called before the component's DOM is mounted (inserted into the document).
  beforeMount() {
    console.log(
      "beforeMount: The component's template has been compiled, but hasn't been inserted into the DOM yet."
    );
  },

  // 4. mounted
  // Called after the component's DOM is mounted (inserted into the document).
  mounted() {
    console.log(
      "mounted: The component is now fully mounted and accessible in the DOM. A good place to interact with the DOM or perform side effects."
    );
  },

  // 5. beforeUpdate (Optional)
  // Called before the component updates (re-renders).
  beforeUpdate() {
    console.log(
      "beforeUpdate: The component is about to re-render due to some data change. Good place to perform tasks before the DOM is updated."
    );
  },

  // 6. updated
  // Called after the component updates (re-renders).
  updated() {
    console.log(
      "updated: The component has finished re-rendering. A good place to interact with the updated DOM or perform post-update logic."
    );
  },

  // 7. beforeDestroy (Optional)
  // Called before the component is destroyed.
  beforeDestroy() {
    console.log(
      "beforeDestroy: The component is about to be destroyed. Good place to perform cleanup tasks, like removing event listeners or timers."
    );
  },

  // 8. destroyed (Optional)
  // Called after the component is destroyed.
  destroyed() {
    console.log(
      "destroyed: The component has been destroyed. It's no longer accessible in the DOM."
    );
  },

  // Data (reactive state)
  data() {
    return {
      count: 0,
    };
  },

  // Methods (functions for actions)
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--; // Prevent negative values
      }
    },
  },

  // Watch (observe data changes)
  watch: {
    count(newVal, oldVal) {
      console.log(`Count changed from ${oldVal} to ${newVal}`);
    },
  },

  // Computed Properties (derived data)
  computed: {
    // Example: Double the count value
    doubleCount() {
      return this.count * 2;
    },
  },
});

app.mount("#app");
