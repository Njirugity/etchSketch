let containerSize = 480;
let squareNumber = 16;
let squareSize = containerSize / squareNumber

const container = document.querySelector('.container')
const changeGrid = document.querySelector('.changeGrid')

// function btnClick() {
//     let userChoice = parseInt(prompt("Choose the number of squares"))
//     let containerSize = 480;
//     let newSquareNumber = userChoice;
//     let squareSize = containerSize / newSquareNumber
//     duplicate(newSquareNumber)
// }
// changeGrid.addEventListener('click', btnClick);


function duplicate() {
    for (let i = 0; i < squareNumber * squareNumber; i++) {
        const smallDivs = document.createElement('div')
        smallDivs.classList.add("innerDiv")
        container.appendChild(smallDivs)
        smallDivs.setAttribute('style', `box-sizing: border-box; border: solid 1px grey ; width: ${squareSize}px; height: ${squareSize}px;`)

        smallDivs.addEventListener('mouseover', () => {
            smallDivs.style.backgroundColor = randomColor()
        })
    }


} duplicate()


function randomColor() {
    // rgb"";
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)

    return `rgb( ${r}, ${g} , ${b} )`
}

