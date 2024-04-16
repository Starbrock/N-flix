function Add(){
    var A=document.getElementById("Value1").value;
    var B=document.getElementById("Value2").value;
    A=Number(A);
    B=Number(B);
    var C=document.getElementById("Result").innerHTML=`<span><b>${A+B}</b></span>`;
   
}
function Sub(){
    var A=document.getElementById("Value1").value;
    var B=document.getElementById("Value2").value;
    A=Number(A);
    B=Number(B);
    var C=document.getElementById("Result").innerHTML=`<span><b>${A-B}</b></span>`;
}
function Multiply(){
    var A=document.getElementById("Value1").value;
    var B=document.getElementById("Value2").value;
    A=Number(A);
    B=Number(B);
    var C=document.getElementById("Result").innerHTML=`<span><b>${A*B}</b></span>`;

}
function Divide(){
    var A=document.getElementById("Value1").value;
    var B=document.getElementById("Value2").value;
    A=Number(A);
    B=Number(B);
    var C=document.getElementById("Result").innerHTML=`<span><b>${A/B}</b></span>`
}
function Clear(){
    var A=document.getElementById("Value1");
    var B=document.getElementById("Value2");
    Value1.value="";
    Value2.value="";
    Result.innerHTML="";
    var C=document.getElementById("Result").innerHTML
}