function clamp(val, min, max) {
	// clamps the value between 2 numbers but "circular"
	return val > max ? min : val < min ? max : val;
}

function updateLightboxContent(mCard) {
	const imgContainer = document.querySelector(".lightbox-content");
	imgContainer.innerHTML =
		mCard._media.lightboxDisplayedMedia + `<h2>${mCard._media.title}</h2>`;
	imgContainer.setAttribute("data-id", mCard._media.id);
}

function newMedia(mCards, offset) {
	console.log(mCards);
	const id = parseInt(
		document.querySelector(".lightbox-content").getAttribute("data-id")
	);
	const index = mCards.findIndex((mCard) => parseInt(mCard._media.id) === id);
	const newCardIndex = clamp(index + offset, 0, mCards.length - 1);

	updateLightboxContent(mCards[newCardIndex]);
}

function displayLightbox(mCard, mCards) {
	const prevBtn = document.querySelector(".prev-btn");
	const nextBtn = document.querySelector(".next-btn");

	prevBtn.addEventListener("click", (prevFnct = () => newMedia(mCards, -1)));
	nextBtn.addEventListener("click", (nextFnct = () => newMedia(mCards, +1)));

	document.addEventListener(
		"keydown",
		(keyFnct = (e) => {
			if (e.key === "Escape") {
				closeLightbox(mCards);
			} else if (e.key === "ArrowLeft") {
				newMedia(mCards, -1);
			} else if (e.key === "ArrowRight") {
				newMedia(mCards, +1);
			}
		})
	);

	updateLightboxContent(mCard);

	const modal = document.getElementById("lightbox_modal");
	modal.style.display = "block";
}

function closeLightbox(mCards) {
	const modal = document.getElementById("lightbox_modal");
	const prevBtn = document.querySelector(".prev-btn");
	const nextBtn = document.querySelector(".next-btn");

	console.log("removing EventListener");

	prevBtn.removeEventListener("click", prevFnct);
	nextBtn.removeEventListener("click", nextFnct);
	document.removeEventListener("keydown", keyFnct);
	modal.style.display = "none";
}
