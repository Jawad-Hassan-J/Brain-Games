let board = []
let effectedBoard = []

let trueGuess = []
let falseGuess = []

let dimension = 3
let sequerNumber = 3
let currentLevel = 1

let attempt = 3

const ContainerLocation = document.getElementById('container')

const clickHandler = (event) => {
  const sequerId = event.target.id
  console.log(`index ${sequerId} is clicked`)
  compare(sequerId)
}

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
    newDiv.addEventListener('click',clickHandler)
    newDiv.classList.add('Box')
    newDiv.id = i

    ContainerLocation.appendChild(newDiv)
  }
}


const gridLayout = ()=> {

   
  ContainerLocation.style.display = `grid`
  ContainerLocation.style.gridTemplateColumns = `repeat(${dimension}, auto)`
}


const randomEffectedBoard = ()=> {
  for (let i = 0, j = 0; i < sequerNumber; j++) {
    const randomInt = Math.floor(Math.random() * (dimension * dimension))

    if (effectedBoard[randomInt] === '') {
      effectedBoard[randomInt] = true
      i++
    }
  }
}


const showEffectedBoard = ()=> {
 

  let tureIndex = getTrueIndexes(effectedBoard)
  console.log('tureIndex')

  for (let i = 0; i < tureIndex.length; i++) {
    let sequerLocation = document.getElementById(tureIndex[i])
    sequerLocation.style.backgroundColor = 'blue'

    // document.getElementById(0).style.backgroundColor = "blue"
  }
}



const compare = (sequerId)=>  {

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

const getTrueIndexes = (arr)=> {
  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) newArray.push(i)
  }

  return newArray
}

const nextLevel = () => {
  currentLevel ++
  sequerNumber += currentLevel
  dimension ++

   removeSquare ()
  

}

const removeSquare = ( ) =>  {

   for (let i = 0; i < ( dimension * dimension ); i++) {
    let element = document.getElementById(i)
    element.remove() }

   

  


}





initializeLevel()
// nextLevel()
removeSquare()
initializeLevel()

  //  let element = document.getElementById(5)
  //   element.remove() 

  //   element=document.getElementById(2)
  //   element.remove() 


