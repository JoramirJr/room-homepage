<script>
  import "../app.css";
</script>

<header class="fixed w-full h-header bg-transparent flex items-center pt-[1rem] px-[5.5vw]">
  <button>
    <img
      src="/icon-hamburger.svg"
      alt="Menu Hamburger Icon"
      aria-label="Mobile Menu Button"
      class="w-[1.25rem]"
    />
  </button>
  <h1 class="w-full text-center align-text-top text-[1.75rem] font-spartan font-medium">room</h1>
</header>

<slot />
