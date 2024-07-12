let firstDiv = document.querySelector('div#firstDiv')
let imgMsg = document.querySelector('img#imgMsg')

let now = new Date()
let hour = now.getHours()
let min = now.getMinutes()
let formattedMin = min.toString().padStart(2, '0')

firstDiv.innerHTML = `It is now ${hour}:${formattedMin} in your local time`

function checkHour(){
    if (hour >= 18){
        imgMsg.src = "/CONDICIONAIS/imagens/night.jpg"
    } else if (hour < 18 && hour >= 13){
        imgMsg.src = "/CONDICIONAIS/imagens/afternoon.jpg"
    } else{
        imgMsg.src = "/CONDICIONAIS/imagens/morning.jpg"
    }
}

checkHour()