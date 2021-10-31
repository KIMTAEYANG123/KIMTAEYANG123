const body = document.querySelector('body');
const backImages = ['w1.jpg','w2.jpg','w3.jpg'];
const rdn = Math.floor(Math.random()*backImages.length);
body.style.backgroundSize = `100% 100%`;
body.style.backgroundImage  = `url(assets/images/${backImages[rdn]})`;
body.style.backgroundRepeat = "no-repeat";
