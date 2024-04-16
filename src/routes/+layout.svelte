<script>
  import "../app.css";
  import navbar from "../components/navbar.svelte";
</script>

<header
  class="absolute left-0 top-0 w-full h-header bg-transparent flex items-center pt-[1rem]"
>
  <svelte:component this={navbar} />
  <h1
    class="w-full text-center align-text-top text-[1.75rem] font-spartan font-medium sm:w-fit sm:text-left sm:absolute sm:left-[2rem]"
  >
    room
  </h1>
</header>

<slot />
