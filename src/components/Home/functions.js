import gsap from "gsap";

export const animate = () => {
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    timeline.fromTo(".navbar", { y: "-100%" }, { y: "0", ease: "elastic.out(1,0.3)" })
    timeline.fromTo(".title", { opacity: 0 }, { opacity: 1 })
    timeline.fromTo(".sub-title", { opacity: 0 }, { opacity: 1 })
    timeline.fromTo(".avatar-con", { scale: 0 }, { scale: 1 })
    timeline.fromTo(".contact-svg", { opacity: 0 }, { opacity: 1 })
}
