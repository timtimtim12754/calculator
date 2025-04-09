let display_text = document.querySelector("#display-text");
function changeDisplay(s) {
  if (s == undefined) {
    return;
  }
  if(display_text.textContent=="錯誤"){
    display_text.textContent=0
    return
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
  const text=display_text.textContent
  text.split("").forEach((element,index)=>{
    if(display_text.textContent.charAt(0)=='-' && index==0){
      return
    }
    if(mathSymbolList.includes(element)){
      canAdd=false
    }
  })
  //如果當前是符號可以覆蓋
  if(mathSymbolList.includes(text.charAt(text.length-1))){
    changeDisplay(text.slice(0,text.length-1)+s)
    return
  }
  if (!canAdd){
    showAnswer()
    addMathSymbol(s)
    return
  }
  changeDisplay(display_text.textContent+s) 
}
function showError(){
  changeDisplay("錯誤")
}
function showAnswer(){
  s=display_text.textContent
  let mathObject=get_operate_method(s)
  if(mathObject===undefined){
    return
  }
  let anwser=operate(mathObject.n1,mathObject.n2,mathObject.operate_method)
  if(anwser==undefined){
    showError()
  }
  changeDisplay(anwser)
}