let board = []
let boardsLocatoin
let effectedBoard = []

let trueGuess = []
let falseGuess = []
let tureIndex = []

let dimension = 3
let sequerNumber = 6
let currentLevel = 1

let attempt = 3
let showTime =250

let boardColor = "red"
let effectedColor= "gray"

let tureColor = effectedColor
let falseColor="black"





const ContainerLocation = document.getElementById('container')

function clickHandler() {
  const sequerId = this.id
  console.log(`index ${sequerId} is clicked`)
  compare(sequerId)

// if(compareArr(tureIndex,trueGuess))
console.log(tureIndex)
console.log(trueGuess)
if(compareArr(tureIndex,trueGuess)) {nextLevel()}
  

  
}

const initializeLevel = () => {

  resetState()
  initializeBorads()
  createSquares()
  editBoardColor(boardColor)
  gridLayout()
  randomEffectedBoard()
  showEffectedBoard()
}

const resetState = ()=>{
  trueGuess = []
  falseGuess = []
  tureIndex = []
  falseGuess = []
  board = []
  effectedBoard = []
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
    sequerLocation.style.backgroundColor = effectedColor // ture color

    // document.getElementById(0).style.backgroundColor = "blue"
  }
  
  setTimeout(hideSequer,showTime)
}



const compare = (sequerId)=>  {

allGuess = trueGuess.concat(falseGuess) // i seacrch how i can merge two array

if ( allGuess.some((guess) => {
  return guess === sequerId})){

  return

  }


//  if (trueGuess.someeffectedBorad[sequerId])  // condistion check it is ture or false guess

if (effectedBoard[sequerId] === true)

    {
    trueGuess.push(sequerId)
    document.getElementById(`${sequerId}`).style.backgroundColor = tureColor

    console.log(`index ${sequerId} is ture`)

    } 

else 
  {
    
    falseGuess.push(sequerId)
    document.getElementById(`${sequerId}`).style.backgroundColor = falseColor

    console.log(`index ${sequerId} is false`)
}}



const getTrueIndexes = (arr)=> {
  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) newArray.push(`${i}`)
  }
   tureIndex = newArray
  return newArray
}

const nextLevel = () => {
  
  removeSquare () 
  
  currentLevel ++
  sequerNumber += currentLevel
  dimension ++

  initializeLevel()
  
  

}

const removeSquare = ( ) =>  {


  for (let i = 0; i < ( dimension * dimension ); i++) {
    let element = document.getElementById(i)
    element.remove() }

  

   

  


}

const compareArr = (arr1,arr2) => {

  

  for (let i=0;i<arr1.length;i++) {

      let is_Equal = false

    for(let j=0; j< arr2.length ;j++) {


    
      if(arr1[i] === arr2[j]) {
        is_Equal = true
        break }
}
      

     if (!is_Equal) {
        return false
     }

        

     
      
        }
    
        
    return true


  

  

}

const hideSequer = () => {

  
  let tureIndex = getTrueIndexes(effectedBoard)
  console.log('tureIndex')

  for (let i = 0; i < tureIndex.length; i++) {
    let sequerLocation = document.getElementById(tureIndex[i])
    sequerLocation.style.backgroundColor = boardColor // same to the backround
  }




}


const editBoardColor = (color) => {

   boardsLocatoin= document.querySelectorAll('.Box')
  
  for (let i=0;i<boardsLocatoin.length;i++){
  boardsLocatoin[i].style.backgroundColor=color

}




}





initializeLevel()



