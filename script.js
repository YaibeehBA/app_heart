window.addEventListener('load', () => {
  textAnim();
  smallHeartAnim();
});

const total = 13;
const container = document.querySelector('.smallHearts');
for (var i = 0, span; i < total; i++) {
  span = document.createElement('span');
  span.className = 'smallHeart';
  container.appendChild(span);
}


function textAnim() {
  const tl = gsap.timeline();
  tl.set('.s', {
    opacity: 1 }).

  from('.s', {
    duration: 0.4,
    delay: '3',
    ease: 'power1.inOut',
    scale: 0,
    y: 40,
    stagger: 0.04 });

}


function smallHeartAnim() {
  const tl = gsap.timeline();
  tl.set('.smallHeart', {
    opacity: 1 }).

  fromTo(
  '.smallHeart',
  {
    scale: 0,
    rotate: '-=25',
    y: '+=70' },

  {
    duration: 3.4,
    delay: '3.6',
    ease: 'slow.out',
    rotate: 'random(-20, 20)',
    scale: 'random(0.5, 1.5)',
    y: '0',
    x: Math.PI * 4,
    modifiers: {
      x: function (x) {
        return Math.sin(parseFloat(x)) * 15 + 'px';
      } },

    stagger: {
      each: 0.08,
      from: 'random' } });



}
const happyEmoji = document.getElementById('happy-emoji');
const sadEmoji = document.getElementById('sad-emoji');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

function showEmojis(answer) {
  if (answer === 'yes') {
    Swal.fire({
      title: "Sabía que ibas a decir que sí; después de todo, ¿Quién podría resistirse a esta cantidad infinita de encanto y humor? 😄 😍😘",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media.tenor.com/URGSt5HkHeEAAAAi/patrick.gif")
        left top
        no-repeat
      `
    });
    // alert(" ");
  } else if (answer === 'no') {
    
    alert("Gracias por tu sinceridad 😔🥺😭");
  }
}


yesBtn.addEventListener('click', () => {
  showEmojis('yes');
});

noBtn.addEventListener('click', () => {
  showEmojis('no');
});


  noBtn.addEventListener("mousemove",function(e){
	let x = Math.round( Math.random() * 93 );
	let y = Math.round( Math.random() * 93 );
	noBtn.style.left = x+"%";
	noBtn.style.top = y+"%";	
});

