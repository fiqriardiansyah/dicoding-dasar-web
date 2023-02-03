window.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('article .foods');
  const buttonOpenNav = document.querySelector('nav button');
  const buttonCloseNav = document.querySelector('#sidenav .close');
  const sidenav = document.querySelector('#sidenav');
  const sidenavContainer = document.querySelector('#sidenav .sidenav-container');
  const sidenavMenu = document.querySelectorAll('#sidenav .menu a');
  const footerAboutBtn = document.querySelector('footer a[href="#about"]');

  // load 10 items
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
});
