import Photo from "../models/Photo.js";
import Photo from "../models/Photo.js";

class MediaFactory {
	constructor(data) {
		// Si le type correspond à une photo, alors on instancie une photo
		if (data.hasOwnProperty("image")) {
			return new Photo(data);
			// Sinon on instancie une video
		} else if (data.hasOwnProperty("video")) {
			return new Video(data);
			// Une bonne pratique est de throw une erreur si le format n'est pas reconnu
		} else {
			throw "Unknown type format";
		}
	}
}

export default MediaFactory;
