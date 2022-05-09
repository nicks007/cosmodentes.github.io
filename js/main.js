window.addEventListener("scroll",function(){
 
    let scrollbar = document.getElementById("dhiraj");
 
    if(window.pageYOffset >=20){
 
       scrollbar.classList.add("sticky");
 
 
    }else{
 
       scrollbar.classList.remove("sticky");
 
    }
 
  })