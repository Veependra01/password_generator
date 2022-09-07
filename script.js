var Capital = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var Small = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var spacial = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "?"];

  

function myfun(){
    var eleArray = document.getElementById('myform').elements;
    var num = eleArray[0].value;
    var isCap = eleArray[1].checked;
    var isSml = eleArray[2].checked;
    var isNum = eleArray[3].checked;
    var isSpc = eleArray[4].checked;
    var pasArray = [] ;
    
    if(isCap) {pasArray = pasArray.concat(Capital);}
    if(isSml) {pasArray = pasArray.concat(Small);}
    if(isNum) {pasArray = pasArray.concat(numbers);}
    if(isSpc) {pasArray = pasArray.concat(spacial);}
    console.log(pasArray);
    var size = pasArray.length;
    var ans = "";
    for(var i = 0; i<num; i++){
        var randm = Math.floor(Math.random()*size);
        ans = ans.concat(pasArray[randm]);
    }
    document.getElementById('answer').innerHTML = ans;
}
