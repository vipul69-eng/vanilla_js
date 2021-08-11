function SingleNum(array=[0,1,0,1,0,1,99]){
    let s =0
    array.map(r=>{
        array.map(k=>{
            if(k==r){
                s++
            }
        })
        if(s==1){
            console.log(r)
        }
        s=0
    })
}
SingleNum()