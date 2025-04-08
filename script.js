let display_text = document.querySelector("#display-text");
function changeDisplay(s) {
  if (s == undefined) {
    return;
  }
  display_text.textContent = s;
}
function addNumber(n) {
  if (display_text.textContent.charAt(0)=="0"){
    changeDisplay(n)
  }else{
    changeDisplay(display_text.textContent+n)
  }
}
