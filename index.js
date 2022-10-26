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

    item.style.transition = "transform 0.5s";

    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-10px)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
    });
  });

  const slider = document.querySelector("#slider");

  const timing = 10;

  slider.style.transition = `transform ${timing}s ease-in-out`;

  const moveSlider = () => {
    const spacetakebyitems = (items.length - 1) * 150;
    if (
      slider.style.transform === "" ||
      slider.style.transform === "translateX(0)" ||
      slider.style.transform === "translateX(0px)"
    ) {
      slider.style.transform = `translateX(-${spacetakebyitems}px)`;
    } else {
      slider.style.transform = "translateX(0)";
    }
  };
  moveSlider();
  const interval = setInterval(moveSlider, timing * 1000);
});
