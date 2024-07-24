document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut", duration: 0.3 } });

    tl.from(".hero-head h1:nth-child(1)", { scaleX: 0, delay: 0.3 })
      .from(".hero-head h1:nth-child(2)", { scaleX: 0, delay: 0.3 })
      .from(".hero-head h1:nth-child(3)", { scaleX: 0, delay: 0.3 });
});