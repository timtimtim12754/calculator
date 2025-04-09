//數字按鈕功能
let numebrsButtons = document.querySelectorAll(".number-button");
numebrsButtons.forEach((element) => {
  element.id = `number-${element.textContent}`;
  element.addEventListener("click", () => {
    addNumber(element.textContent);
  });
});
//清空功能
document.querySelector("#clean-button").addEventListener("click", () => {
    changeDisplay("0")
});
//減一字元
document.querySelector("#backspace-button").addEventListener("click",()=>{
    if(display_text.textContent.length<=1){
        changeDisplay("0")
        return
    }
    changeDisplay(display_text.textContent.slice(0,display_text.textContent.length-1))
})
//運算按鈕
//百分比
document.querySelector("#percent-button").addEventListener("click",()=>{
    changeDisplay(percent(Number(display_text.textContent)))
})
//運算符號
mathButtonList=[document.querySelector("#add-button"),
  document.querySelector("#subtract-button"),
  document.querySelector("#multiply-button"),
  document.querySelector("#divide-button"),
]

mathButtonList.forEach(element=>{
  element.addEventListener("click",()=>{
    addMathSymbol(element.textContent)
  })
})
//等號
document.querySelector("#equal-button").addEventListener("click",()=>{
  showAnswer()
})
//鍵盤支援
document.addEventListener("keydown",(event)=>{
  let key=event.key
  let allNumbersList=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
  console.log(`key:${key}`)
  if(allNumbersList.includes(key)){
    document.querySelector(`#number-${key}`).click()
  }
  if(key=="Backspace"){
    document.querySelector(`#backspace-button`).click()
  }
  if(key=="+"){
    document.querySelector("#add-button").click()
  }
  if(key=="-"){
    document.querySelector("#subtract-button").click()
  }
  if(key=="*"){
    document.querySelector("#multiply-button").click()
  }
  if(key=="/"){
    document.querySelector("#divide-button").click()
  }
  if(key=="="){
    document.querySelector("#equal-button").click()
  }
  if(key=="Enter"){
    document.querySelector("#equal-button").click()
  }
})