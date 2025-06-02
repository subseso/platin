export const header = () => {
  let menuhov = document.querySelector("#sub-1");
  let subhov = document.querySelector("#platin-media-0");
  let submenu = document.querySelector("div.submenu-1");
  let submenu2 = document.querySelector("div.submenu-2");
  let singhov = document.querySelector("#singhov");
  let opdec = document.querySelector("div.op-bg");

  menuhov.addEventListener("mousemove", () => {
    submenu.classList.add("active");
  });
  menuhov.addEventListener("mouseout", () => {
    submenu.classList.remove("active");
  });

  subhov.addEventListener("mousemove", () => {
    navmenu.classList.add("active");
  });

  subhov.addEventListener("mouseout", () => {
    navmenu.classList.remove("active");
  });

  singhov.addEventListener("mousemove", () => {
    submenu2.classList.add("active");
  });
  singhov.addEventListener("mouseout", () => {
    submenu2.classList.remove("active");
  });
};
