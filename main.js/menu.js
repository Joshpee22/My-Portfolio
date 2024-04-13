function opentab(tabname, event){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

// Assuming you have defined 'sidemenu' elsewhere in your code
var sidemenu = document.getElementById("sidemenu");

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

var menuItems = document.querySelectorAll("#sidemenu li a");

menuItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
        closemenu();
    });
});

document.addEventListener("click", function(event) {
    if (!sidemenu.contains(event.target) && event.target !== document.querySelector(".fa-solid.fa-bars")) {
        closemenu();
    }
});
