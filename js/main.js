(() => {

let sigilButtons = document.querySelectorAll('.sigilContainer')
  lightBox = document.querySelector(".lightbox")
  closeLightbox = lightBox.querySelector('.close')
  gotVideo = lightBox.querySelector('video')
function showLightbox() {
  //pop open lightbox and show content
  //start with a video
  //debugger
  lightBox.classList.add('show-lightbox');
  gotVideo.play();
}

function hideLightbox(){
  lightBox.classList.remove('show-lightbox');
  gotVideo.currentTime = 0;
  gotVideo.pause()
}
sigilButtons.forEach(button => button.addEventListener("click", showLightbox));
closeLightbox.addEventListener("click", hideLightbox)
})();
