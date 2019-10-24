<script>
  import Link from "./Link.svelte";
  import Route from "./Route.svelte";
</script>

<style>

</style>

<!-- Navigation goes here -->
<Link page={{ path: '/', name: 'Home' }} />
<Link page={{ path: '/about', name: 'About' }} />
<Link page={{ path: '/grocery-list', name: 'Grocery List' }} />

<!-- Main container goes here -->
<Route />
