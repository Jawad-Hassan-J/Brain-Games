let board = []
let effectedBoard = []

let trueGuess = []
let falseGuess = []

let dimension = 3
let sequerNumber = 3

const ContainerLocation = document.getElementById('container')

function initializeLevel() {
  initializeBorads()
  createSquares()
  gridLayout()
  randomEffectedBoard()
  showEffectedBoard()
}