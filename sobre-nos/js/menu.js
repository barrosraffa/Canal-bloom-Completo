(function(){

    'use strict';

    let visivel = false;
    const menu = document.querySelector(".lista_links");
    const hmb = document.querySelector(".menu_hamburguer");


    function apareceMenu() {
        menu.classList.add("visivel");
        menu.classList.remove("escondido");
        visivel = true;

    }

    function escondeMenu() {
        menu.classList.remove("visivel");
        menu.classList.add("escondido");
        visivel=false;

    }
    function tougleMenu(){
        if(visivel === true){
            escondeMenu();
            
        }else{
            apareceMenu();
        }
    }
    
    hmb.addEventListener("click", function(){
        tougleMenu()
    });
    document.addEventListener("click",function(event){
        if(event.target != menu && event.target != hmb ){
            escondeMenu();
        }
        

    })
})();