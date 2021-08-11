function SearchRotatedArray(array,target){
    let s=[],index=Math.floor(Math.random()*array.length)
    for(let a =index;a<array.length;a++){
        s=s.concat(array[a])
    }
    for(let b=0;b<index;b++){
        s=s.concat(array[b])
    }
    console.log(s)
    console.log(s.indexOf(target))
}

SearchRotatedArray([1,2,3,4,5],1)