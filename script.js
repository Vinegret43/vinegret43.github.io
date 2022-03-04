
// id is used to display a "Copied!" popup. See html for more details
function copy_to_clipboard(text, id=null) {
  navigator.clipboard.writeText(text);

  if (id) {
    let img = document.getElementById(id);
    let popup = img.parentElement.querySelector('.popup');

    // Aligning to the center, relative to the image
    popup.style.left = (img.offsetLeft + ((img.offsetWidth-popup.offsetWidth) / 2)) + "px";
    // Popup will be a bit above the clicked image
    popup.style.top = (img.offsetTop - popup.offsetHeight + 10) + "px";

    popup.style.setProperty("animation", "appear-and-disappear 2s");
    setTimeout(clear_animations, 2000);
  }
}

function clear_animations() {
  let popups = document.getElementsByClassName("popup");
  for (i = 0; i < popups.length; i++) {
    // All the general styles are in styles.css, so this will remove only
    // what this script have added in copy_to_clipboard function
    popups[i].style = "";
  }
}
