(() => {

let sigilButtons = document.querySelectorAll('.sigilContainer')
  lightBox = document.querySelector(".lightbox")
  closeLightbox = lightBox.querySelector('.close')
  gotVideo = lightBox.querySelector('video')


function showLightbox() {
  //pop open lightbox and show content
  //start with a video
  //debugger
  // need to get the class name from the element so we can match the video source
  let targetName = this.className.split(" ")[1]; //this wil strip out the house name 
  let targetSource = targetName.charAt(0).toUpperCase() + targetName.slice(1);
  let newVideoSource = `video/house-${targetSource}.mp4`



  lightBox.classList.add('show-lightbox');
  gotVideo.src = newVideoSource;
  gotVideo.load();
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
