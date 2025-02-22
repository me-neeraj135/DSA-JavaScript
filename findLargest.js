function findLargest(arr){
  let max=arr[0]
  
  for (let i = 1; i<arr.length; i++){
    console.log(arr[i],max)
    if(arr[i]>max){
      max=arr[i]
    }
    
  }
  return max
}

console.log(findLargest([10, 25, 99, 3, 74]));
