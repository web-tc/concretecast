function configureMenu() {
  
  const menuBtn = document.querySelector(".menu-btn");
  const menuItems = document.querySelector(".menu-items");
  const expandBtns = document.querySelectorAll(".expand-btn");
  
  // humburger toggle
  menuBtn.addEventListener("click", () => {
    if (menuBtn.classList.contains('open')) {
      expandBtns.forEach((btn) => {
        btn.classList.remove('open');
      });
    };
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
  });
  
  // mobile menu expand
  expandBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
    });
  });
}

// Slide show
$('#slideshow > img:gt(0)').hide();

setInterval(function () {
  $('#slideshow > img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 6000);
