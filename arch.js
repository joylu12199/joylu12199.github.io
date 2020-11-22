function unhideLightbox(lightboxID) {
    document.getElementById('lightbox-overlay').classList.remove('hidden');
    document.getElementById(lightboxID).classList.remove('hidden');

}

function unhideLightbox1() {
	
	unhideLightbox("Frame12")
}

document.getElementById('picture-1').onclick = unhideLightbox1;


function unhideLightbox2() {
	
	unhideLightbox("Frame13")
}

document.getElementById('picture-2').onclick = unhideLightbox2;



function unhideLightbox3() {
	
	unhideLightbox("Frame11")
}

document.getElementById('picture-3').onclick = unhideLightbox3;


function closeLightbox(lightboxID) {
    document.getElementById('lightbox-overlay').classList.add('hidden');
    document.getElementById(lightboxID).classList.add('hidden');
}

function closeAllLightboxes() {
    var lightboxElements = document.getElementsByClassName('lightbox');
    for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
document.getElementById('lightbox-overlay').onclick  = closeAllLightboxes;