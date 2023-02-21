addEventListener("DOMContentLoaded" , () =>{
    const btn_menu = document.querySelector(".btn_menu")
    if(btn_menu){
        btn_menu.addEventListener("click", () =>{
            const btn_menu = document.querySelector(".menu_items") 
            menuu_items.classlist.toggle("mostrar")
        })
    }
})