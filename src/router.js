import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import GroceryList from "./pages/GroceryList.svelte";

export default [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/grocery-list",
    name: "Grocery List",
    component: GroceryList
  }
];
