// This for test functionsfunction initializeLevel() {

initializeBorads()
createSquares()
gridLayout()
randomEffectedBoard()
//showEffectedBoard()

function clickHandler() {
  sequerId = this.id
  console.log(`index ${sequerId} is clicked`)
  compare(sequerId)
}

function initializeBorads() {
  // create "" array of size n*n

  for (let i = 0; i < dimension * dimension; i++) {
    board[i] = ''
    effectedBoard[i] = ''
  }
}

function randomEffectedBoard() {
  for (let i = 0, j = 0; i < sequerNumber; j++) {
    const randomInt = Math.floor(Math.random() * 11)

    if (effectedBoard[randomInt] === '') {
      effectedBoard[randomInt] = true
      i++
    }
  }
}

function createSquares() {
  // create number of sequer based on dimeision
  // also add class and id

  for (let i = 0; i < dimension * dimension; i++) {
    let newDiv = document.createElement('div')
    newDiv.addEventListener('click', clickHandler)
    newDiv.classList.add('Box')
    newDiv.id = i

    ContainerLocation.appendChild(newDiv)
  }
}

function gridLayout() {
  // dicide grid Layout based on dimension

  ContainerLocation.style.display = `grid`
  ContainerLocation.style.gridTemplateColumns = `repeat(${dimension}, auto)`
}

function compare(sequerId) {
  allGuess = trueGuess.concat(falseGuess) // i seacrch how i can merge two array
  if (
    allGuess.some((guess) => {
      return guess === sequerId
    })
  )
    return

  //  if (trueGuess.someeffectedBorad[sequerId])  // condistion check it is ture or false guess

  if (effectedBoard[sequerId] === true) {
    console.log(sequerId + 'ture')
    trueGuess.push(sequerId)
  } else console.log(sequerId + 'false')
  falseGuess.push(sequerId)
}

function showEffectedBoard() {
  console.log('5555')

  let tureIndex = getTrueIndexes(effectedBoard)
  console.log('tureIndex')

  for (let i = 0; i < tureIndex.length; i++) {
    let sequerLocation = document.getElementById(tureIndex[i])
    sequerLocation.style.backgroundColor = 'blue'

    // document.getElementById(0).style.backgroundColor = "blue"
  }
}

function getTrueIndexes(arr) {
  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) newArray.push(i)
  }

  return newArray
}

initializeLevel()
showEffectedBoard()
