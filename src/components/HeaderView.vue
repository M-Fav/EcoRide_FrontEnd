<template>
    <header class="header">
        <img alt="Vue logo" src="../assets/images/logoEcoRide.png" width="300">
        <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  </template>
  
  <script>
    export default {
        name: "HeaderView",
    };
  </script>
  
  <style scoped>
  .header {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  