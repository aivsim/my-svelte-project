<script>
  import GroceryList from "./GroceryList.svelte";
  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<GroceryList />
