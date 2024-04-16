<header
  class="absolute left-0 top-0 w-full h-header bg-transparent flex items-center pt-[1rem] px-[5.5vw]"
>
  <button class="sm:hidden">
    <img
      src="/icon-hamburger.svg"
      alt="Menu Hamburger Icon"
      aria-label="Mobile Menu Button"
      class="w-[1.25rem]"
    />
  </button>
  <h1
    class="w-full text-center align-text-top text-[1.75rem] font-spartan font-medium sm:w-fit sm:text-left"
  >
    room
  </h1>
  <nav
    class="min-[0px]:hidden sm:block sm:flex sm:ml-[3rem] sm:gap-[1.5rem] sm:text-[.8rem]"
  >
    <a href="/" aria-label="home page link">Home</a>
    <a href="/shop" aria-label="shop page link">Shop</a>
    <a href="/about" aria-label="about page link">About</a>
    <a href="/content" aria-label="content page link">Content</a>
  </nav>
</header>
<main class="h-fit w-screen">
  <section class="flex flex-col sm:flex-row">
    <div
      class="min-h-[22rem] bg-light-furniture-mobile bg-cover flex items-end justify-end w-screen sm:min-w-[60vw] sm:h-[70vh] sm:bg-light-furniture-desktop"
    >
      <div
        class="w-fit right-0 bottom-0 flex gap-0 *:bg-black *:py-[1rem] *:px-[1.25rem] sm:hidden"
      >
        <button aria-label="slider return">
          <img
            class="w-full h-[1rem]"
            src="icon-angle-left.svg"
            alt="slider return icon"
          />
        </button>
        <button aria-label="slider forward">
          <img
            class="w-full h-[1rem]"
            src="icon-angle-right.svg"
            alt="slider forward icon"
          />
        </button>
      </div>
    </div>
    <div
      class="h-fit px-[1.75rem] box-content my-[4rem] sm:w-full sm:px-[3rem] sm:py-[1rem] sm:m-0 sm:h-[70vh] sm:box-border sm:relative sm:flex sm:flex-col sm:justify-center"
    >
      <h2
        class="text-black text-[2.5rem] leading-[2.25rem] font-semibold tracking-tight mb-[1.25rem]"
      >
        Discover innovative ways to decorate
      </h2>
      <span class="text-gray-400 leading-[1rem] text-[.85rem] mb-[1.5rem] sm:m-0">
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </span>
      <button
        class="flex text-[1rem] mt-[1.25rem] py-[1rem] items-center gap-[1rem] text-black tracking-[.5rem] w-full sm:text-[.75rem] sm:text-bold sm:m-0"
      >
        SHOP NOW
        <img
          class="h-[.75rem]"
          src="icon-arrow.svg"
          alt="shop now arrow icon"
        />
      </button>
      <div
        class="absolute w-fit left-0 bottom-0 flex gap-0 *:bg-black *:py-[1rem] *:px-[1.25rem] hidden sm:block"
      >
        <button aria-label="slider return">
          <img
            class="w-[.6rem] sm:w-[1.25rem] sm:h-[1rem] sm:w-[.75rem]"
            src="icon-angle-left.svg"
            alt="slider return icon"
          />
        </button><button aria-label="slider forward">
          <img
            class="w-[.6rem] sm:w-[1.25rem] sm:h-[1rem] sm:w-[.75rem]"
            src="icon-angle-right.svg"
            alt="slider forward icon"
          />
        </button>
      </div>
    </div>
  </section>
  <section class="sm:flex w-screen sm:h-fit">
    <img
      class="sm:max-w-[30vw] sm:max-h-[30vh] sm:aspect-video"
      src="image-about-dark.jpg"
      alt=""
    />
    <div
      class="h-fit py-[2.25rem] px-[2rem] box-content sm:box-border sm:max-h-[30vh] sm:max-w-[60vw]"
    >
      <h2
        class="text-black text-[.9rem] leading-[3.25rem] font-bold tracking-[.4rem] sm:w-full leading-0"
      >
        ABOUT OUR FURNITURE
      </h2>
      <span
        class="text-gray-400 leading-[1.25rem] sm:text-[.85rem] sm:leading-none sm:w-fit"
      >
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </span>
    </div>
    <img
      class="sm:max-w-[30vw] sm:max-h-[30vh] sm:aspect-video"
      src="image-about-light.jpg"
      alt=""
    />
  </section>
</main>
