document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);

	ScrollTrigger.create({
		start: "top -100",
		end: 99999,
		toggleClass: {
			className: "is-sticky",
			targets: ".w-nav",
		},
	});
});
