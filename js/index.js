window.addEventListener('load',function(){ 
    var goback = document.querySelector(".goback")  
    var contain = document.querySelector(".contain")
    window.addEventListener('scroll',function(){
        if(window.pageYOffset >= contain.offsetTop){
            goback.style.display = 'block';
        }
        else{
            goback.style.display = 'none';
        }
    });
    goback.onclick = function(){
            window.scroll(0,0);
        }
      
    }); 