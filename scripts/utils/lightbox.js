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

	prevBtn.addEventListener("click", () => newMedia(mCards, -1));
	nextBtn.addEventListener("click", () => newMedia(mCards, +1));

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			closeLightbox();
		} else if (e.key === "ArrowLeft") {
			newMedia(mCards, -1);
		} else if (e.key === "ArrowRight") {
			newMedia(mCards, +1);
		}
	});

	updateLightboxContent(mCard);

	const modal = document.getElementById("lightbox_modal");
	modal.style.display = "block";
}

function closeLightbox() {
	const modal = document.getElementById("lightbox_modal");
	modal.style.display = "none";
}
