function ThirdMaxima(array){
    let max=0,s_max=0,arr1=[],arr2=[],resArr=[],res=0
    for(let a=0;a<array.length;a++){
        if(array[a]>max){
            max=array[a]
        }
    }
    array.forEach(r=>{
        if(r!==max){
            arr1=arr1.concat(r)
        }
    })
    for(let b=0;b<arr1.length;b++){
        if(arr1[b]>s_max){
            s_max=arr1[b]
        }
    }
    arr1.forEach(k=>{
        if(k!==s_max){
            resArr=resArr.concat(k)
        }
    })
    resArr.forEach(m=>{
        if(m>res){
            res=m
        }
    })
    return console.log(res)
}
ThirdMaxima([1,10,6,9,11,100])