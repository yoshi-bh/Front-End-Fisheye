import Image from "../models/Photo.js";
import Video from "../models/Video.js";

class MediaFactory {
	constructor(data) {
		// Si le type correspond à une image, alors on instancie une image
		if (data.hasOwnProperty("image")) {
			return new Image(data);
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
