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

let arr1 = ['1','2','4','3']

let arr2 = ['1','2','3','4']

console.log(compareArr(arr1,arr2))

