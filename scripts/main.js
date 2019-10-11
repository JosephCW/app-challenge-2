function calculateRGB(value) {
    let red = 255 - value
    let green = 0
    let blue = value
    return [red, blue, green]
}

function updateColor(value) {
    document.getElementById("answer").style.color = `rgb(${value[0]}, ${value[1]}, ${value[2]})`
}

function textFieldChanged() {
    // Get the text value
    let answerSpan = document.getElementById('answer').innerHTML
    let num = answerSpan.substring(answerSpan.indexOf(":") + 2, answerSpan.length)
    console.log(num)
    let rgb = calculateRGB(num)
    updateColor(rgb)
}

// Update the color based on the remaining characters available.
document.getElementById("userInput").addEventListener("input", ()=> {
    textFieldChanged()
})

// Have to update color when page firsts load
document.addEventListener("DOMContentLoaded",function(){
    // https://stackoverflow.com/questions/39722809/wait-for-document-ready-in-es6-modules
    textFieldChanged()
});