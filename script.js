var val1, val2;
function loadDisplay(num) {
    document.getElementById('display2').value += num.value.toString();
}
function delFromRight() {
    document.getElementById('display2').value = document.getElementById('display2').value.slice(0,-1);
}
function clearDisplay() {
    document.getElementById('display2').value = ""

}
function setOperator(trg) {
    val1 = document.getElementById('display2').value+ " " + trg.value;
    document.getElementById('display1').innerHTML = val1;
    document.getElementById('display2').value = "";
}
function doMath() {
    alert('reached');
    val2 = document.getElementById('display2').value;
    var result;
    switch(val1.slice(-1)){
        case '+':
            result = parseInt(val1) + parseInt(val2);
            break;
        case '-':
            result = parseInt(val1) - parseInt(val2);
            break;
        case '*':
            result = parseInt(val1) * parseInt(val2);
            break;
        case '/':
            result = parseInt(val1) / parseInt(val2);
            break;
        case 'sqrt':
            // do square root math
            break;
        case 'pow':
            // do eponent math
            break;


    }
    document.getElementById('display1').innerHTML = "";
    document.getElementById('display2').value = result;
    val1 = null;
    val2 = null;
    result = null;
}
//function specialCase(){
//    if(sqrt){
//        // do square root math
//    }else{
//       // do exponent math
//    }
// }