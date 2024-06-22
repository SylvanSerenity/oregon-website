/* Aside animation */
document.getElementById("toggle-aside").addEventListener("click", (event) => {
	const aside = document.getElementById("left-aside");
	const button = document.getElementById("toggle-aside");

	aside.classList.toggle("show");
	button.classList.toggle("move");
});
