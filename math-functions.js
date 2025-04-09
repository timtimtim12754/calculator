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
  let allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]; //所有的數字可能以及符號
  let string_lists = s.split("");
  let tmp_list = [];
  string_lists.forEach((element,index) => {
    if (allNumbers.includes(element)) {
      tmp_list.push(element);
    } else {
      if(index==0){
        tmp_list.push(element);
        return;
      }
      n1 = tmp_list.slice();
      tmp_list = [];
      operate_method = element;
    }
  });
  n2 = tmp_list;
  if (n1===undefined || n1.length==0|| n2===undefined || n2.length==0 || operate_method===undefined)
  {
    return undefined
  }
  n1 = n1.join("");
  n2 = n2.join("");
  return {
    n1: Number(n1),
    n2: Number(n2),
    operate_method: operate_method,
  };
}
function percent(n){
  if(isNaN(n)){
    showError()
    return
  }
  return n/100
}
function operate(n1, n2, operate_method) {
  switch (operate_method) {
    case "+":
      return add(n1, n2);
    case "-":
      return subtract(n1, n2);
    case "×":
      return multiplay(n1, n2);
    case "÷":
      return divide(n1, n2);
    default:
      return undefined;
  }
}
