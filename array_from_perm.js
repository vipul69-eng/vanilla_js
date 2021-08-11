function ArrayPerm(array){
    let ans=[]
    for(let i=0;i<array.length;i++){
        ans=ans.concat(array[array[i]])
    }
    return ans
}

let answer = ArrayPerm([0,2,1,5,3,4])
console.log(answer)