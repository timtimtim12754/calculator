let display_text = document.querySelector("#display-text");
function changeDisplay(s) {
  if (s == undefined) {
    return;
  }
  display_text.textContent = s;
}
function addNumber(n) {
  if(n=="00" && display_text.textContent.charAt(0)=="0"){
    return
  }
  if (display_text.textContent.charAt(0)=="0" && display_text.textContent.length<=1 && n!="."){
    changeDisplay(n)
  }else{
    changeDisplay(display_text.textContent+n)
  }
}
function addMathSymbol(s){
  let mathSymbolList=['+','-','×','÷']
  //檢查條件
  let canAdd=true
  display_text.textContent.split("").forEach((element,index)=>{
    if(display_text.textContent.charAt(0)=='-' && index==0){
      return
    }
    if(mathSymbolList.includes(element)){
      canAdd=false
    }
  })
  if (!canAdd){
    return
  }
  changeDisplay(display_text.textContent+s) 
}