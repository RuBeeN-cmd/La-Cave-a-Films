var sub_navbar = document.getElementById("sub_navbar");
var navbar = document.getElementById("navbar");

sub_navbar.style.display = "none";
Array.from(sub_navbar.children).forEach(element => {
    element.style.display = "none";
});
Array.from(navbar.children[0].children).forEach(element => {
    element.children[0].onclick = () => {
        console.log("Test");
        
        Array.from(sub_navbar.children).forEach(e => {
            if (Array.from(navbar.children[0].children).indexOf(element) != Array.from(sub_navbar.children).indexOf(e)) {
                e.style.display = "none";
            } else if (e.style.display == "none") {
                e.style.display = "flex";
            } else {
                e.style.display = "none";
            }
        });
        if (sub_navbar.style.display == "none") {
            sub_navbar.style.display = "flex";
        } else if (sub_navbar.children[Array.from(navbar.children[0].children).indexOf(element)].style.display == "none") {
                sub_navbar.style.display = "none";
        }
    }
});