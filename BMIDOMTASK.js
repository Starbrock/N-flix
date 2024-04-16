function Bmi(){
    var Height=document.getElementById("inp1").value
    Height=Number(Height)
    var Weight=document.getElementById("inp2").value
    Weight=Number(Weight)
    const Bmi=Weight/(Height*Height);
    var Digit=Bmi.toFixed(2)
     var A=document.getElementById("show")
    A.innerText=`${Digit}`
    var condition=Digit
    var z=document.getElementById("condition").innerText=`${Digit}`
    if(Digit<18.5){
    var z=document.getElementById("condition").innerText="UnderWeight"
    }
    else if(Digit>=18.6 && Digit<24.9){
        var z=document.getElementById("condition").innerText="Normal"
    }
    else if(Digit>=25 && Digit<29.9){
        var z=document.getElementById("condition").innerText="OverWeight"
    }
    else{
    var z=document.getElementById("condition").innerText="obesity"
    }
}
function clear(){
    inp1.value=""
    inp2.value=""
    A.innerText=""
    var z=document.getElementById("condition").innerText=""
}