/* Title animation */
function adjustTitle() {
	const title = document.getElementById("title-wrapper");
	const videoContainer = document.getElementById("bg-video");
	const scrollPosition = window.scrollY / 2;

	// Scroll with the user
	const startTop = videoContainer.offsetHeight - title.offsetHeight;
	const maxScroll = startTop / 2 - (videoContainer.offsetHeight * 0.03); // Maintain a 3% padding
	let newTop;
	if (scrollPosition <= maxScroll) {
        // Center title
        newTop = scrollPosition;
    } else {
        // Lock to bottom
        newTop = maxScroll;
    }
	title.style.top = `calc(50% + ${newTop}px)`;
}

document.addEventListener("DOMContentLoaded", adjustTitle);
document.addEventListener("scroll", adjustTitle);
window.addEventListener("resize", adjustTitle);

/* Fade video when loaded */
document.addEventListener("DOMContentLoaded", (event) => {
	const video = document.getElementById("bg-video");

	video.addEventListener("canplay", (e) => {
		const overlay = document.getElementById("video-overlay");
		overlay.style.animation = "fadeOut 1s forwards";
	});
});
