function copyToClipboard(value){
    let tempInputElement = document.createElement("input");
    tempInputElement.value = value;
    document.body.appendChild(tempInputElement);
    tempInputElement.focus();
    tempInputElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempInputElement);
}


let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


document.querySelector("#copyEmailButton").onclick = function() {
    copyToClipboard("siddhucsk@gmail.com");

    document.querySelector("#clipboardIcon").className = "bi bi-clipboard-check";

    let copyEmailButton = document.querySelector("#copyEmailButton");
    //let copyEmailButtonToolTip = bootstrap.Tooltip.getinstance(copyEmailButton);

    copyEmailButton.setAttribute("data-bs-original-title","Copied");
    let btn_tooltip = bootstrap.Tooltip.getInstance(copyEmailButton);
    copyEmailButton.title = "Copied!";
    btn_tooltip.show();
}
