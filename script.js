const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const thumbnail = document.querySelector(".thumbnail");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

next.addEventListener("click", () => {
  initSlider("next");
});
prev.addEventListener("click", () => {
  initSlider("prev");
});

const initSlider = (type) => {
  const sliderItems = list.querySelectorAll(".item");
  const thumbnailItems = thumbnail.querySelectorAll(".item");

  // change Slide Forward => Back (Next)
  if (type === "next") {
    list.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  }
  // change Slide Back => Forward (Next)
  else {
    const lastItemPosition = sliderItems.length - 1;
    list.prepend(sliderItems[lastItemPosition]);
    thumbnail.prepend(thumbnailItems[lastItemPosition]);
    slider.classList.add("prev");
  }

  // Remove Non-active Button
  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 2000);
};
