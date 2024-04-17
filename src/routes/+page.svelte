<script>
  import clsx from "clsx";

  /**
   * @type {1|2|3}
   */
  let slider_item = 1;

  /**
   * @param {'back'|"onward"} dir
   */
  function handle_slider(dir) {
    if (dir === "back" && slider_item > 1) {
      slider_item--;
    } else if (dir === "onward" && slider_item <= 2) {
      slider_item++;
    }
  }
</script>

<main class="h-fit w-screen">
  <section class="flex flex-col sm:flex-row">
    <div
      class={clsx(
        `min-h-[22rem]  bg-cover flex items-end justify-end w-screen sm:min-w-[60vw] sm:h-[70vh]`,
        {
          "bg-slider-item-mobile-1 sm:bg-slider-item-desktop-1":
            slider_item === 1,
          "bg-slider-item-mobile-2 sm:bg-slider-item-desktop-2":
            slider_item === 2,
          "bg-slider-item-mobile-3 sm:bg-slider-item-desktop-3":
            slider_item === 3,
        }
      )}
    >
      <div
        class="w-fit right-0 bottom-0 flex gap-0 *:py-[1rem] *:px-[1.25rem] sm:hidden"
      >
        <button
          on:click={() => handle_slider("back")}
          aria-label="slider return"
          class={clsx("bg-black", {
            "bg-gray-600": slider_item === 1,
          })}
        >
          <img
            class="w-full h-[1rem]"
            src="icon-angle-left.svg"
            alt="slider return icon"
          />
        </button>
        <button
          on:click={() => handle_slider("onward")}
          aria-label="slider forward"
          class={clsx("bg-black", {
            "bg-gray-600": slider_item === 3,
          })}
        >
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
      <span
        class="text-gray-400 leading-[1rem] text-[.85rem] mb-[1.5rem] sm:m-0"
      >
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
        class="absolute w-fit left-0 bottom-0 flex gap-0 *:py-[1rem] *:px-[1.25rem] hidden sm:block"
      >
        <button
          on:click={() => handle_slider("back")}
          aria-label="slider return"
          class={clsx("bg-black", {
            "bg-gray-600": slider_item === 1,
          })}
        >
          <img
            class="w-full h-[1rem]"
            src="icon-angle-left.svg"
            alt="slider return icon"
          />
        </button><button
          on:click={() => handle_slider("onward")}
          aria-label="slider forward"
          class={clsx("bg-black", {
            "bg-gray-600": slider_item === 3,
          })}
        >
          <img
            class="w-full h-[1rem]"
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
