async function photo(){
    var results=document.getElementById("result")
    var url=await fetch("https://jsonplaceholder.typicode.com/photos")
    var store=await url.json()
     store.map((set)=>{
        var i=document.createElement("p")
        i.innerText=set.id
        results.appendChild(i)
        var tit=document.createElement("p")
        tit.innerText=set.title
        results.appendChild(tit)
        var show=document.createElement("img")
        show.src=set.url
        results.appendChild(show)
        var d=document.createElement("div")
    });
}
photo()