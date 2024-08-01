    document.addEventListener("DOMContentLoaded", () => {

        // GSAP Animations
        const tl = gsap.timeline({ defaults: { ease: "power1.inOut", duration: 0.3 } });
        tl.from(".hero-head h1:nth-child(1)", { scaleX: 0, delay: 2 })
        .from(".hero-head h1:nth-child(2)", { scaleX: 0, delay: 0.3 })
        .from(".hero-head h1:nth-child(3)", { scaleX: 0, delay: 0.3 });

        // Video Controls
        var video = document.getElementById('myVideo');
        if (video) {
            video.controls = false;
            video.setAttribute('playsinline', '');
            video.play();
        }

        // Navigation Animation
        var navTimeline = gsap.timeline();
        navTimeline.from("nav .nav-item", {
            y: -40,
            opacity: 0,
            delay: 2,
            duration: 0.2,
            stagger: 0.1
        });

        // Scroll Animations
        function section2Animation() {
            gsap.registerPlugin(ScrollTrigger);

            var tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section",
                    scroller: "body",
                    start: "top 50%",
                    end: "top -10%",
                    scrub: 2   
                }               
            });

            tl2.from(".head1", { x: -300, opacity: 0, duration: 1 }, "a3")
            .from(".head2", { x: 300, opacity: 0, duration: 1 }, "a3")
            .from(".left1", { x: -300, opacity: 0, duration: 1 }, "a")
            .from(".right1", { x: 300, opacity: 0, duration: 1 }, "a")
            .from(".left2", { x: -300, opacity: 0, duration: 1 }, "a1")
            .from(".right2", { x: 300, opacity: 0, duration: 1 }, "a1");
        }

        section2Animation();

        // Number Counter Animation
        setTimeout(() => {
            let valueDisplays = document.querySelectorAll(".num");
            let interval = 1000;
    
            valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(() => {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
        }, 2000); // 2 seconds delay
        
        let preloader = document.querySelector('#preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.remove();
            }, 1500); // 2 seconds delay
        } else {
            console.log("Preloader not found");
        }
    });
