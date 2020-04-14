import FooterPartial from '../../../partials/footer/footer';
import HeaderPartial from '../../../partials/header/header';

new HeaderPartial({});
new FooterPartial({});

// let heading = document.querySelector('.green-heading-bg');

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {

  var tl = gsap.timeline();
  tl.set('.loading-screen', { transformOrigin: "bottom left"});
  tl.to('.loading-screen', { duration: .5, scaleY: 1});
  tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
}

// Function to animate the content of each page
function contentAnimation(context = document) {
  var tl = gsap.timeline();
  tl.from('.is-animated', { duration: .5, translateY: 10, opacity: 0, stagger: 0.4 });
  tl.from('.main-navigation', { duration: .5, translateY: -10, opacity: 0});
  context.querySelector('.green-heading-bg').classList.add('show');
  window.scrollTo(0,0);
}

barba.init({
  sync: true,
  transitions: [{
    async leave(data) {
      const done = this.async();
      
      pageTransition();
      await delay(1000);
      done();
    },
    async enter(data) {
      contentAnimation(data.next.container);
    },
    async once(data) {
      contentAnimation();
    }
  }]
});
