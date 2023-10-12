class MediaCard {
	constructor(media, isLiked) {
		this._media = media;
		this._isLiked = isLiked;
	}

	createMediaCard() {
		const wrapper = document.createElement("div");
		wrapper.classList.add("media-card-wrapper");

		const mediaCard = `
          <div class="media-thumbnail">
              ${this._media.displayedMedia}
          </div>
          <div class="media-text">
          	<h3>${this._media.title}</h3>
            <p>${this._media.likes} <i class="fa fa-heart" aria-label="likes" onclick="${this._isLiked}"></i></p>
          </div>
      `;

		wrapper.innerHTML = mediaCard;
		return wrapper;
	}
}

// export default MediaCard;
