function CountSegments(str=''){
    let segments =0
    for(let a=0;a<str.length;a++){
        if(str[a]===' '){
            segments++
        }
    }
    return segments
}
let segment = CountSegments('How many segments?')
console.log(segment)