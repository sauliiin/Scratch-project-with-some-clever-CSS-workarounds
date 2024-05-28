function play() {
    vid.play();
}


function playVid() {  
    document.getElementById("resultados").style.transition = "2s"
    document.getElementById("resultados").style.backgroundColor = "#ffffff13"
} 

function pause() { 
    document.getElementById("resultados").style.transition = "2s"
    document.getElementById("resultados").style.backgroundColor = "#ffffffff"
} 

function openLink(link) {
    window.open(link, "_self")
}

