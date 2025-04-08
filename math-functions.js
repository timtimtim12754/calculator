function add(n1, n2) {
  return n1 + n2;
}
function subtract(n1, n2) {
  return n1 - n2;
}
function divide(n1, n2) {
  if (n2 == 0) {
    return undefined;
  }
  return n1 / n2;
}
function multiplay(n1, n2) {
  return n1 * n2;
}
function percent(n) {
  return n / 100;
}
function get_operate_method(s) {
  //輸入一個算式回傳結果
  let n1;
  let n2;
  let operate_method;
  //提取數字
  let allNumbers=['0','1','2','3','4','5','6','7','8','9','-','.'] //所有的數字可能以及符號
  let string_lists=s.split("")
  let tmp_list=[]
  string_lists.forEach((element) => {
    if(allNumbers.includes(element)){
        tmp_list.push(element)
    }else{
      n1=tmp_list.slice()
      tmp_list=[]
      operate_method=element
    }
  });
  n2=tmp_list
  n1=n1.join("")
  n2=n2.join("")
  return {
    n1: n1,
    n2: n2,
    operate_method: operate_method
  }
}
function operate(n1,n2,operate_method){
  switch (operate_method) {
    case "+":
      return add(n1,n2)
    case "-":
      return subtract(n1,n2)
    case "×":
      return multiplay(n1,n2)
    case "÷":
      return divide(n1,n2b)
    default:
      return undefined;
  }
}