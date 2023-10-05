async function getData() {
	// Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
	// mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
	const response = await fetch("./data/photographers.json");
	const data = await response.json();
	// et bien retourner le tableau photographers seulement une fois récupéré
	return {
		photographers: data.photographers,
		media: data.media,
	};
}

async function displayData(photographer) {
	const photographerHeader = document.querySelector(".photograph-header");
	const photographerModel = photographerTemplate(photographer);
	const { container, img } = photographerModel.getUserHeaderDOM();
  console.log(photographerHeader);
	photographerHeader.prepend(container);
	photographerHeader.append(img);
}

async function displayMedia(media, photographerID) {

}

async function init() {
	// Récupère les datas des photographes
	const { photographers, media } = await getData();
	const params = new URL(document.location).searchParams;
	const photographerID = parseInt(params.get("id"));
	displayData(photographers.find((e) => e.id === photographerID));
  displayMedia(media, photographerID);
}

init();
