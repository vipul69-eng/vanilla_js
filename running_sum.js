function RunningSum(array=[1,2,3,4]){
    let s=[],sum=0
    for(let i=0;i<array.length;i++){
        for(let j=0;j<=i;j++){
            sum=sum+array[j]
        }
        s=s.concat(sum)
        sum=0
    }
    return s
}
let rs = RunningSum([3,1,2,10,1])
console.log(rs)