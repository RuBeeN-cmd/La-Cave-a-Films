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

var previous_btn = document.getElementById("previous-btn");
var next_btn = document.getElementById("next-btn");
var img_container = document.getElementById("img-container");
var slider_container = document.getElementById("bar-slider");
var current_page = 1;

img_container.children.item(current_page - 1).style.opacity = "1";
slider_container.children.item(current_page - 1).style.opacity = "1";
previous_btn.onclick = () => {
    if (current_page > 1) {
        img_container.children.item(current_page - 1).style.opacity = "0";
        slider_container.children.item(current_page - 1).style.opacity = "0.5";
        current_page--;
        img_container.children.item(current_page - 1).style.opacity = "1";
        slider_container.children.item(current_page - 1).style.opacity = "1";
    } else {
        img_container.children.item(current_page - 1).style.opacity = "0";
        slider_container.children.item(current_page - 1).style.opacity = "0.5";
        current_page = img_container.children.length;
        img_container.children.item(current_page - 1).style.opacity = "1";
        slider_container.children.item(current_page - 1).style.opacity = "1";
    }
};

next_btn.onclick = () => {
    if (current_page < img_container.children.length) {
        img_container.children.item(current_page - 1).style.opacity = "0";
        slider_container.children.item(current_page - 1).style.opacity = "0.5";
        current_page++;
        img_container.children.item(current_page - 1).style.opacity = "1";
        slider_container.children.item(current_page - 1).style.opacity = "1";
    } else {
        img_container.children.item(current_page - 1).style.opacity = "0";
        slider_container.children.item(current_page - 1).style.opacity = "0.5";
        current_page = 1;
        img_container.children.item(current_page - 1).style.opacity = "1";
        slider_container.children.item(current_page - 1).style.opacity = "1";
    }
};

Array.from(slider_container.children).forEach(element => {
    element.onclick = () => {
        if (current_page != Array.from(slider_container.children).indexOf(element) + 1) {
            img_container.children.item(current_page - 1).style.opacity = "0";
            slider_container.children.item(current_page - 1).style.opacity = "0.5";
            current_page = Array.from(slider_container.children).indexOf(element) + 1;
            img_container.children.item(current_page - 1).style.opacity = "1";
            slider_container.children.item(current_page - 1).style.opacity = "1";
        }
    }
});