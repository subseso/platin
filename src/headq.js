export const headq = () => {
  let menu1 = document.querySelector("div.headmenu");
  let menuul = document.querySelector("div.headmenu > ul");
  let menuli = document.querySelector("div.headmenu > ul > li");
  let but11 = document.querySelector("div.but-head");
  window.addEventListener("resize", function () {
    console.log(this.innerWidth);
    if (this.innerWidth < 1200) {
      menu1.classList.add("menuoff");
      but11.classList.add("buton");
    } else {
      menu1.classList.remove("menuoff");
      but11.classList.remove("buton");
    }
  });

  but11.addEventListener("click", () => {
    menu1.classList.remove("menuoff");
    menu1.classList.add("qheadmenu");
    menuul.classList.add("qul");
    menuli.classList.add("qli");
  });
};
