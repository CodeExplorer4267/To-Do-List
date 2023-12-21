const inputbox=document.getElementById("input-text");
const listcontainer=document.getElementById("list-container");
let audio=new Audio("task.mp3");
let button=document.getElementById("button");
button.addEventListener('click',()=>{
    if(inputbox.value===''){
        alert("You must write some task");
    }
    else{
        let li=document.createElement("li");
        li.setAttribute('id','LI')
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        inputbox.value=''; 
        let span=document.createElement("span");
        span.setAttribute('id','cross');
        span.innerHTML="\u00d7";
        li.appendChild(span);
        savedata();
}
})
listcontainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        audio.play();
        savedata();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
  localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();