const body = document.querySelector("body");
const img = document.querySelectorAll(".masonary_grid_layout div img");
const preview_section = document.querySelector(".preview_section");
const modal = document.getElementById("modal");

// Create HTML Tag...
const modal_img = document.createElement('img');
const btn = document.createElement('button');
btn.innerHTML = "x";
btn.classList.add('close_btn')
modal_img.setAttribute("id", "modal_img");
modal.appendChild(modal_img);
modal.appendChild(btn);
if (img) {
    img.forEach(item => {
        item.onclick = (e) =>{
            const get_url = e.target.getAttribute("src");
            modal_img.setAttribute('src', get_url);
            preview_section.style.opacity = 1;
            preview_section.style.transition = "all .6s ease-in-out";
            preview_section.style.display = "flex";
            preview_section.style.visibility = "visible";
            body.style.overflowY = "hidden"
        }
    });
}
if (modal) {
    modal.onclick = (e) =>{
        if (e.target.classList.contains("close_btn") || e.target.getAttribute('id') === "modal_img") {
            preview_section.style.display = "none";
            body.style.overflowY = "visible"
        }
    }
}



// Change bg color..
// Onload body bg color set...
window.onload = function(){
    body.style.backgroundColor = "green"
}

const bg_change_btn = document.querySelector(".change_bg_color button");
if (bg_change_btn) {
    bg_change_btn.onclick = function(){
        const red = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)
        body.style.backgroundColor = `rgba(${red} , ${green} , ${blue})`
    }
}








