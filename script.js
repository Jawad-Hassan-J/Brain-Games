let board = []
let effectedBoard = []

let trueGuess = []
let falseGuess = []

let dimension = 3
let sequerNumber = 3

const ContainerLocation = document.getElementById('container')

const initializeLevel = () => {
  initializeBorads()
  createSquares()
  gridLayout()
  randomEffectedBoard()
  showEffectedBoard()
}


const initializeBorads = ()=> {
  
  for (let i = 0; i < dimension * dimension; i++) {
    board[i] = ''
    effectedBoard[i] = ''
  }
}


const createSquares= ()=> {


  for (let i = 0; i < dimension * dimension; i++) {
    let newDiv = document.createElement('div')
    newDiv.addEventListener('click', clickHandler)
    newDiv.classList.add('Box')
    newDiv.id = i

    ContainerLocation.appendChild(newDiv)
  }
}


const gridLayout = ()=> {

  ContainerLocation.style.display = `grid`
  ContainerLocation.style.gridTemplateColumns = `repeat(${dimension}, auto)`
}