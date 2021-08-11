function PlusOne(array){
    let s='',newNum=null,ans=[]
    array.forEach(
        r=>{
            s=s+r.toString()
        }
    )
        newNum=(parseInt(s)+1).toString()
        for(let a =0;a<newNum.length;a++){
            ans=ans.concat(parseInt(newNum[a]))
        }
        console.log(ans)
}
PlusOne([10])