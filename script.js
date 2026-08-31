//Converting temperature by clicking on radio button

let cTof = document.getElementById("c to f");
let fToc = document.getElementById("f to c");
let number = document.getElementById("number");
let reset = document.getElementById("btn");

cTof.addEventListener("click", (event) => {
  const C = number.value;
  let F = (9 * C + 160) / 5;
  number.value = F;
});

fToc.addEventListener("click", (event) => {
  const F = number.value;
  let C = (5 * F - 160) / 9;
  number.value = C;
});

reset.addEventListener("click", (event) => {
  number.value = "";
});
