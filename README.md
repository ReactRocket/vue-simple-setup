# Vue Simple Setup & Vue Lifecycle Hooks Demo

This is a simple Vue.js project that demonstrates the usage of Vue lifecycle hooks through a basic counter application. The project showcases how to use Vue 3, set up lifecycle hooks, and manage reactive state.
## Table of Contents

    1.	Project Setup
    2.	Usage
    3.	Understanding Vue Lifecycle Hooks
    4.	Example Code


## Project Setup

To get started with this project, you need to follow these steps:

  ### 1. Create a folder with any name (vue-demo-app)
  ### 2. Create an HTML file in the folder, copy the code below, and paste it into the index.html file. (index.html)
  ### 3. Create a CSS file in the folder, copy the code below, and paste it into the style.css file. (style.css)
  ### 4. Create a JAVASCRIPT file in the folder, copy the code below, and paste it into the script.js file. (script.js)

## Usage

This project demonstrates a counter application with increment and decrement buttons. The application uses Vue.js to manage the state and handle button click events. The Vue lifecycle hooks are logged to the console at different stages of the component's lifecycle.

### HTML Structure

The HTML file sets up the basic structure of the application:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Lifecycle Hooks Demo</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Exploring Vue Lifecycle Hooks</h1>
    <div id="app">
      <div class="counter">
        <button @click="increment">+</button>
        <span>{{ count }}</span>
        <button @click="decrement">-</button>
      </div>
    </div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="script.js"></script>
  </body>
</html>
 ```

### CSS Styling

The CSS file provides basic styling for the application:

```
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #343a40;
    color: white;
    font: 1em sans-serif;
    text-align: center;
    padding: 20px;
  }
  
  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #29323a;
    color: #f0f0f0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .counter button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.5em;
    font-weight: bold;
    color: inherit;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  .counter button:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    outline: none;
    border: none;
    transition: all 0.3s ease;
  }

  ```

### JavaScript Logic

The JavaScript file sets up the Vue application:

```
const app = Vue.createApp({
  // Lifecycle Hooks

  beforeCreate() {
    console.log("beforeCreate: The component is being initialized, but data hasn't been created yet.");
  },

  created() {
    console.log("created: The component has finished setting up its data. Good time to fetch data from an API or perform other setup logic.");
  },

  beforeMount() {
    console.log("beforeMount: The component's template has been compiled, but hasn't been inserted into the DOM yet.");
  },

  mounted() {
    console.log("mounted: The component is now fully mounted and accessible in the DOM. A good place to interact with the DOM or perform side effects.");
  },

  beforeUpdate() {
    console.log("beforeUpdate: The component is about to re-render due to some data change. Good place to perform tasks before the DOM is updated.");
  },

  updated() {
    console.log("updated: The component has finished re-rendering. A good place to interact with the updated DOM or perform post-update logic.");
  },

  beforeDestroy() {
    console.log("beforeDestroy: The component is about to be destroyed. Good place to perform cleanup tasks, like removing event listeners or timers.");
  },

  destroyed() {
    console.log("destroyed: The component has been destroyed. It's no longer accessible in the DOM.");
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
        this.count--;
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
    doubleCount() {
      return this.count * 2;
    },
  },
});

app.mount("#app");

```




## Understanding Vue Lifecycle Hooks

Vue lifecycle hooks are methods that allow you to hook into different stages of a component's lifecycle. Here are the main lifecycle hooks used in this project:

        1.	beforeCreate: Called before the data object is created. At this point, the component is being initialized, but reactive data and methods are not yet available.
        2.	created: Called after the data object is created. The component's data and methods are now available, making it a good place to fetch data or perform initial setup tasks.
        3.	beforeMount: Called before the component is mounted to the DOM. The component's template has been compiled, but it hasn't been inserted into the DOM yet.
        4.	mounted: Called after the component is mounted to the DOM. The component's DOM elements are now accessible, making it a good place to interact with the DOM or perform side effects.
        5.	beforeUpdate: Called before the component updates due to reactive data changes. This hook is useful for performing tasks before the DOM is updated.
        6.	updated: Called after the component updates due to reactive data changes. This hook is useful for interacting with the updated DOM or performing post-update logic.
        7.	beforeDestroy: Called before the component is destroyed. This hook is useful for performing cleanup tasks, such as removing event listeners or timers.
        8.	destroyed: Called after the component is destroyed. The component's DOM elements and data are no longer available.


# Reference Video To Learn Vue

[![Watch the video](https://i.ytimg.com/vi/YrxBCBibVo0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD9WLQm1NAoLvKJK3YiLFrmRl4qPw)](https://youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&si=RiT-uzqPqPassF5s)

---

This README provides a detailed explanation of the setup process, usage instructions, and an overview of Vue lifecycle hooks. It also includes the example code for the project. Feel free to customize the content as needed.
