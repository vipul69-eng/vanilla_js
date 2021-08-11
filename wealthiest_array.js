function WealthyMan(array){
    let sum=0,max=0
   for(let i=0;i<array.length;i++){
       for(let b=0;b<array[i].length;b++){
           sum=sum+array[i][b]
       }
       if(sum>max){
           max=sum
       }
       sum=0
   }
   return max
}
let wealthy=WealthyMan([[2,8,7],[100,1200,19],[1,9,5]])
console.log(wealthy)