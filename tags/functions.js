function heightcontrol(){
    var height = window.innerHeight - 150;
    document.getElementById("embed").height = height;
}

function title(){
    document.getElementById("title").innerHTML = '<h1> <a href="./index.html"> Archive </a> </h1>';
}

function menu(){
    document.getElementById("menu").innerHTML = '<p> <a href="./index.html"> <button class="btn">Home</button></a><a style="margin-left:10px;" href="./privacy.html"><button class="btn">Privacy</button> </a> </p>';
}

function footer(){
    document.getElementById("footer").innerHTML = '<p> <a href="https://www.code4freedom.net/" target="_blank"> <button class="btn">C4F</button></a><a style="margin-left:10px;" href="https://t.me/code4freedom" target="_blank"><button class="btn">Telegram</button> </a> </p>';
}
