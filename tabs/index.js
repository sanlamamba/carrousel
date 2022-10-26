const items = document.querySelectorAll(".item");
const randomImage = () => {
  return `url(https://source.unsplash.com/random/150x150?sig=${
    Math.random() * 100
  })`;
};

window.addEventListener("load", () => {
  // random iamge
  items.forEach((item) => {
    item.style.backgroundImage = randomImage();
  });

  //   select buttons with nav-btn
  const navBtns = document.querySelectorAll(".nav-btn");

  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      navBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");

      const target = btn.getAttribute("data-target");
      items.forEach((item) => {
        item.style.opacity = "0";
      });
      items[target - 1].style.opacity = "1";
    });
  });
});
