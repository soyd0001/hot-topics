let controls = document.querySelectorAll(".topnav");
let container = document.querySelector(".container");
let url = './partials/home.html';

function handleSelection(e){
    e.preventDefault();
    let link = e.target;
    url = link.href;
    handleAjax();
}

function handleAjax(){
    fetch(url)
    .then(function(rs){
        return rs.text();
    })
    .then(function(data){
        container.innerHTML = data;
    });
};

for (let control of controls){
    control.addEventListener("click", handleSelection);
}
handleAjax();