function Add(){
    var Get=document.getElementById("inp").value
    if(Get.length!==0){
    var li=document.createElement("p")
    li.innerText=Get
     var Div= document.getElementById("d")
     Div.appendChild(li)
var btn=document.createElement("img")
li.appendChild(btn)
btn.src="/DomTaskImgs/dustbin.png"
btn.className="Btncls"
li.className="li"
btn.onclick=(()=>{
    li.remove()
    inp.value=""
})
    }
}