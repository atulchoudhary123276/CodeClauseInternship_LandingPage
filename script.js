const navbar1 = document.getElementById("navcontainer");
const iconbar = document.getElementById("iconbar");
const baricon = document.getElementById("bar_iconid");
const home = document.getElementById('home');
const feature = document.getElementById('feature');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
const dropdown = document.getElementById('myDropdown');


function checkMediaQuery() {
    if (window.innerWidth < 768) {
        iconbar.classList.add('fa-bars');
        home.style.display='none';
        menu.style.display='none';
        feature.style.display='none';
        contact.style.display='none';     
    }
    else {
        iconbar.classList.remove('fa-bars')
        home.style.display='block';
        menu.style.display='block';
        feature.style.display='block';
        contact.style.display='block';
        
    }

}

// Initial che
checkMediaQuery();

// Add a listener for when the window resizes
  window.addEventListener('resize', checkMediaQuery);
   let extended=false;
  let appendfunc=()=>{
    if(extended==false){
        dropdown.style.display='flex';
        extended=true;
    }
    else{
        dropdown.style.display='none';
        extended=false
    }
     

};
  iconbar.addEventListener("click",appendfunc);


















