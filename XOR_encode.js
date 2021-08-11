function XOR_Encode(arrray=[4,2,0,7,4]){
    let s=[]
    for(let i=0;i<arrray.length-1;i++){
        s=s.concat(arrray[i] | arrray[i+1])
        
    }
    return console.log(s)
}

XOR_Encode()