class Image {
	constructor(data, photographerName) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._photographerName = photographerName;
		this._title = data.title;
		this._image = data.image;
		this._likes = data.likes;
		this._isLiked = false;
		this._date = data.date;
		this._price = data.price;
	}

	get id() {
		return this._id;
	}

	// get photographerId() {
	// 	return this._photographerId;
	// }

	get title() {
		return this._title;
	}

	// get image() {
	// 	return this._image;
	// }

	// get fileLocation() {
	// 	let photographerName = "Mimi"; // TODO
	// 	return `./assets/images/${photographerName}/${this._image}`;
	// }

	get displayedMedia() {
		let media = `<img src="./assets/images/${this._photographerName}/${this._image}"/>`;
		// console.log(media);
		return media;
	}

	get likes() {
		return this._likes;
	}

	likeMedia() {
		if (!this._isLiked) {
			this._likes++;
		} else {
			this._likes--;
			this._isLiked = false;
		}
	}

	// get date() {
	// 	return this._date;
	// }

	// get price() {
	// 	return this._price;
	// }
}

// export default Image;
