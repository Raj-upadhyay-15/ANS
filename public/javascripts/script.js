document.addEventListener("DOMContentLoaded", function () {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Update ScrollTrigger each time Locomotive Scroll updates
    locoScroll.on("scroll", ScrollTrigger.update);

    // Tell ScrollTrigger to use these proxy methods for the "#main" element
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
   
    // Refresh ScrollTrigger when the window resizes
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    gsap.from('#page1', {
        y: 900, // Start from bottom
        duration: 1,
        opacity: 0,
        ease: 'power2.out', // Easing function for smooth animatio
    });
    gsap.from('#navbar,#logo,.about,.user', {
        y: -120, // Start from bottom
        duration: 0.4,
        opacity: 0,
        stagger: 0.3,
        // ease: 'power2.out', // Easing function for smooth animatio
    });
gsap.from("#page2 h3,#page2 p", {
         x: -500,
        duration: 1,
        opacity: 0,
        stagger:0.5,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 100%",
            end: "top 0%",
            scrub:true,
        

        }
})



    gsap.from(".image-container .img1", {
        x: -800,
        opacity:0,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 70%",
            end: "top 10%",
            scrub: 1,
            // markers:true
        }
    })
    gsap.from(".image-container .img2", {
        opacity:0,
        y: 800,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 70%",
            end: "top 10%",
            scrub: 1,
            // markers:true
        }
    })
    gsap.from(".image-container .img3", {
        x: 800,
        opacity:0,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 70%",
            end: "top 10%",
            scrub: 1,
            // markers:true
        }
    })
    gsap.from("#page5 video", {
        x: 550,
        y:240, 
        width: "230px", 
        height: "230px", 
        ease: "none", 
        rotation: 20,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            start: "top -5%",
            end: "top -190%", 
            scrub: 1,
            pin: true,
        
         
        }
    });
    gsap.to(".page4-mark", {
        x: -1000,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 150%",
            end: "top -50%",
            scrub: 2,
        
        }
    })
    gsap.from(".page4-marking", {
        x: -1000,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 80%",
            end: "top -50%",
            scrub: 2,
      
        }
    })
   
    gsap.from(".content", {
     
        y:1240, // Move the video element off-screen initially
         // Start with zero height
        ease: "none", // Linear easing
   
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 0%",
            end: "top -70%", // Scroll until the video completely fills the viewport
            scrub: 1,
            pin: true,
            // anticipatePin: 1, // Anticipate the pinned position for smooth transition
            // markers: true,
         
        }
    });
    gsap.from(".footer-content,.footer-links,.footer-social,.footer-disclaimer", {
        y: 800,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 80%",
            end: "top 10%",
            scrub: 2,

        }
    })
    gsap.from("#aboutus h4,#container img ,.description", {
        x: -800,
       duration:0.9,
       delay:0,
       stagger:0.5,
       opacity:0,
    })
    gsap.from("#aboutpage2 h5,#aboutpage2 h4,#aboutpage2 img,.imgcontainer", {
    duration:1,
    y:400,
        opacity:0,
        scrollTrigger: {
            trigger: "#aboutpage2",
            scroller: "#main",
            start: "top 50%",
            end: "top 10%",
            scrub: 1,
      

        }
    })
    gsap.from("#productpage1,#leftside,#rightside", {
      
       duration:1.2,
       delay:0,
    stagger:1,
       opacity:0,
    })
    Shery.textAnimate("#page1 h1", {
        style: 2,
        y: 10,
        delay: 30,
        duration: 1.5,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.09,

    });

    Shery.makeMagnet("#page1 h1" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });           
    Shery.makeMagnet(".about a" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    Shery.makeMagnet(".img1,.img2,.img3" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    Shery.hoverWithMediaCircle("#page1" /* Element to target.*/, {
        
        videos: ["Riders Republic_ Cinematic Premiere _ Ubisoft Forward 2020 _ Ubisoft [NA].mp4"],
    });
    
   
});
