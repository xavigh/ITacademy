

//ex1
//console.log("hello world");

//ex2
// alert("my name is Xavi !");

//ex3
// var name, surname;
// name = "Xavi";
// surname = "Gargallo Jané";
//document.write(name + " " + surname);

//ex4 sum of 2 numbers



function sum(){
  var x = 5;
  var y = 5;
  var total = x + y;
return total= x + y;

}

//ex 5
function nota_exam(a){
  if(a >= 5){
    return  document.getElementById('demo').innerHTML = "you have passed the exam with a "+ a;
  }
  else{
    return document.getElementById('demo').innerHTML = "you have failed the exam "+ a;
  }
}

//ex6 replace strings

function replaceFun(a,b){

  var str= document.getElementById("demo").innerHTML;
  var txt = str.replace(a, b);
  return document.getElementById('demo').innerHTML = str +"<br>"+ txt;

}

function objects(){

  var coses = ['Taula', 'cadira','ordinador', 'llibreta'];

  for (var i=0; i < coses.length; i++){
    txt = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = txt + coses[i] + "  position is "+ i +"<br>";
  }

return txt;

}
// function calculator
function calculator(opt, val1, val2){

      switch(opt){
          case "sum":
             txt = document.getElementById('demo').innerHTML;

             document.getElementById('demo').innerHTML = txt +" "+ (val1 + val2);
                break;
          case "rest":
               txt = document.getElementById('demo').innerHTML;
              document.getElementById('demo').innerHTML =txt +" "+ (val1 - val2);
                break;
          case "mult":
               txt = document.getElementById('demo').innerHTML;
              document.getElementById('demo').innerHTML = txt +" "+ (val1 * val2);
                break;
    }

}
