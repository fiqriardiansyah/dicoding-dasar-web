const sidenavHandler = () => {
  const buttonOpenNav = document.querySelector('nav button');
  const buttonCloseNav = document.querySelector('#sidenav .close');
  const sidenav = document.querySelector('#sidenav');
  const sidenavContainer = document.querySelector('#sidenav .sidenav-container');
  const sidenavMenu = document.querySelectorAll('#sidenav .menu a');
  const footerAboutBtn = document.querySelector('footer a[href="#about"]');

  buttonOpenNav.addEventListener('click', () => {
    sidenav.classList.add('open');
    sidenavContainer.classList.add('open');
  });

  buttonCloseNav.addEventListener('click', (e) => {
    e.stopPropagation();
    sidenav.classList.remove('open');
    sidenavContainer.classList.remove('open');
    sidenavContainer.classList.remove('about-open');
  });

  footerAboutBtn.addEventListener('click', () => {
    sidenavContainer.classList.add('about-open');
    sidenav.classList.add('open');
    sidenavContainer.classList.add('open');
  });

  sidenavMenu.forEach((el) => {
    el.addEventListener('click', () => {
      sidenav.classList.remove('open');
      sidenavContainer.classList.remove('open');

      if (el.textContent === 'about') {
        setTimeout(() => {
          sidenav.classList.add('open');
          sidenavContainer.classList.add('open');
          sidenavContainer.classList.add('about-open');
        }, 200);
      }
    });
  });
}

const contentHandler = () => {
  const article = document.querySelector('article .foods');

  items.forEach((el, i) => {
    const item = `<div class="item mt-10 mb-10 ${i % 2 === 0 ? 'reverse' : ''}">
                      <div class="description">
                          <h3 class="title">${el.title}</h3>
                          <p class="paragraph">${el.desc}</p>
                      </div>
                      <div class="content">
                          <img src="./assets/${el.image}" alt="">
                          <span class="title">${el.title}</span>
                      </div>
                  </div>`;
    article.insertAdjacentHTML('beforeend', item);
  });
}

const carouselHandler = () => {
  let index = 0;
  const imagesContainer = document.querySelector(".images");
  const pathImages = ["./assets/jumbo1.jpg", "./assets/jumbo2.jpg", "./assets/jumbo3.jpg", "./assets/jumbo5.jpg"]
  const elementImages = pathImages.map((path) => `<img src="${path}" alt="${path}" class="carousel-img" />`);

  imagesContainer.innerHTML = elementImages[pathImages.length - 1];

  setInterval(() => {
    imagesContainer.innerHTML = elementImages[index];

    if(index === pathImages.length - 1) {
      index = 0;
      return;
    }
    index++;
  }, 4000);
  
}

window.addEventListener('DOMContentLoaded', () => {
  sidenavHandler();
  contentHandler();
  carouselHandler();
});
