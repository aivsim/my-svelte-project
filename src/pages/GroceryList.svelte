<script>
  let items = [
    { id: 1, name: "Milk", done: false },
    { id: 2, name: "Bread", done: true },
    { id: 3, name: "Eggs", done: false }
  ];

  const remove = item => {
    items = items.filter(i => i !== item);
  };

  let name = "";
  const addItem = () => {
    items = [...items, { id: Math.random(), name, done: false }];
    name = "";
  };
</script>

<style>
  li button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
  }

  .done span {
    opacity: 0.4;
  }
</style>

<article>
  <h1>This is Home page</h1>

  <form on:submit|preventDefault={addItem}>
    <label for="name">Add an item</label>
    <input id="name" type="text" bind:value={name} />
  </form>
  <ul>
    {#each items as item}
      <li class:done={item.done}>
        <input type="checkbox" bind:checked={item.done} />
        <span>{item.name}</span>
        <button on:click={() => remove(item)}>❌</button>
      </li>
    {/each}
  </ul>
</article>
