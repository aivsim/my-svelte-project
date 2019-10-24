<script>
  import Link from "./Link.svelte";
  import Route from "./Route.svelte";
</script>

<style>

</style>

<nav>
  <Link page={{ path: '/', name: 'Home' }} />
  <Link page={{ path: '/about', name: 'About' }} />
  <Link page={{ path: '/grocery-list', name: 'Grocery List' }} />
</nav>

<main>
  <Route />
</main>

<footer>
  <p>©Copyright 2050 by nobody. All rights reversed.</p>
</footer>
