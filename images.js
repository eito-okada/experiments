const sleep = async x => new Promise(r => setTimeout(r, x));
window.addEventListener("load", async () => {
	const cover = document.getElementById("cover");
	await sleep(750);
	cover.classList.add("cover");
	cover.classList.remove("cover-onload");
	generate();
});
