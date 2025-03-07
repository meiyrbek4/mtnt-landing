gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",

        scrub: true,
      },
    }
  );

  const itemsL = gsap.utils.toArray(".left-side");
  const itemsR = gsap.utils.toArray(".right-side");

  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          end: "center 200px",
          scrub: true,
        },
      }
    );
  });

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        x: 150,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          end: "center 200px",
          scrub: true,
        },
      }
    );
  });

  const navItems = gsap.utils.toArray([
    ".logo-about .logo",
    ".logo-about .text",
    ".copyright",
    ".nav-title",
    ".nav-text",
  ]);

  navItems.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".footer",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  });

  //   gsap.fromTo(
  //     ".navigation-container",
  //     {
  //       backgroundColor: "none",
  //     },
  //     {
  //       backgroundColor: "#1f3d4d77",
  //       scrollTrigger: {
  //         trigger: ".container",

  //         end: "top 50px",
  //         scrub: true,
  //       },
  //     }
  //   );
}
