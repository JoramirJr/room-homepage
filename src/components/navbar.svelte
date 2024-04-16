<script>
  /**
   * @type {'mobile'|'desktop'}
   */
  let menu_type;
  /**
   * @type {boolean}
   */
  let mobile_menu_open;

  $: {
    menu_type = mobile_menu_open ? "mobile" : "desktop";
  }
</script>

<button
  class="sm:hidden"
  on:click={() => {
    mobile_menu_open = !mobile_menu_open;
  }}
>
  <img
    src="/icon-hamburger.svg"
    alt="Menu Hamburger Icon"
    aria-label="Mobile Menu Button"
    class="w-[1.25rem]"
  />
</button>

{#if menu_type === "desktop"}
  <nav
    class="min-[0px]:hidden sm:block sm:flex sm:ml-[3rem] sm:gap-[1.5rem] sm:text-[.8rem]"
  >
    <a href="/" aria-label="home page link">Home</a>
    <a href="/shop" aria-label="shop page link">Shop</a>
    <a href="/about" aria-label="about page link">About</a>
    <a href="/content" aria-label="content page link">Content</a>
  </nav>
{:else}
  <nav class="fixed w-screen text-black left-0 top-0 bg-white h-[4rem] flex space-around items-center ">
    <button>
      <img src="icon-close.svg" alt="mobile navigation bar close button icon" aria-label="navbar close button" />
    </button>
    <a href="/" aria-label="home page link">Home</a>
    <a href="/shop" aria-label="shop page link">Shop</a>
    <a href="/about" aria-label="about page link">About</a>
    <a href="/content" aria-label="content page link">Content</a>
  </nav>
{/if}
