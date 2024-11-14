const limitInput = document.getElementById("limit-input")
const startButton = document.getElementById("Start-btn")
const evenNumberDiv = document.getElementById("even-number")
const oddNumberDiv = document.getElementById("odd-number")

startButton.addEventListener("click", ()=>{
    const limit = parseInt(limitInput.value) /*limit dari perulangan*/

    //memastikan input adalah bilanga positif
    if (isNaN(limit) || limit <= 0){
        alert("Please anter a valid positif number, DumbAss Nigga")
        return;
    }

    //kosongkan tampilan sebelumnya
    oddNumberDiv.textContent = "Odd Numbers: "
    evenNumberDiv.textContent = "Even Numbers: "

    //loping 1 sampai limit
    for(let i = 1; i <= limit; i++){
        if (i % 2 == 0){
            evenNumberDiv.textContent += i + "";
        } else{
            oddNumberDiv.textContent += i + "";
        }
    }
})