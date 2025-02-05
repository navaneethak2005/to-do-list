const val=document.getElementById('val');
const btn=document.querySelector('.sbtn');
const ul=document.getElementById('ul');
const items=document.querySelectorAll('.list');

btn.addEventListener('click',()=>{
    var input = val.value;
    var regx= /[a-zA-Z]/;
    if(regx.test(input)){
        var li=document.createElement('li');
        li.innerText=input;
        ul.appendChild(li);
        val.value="";
    }else{
        val.value='';
        alert("Please add valid tasks !");
    }
})
for(item of items){
    item.addEventListener('dblclick',(e)=>{
        e.target.remove();
    })
}