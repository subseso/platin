export const section1 = () => {
  let opbut1 = document.querySelector("#but-1");
  let opbut2 = document.querySelector("#but-2");
  let opbut3 = document.querySelector("#but-3");
  let opbut4 = document.querySelector("#but-4");
  let opbut5 = document.querySelector("#but-5");
  let opbut6 = document.querySelector("#but-6");
  let opbut7 = document.querySelector("#but-7");
  let opdec1 = document.querySelector("#point-1");
  let opdec2 = document.querySelector("#point-2");
  let opdec3 = document.querySelector("#point-3");
  let opdec4 = document.querySelector("#point-4");
  let opdec5 = document.querySelector("#point-5");
  let opdec6 = document.querySelector("#point-6");
  let opdec7 = document.querySelector("#point-7");
  let allbut = document.querySelectorAll("div.sec-but");

  opbut1.addEventListener("click", () => {
    opbut1.classList.add("butact");
    opdec1.classList.add("active");
    opdec1.style.height = "370px";
    opdec2.classList.remove("active");
    opdec3.classList.remove("active");
    opdec4.classList.remove("active");
    opdec5.classList.remove("active");
    opdec6.classList.remove("active");
    opdec7.classList.remove("active");
    opbut2.classList.remove("butact");
    opbut3.classList.remove("butact");
    opbut4.classList.remove("butact");
    opbut5.classList.remove("butact");
    opbut6.classList.remove("butact");
    opbut7.classList.remove("butact");
  });
  opbut2.addEventListener("click", () => {
    opbut2.classList.add("butact");
    opdec2.classList.add("active");
    opdec2.style.height = "400px";
    opdec1.classList.remove("active");
    opdec3.classList.remove("active");
    opdec4.classList.remove("active");
    opdec5.classList.remove("active");
    opdec6.classList.remove("active");
    opdec7.classList.remove("active");
    opbut1.classList.remove("butact");
    opbut3.classList.remove("butact");
    opbut4.classList.remove("butact");
    opbut5.classList.remove("butact");
    opbut6.classList.remove("butact");
    opbut7.classList.remove("butact");
  });
  opbut3.addEventListener("click", () => {
    opbut3.classList.add("butact");
    opdec3.classList.add("active");
    opdec3.style.height = "320px";
    opdec1.classList.remove("active");
    opdec2.classList.remove("active");
    opdec4.classList.remove("active");
    opdec5.classList.remove("active");
    opdec6.classList.remove("active");
    opdec7.classList.remove("active");

    opbut1.classList.remove("butact");
    opbut2.classList.remove("butact");
    opbut4.classList.remove("butact");
    opbut5.classList.remove("butact");
    opbut6.classList.remove("butact");
    opbut7.classList.remove("butact");
  });
  opbut4.addEventListener("click", () => {
    opbut4.classList.add("butact");
    opdec4.classList.add("active");
    opdec4.style.height = "350px";

    opdec1.classList.remove("active");
    opdec2.classList.remove("active");
    opdec3.classList.remove("active");
    opdec5.classList.remove("active");
    opdec6.classList.remove("active");
    opdec7.classList.remove("active");
    opbut1.classList.remove("butact");
    opbut2.classList.remove("butact");
    opbut3.classList.remove("butact");
    opbut5.classList.remove("butact");
    opbut6.classList.remove("butact");
    opbut7.classList.remove("butact");
  });
  opbut5.addEventListener("click", () => {
    opbut5.classList.add("butact");
    opdec5.classList.add("active");
    opdec5.style.height = "410px";

    opdec1.classList.remove("active");
    opdec2.classList.remove("active");
    opdec3.classList.remove("active");
    opdec4.classList.remove("active");
    opdec6.classList.remove("active");
    opdec7.classList.remove("active");
    opbut1.classList.remove("butact");
    opbut2.classList.remove("butact");
    opbut3.classList.remove("butact");
    opbut4.classList.remove("butact");
    opbut6.classList.remove("butact");
    opbut7.classList.remove("butact");
  });
  opbut6.addEventListener("click", () => {
    opbut6.classList.add("butact");
    opdec6.classList.add("active");
    opdec6.style.height = "350px";

    opdec1.classList.remove("active");
    opdec2.classList.remove("active");
    opdec3.classList.remove("active");
    opdec4.classList.remove("active");
    opdec5.classList.remove("active");
    opdec7.classList.remove("active");
    opbut1.classList.remove("butact");
    opbut2.classList.remove("butact");
    opbut3.classList.remove("butact");
    opbut4.classList.remove("butact");
    opbut5.classList.remove("butact");
    opbut7.classList.remove("butact");
  });
  opbut7.addEventListener("click", () => {
    opbut7.classList.add("butact");
    opdec7.classList.add("active");
    opdec7.style.height = "325px";

    opdec1.classList.remove("active");
    opdec2.classList.remove("active");
    opdec3.classList.remove("active");
    opdec4.classList.remove("active");
    opdec5.classList.remove("active");
    opdec6.classList.remove("active");
    opbut1.classList.remove("butact");
    opbut2.classList.remove("butact");
    opbut3.classList.remove("butact");
    opbut4.classList.remove("butact");
    opbut5.classList.remove("butact");
    opbut6.classList.remove("butact");
  });
};
