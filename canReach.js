function CanReachEnd(array){

	let index=0,canReach=false
	
	array.map((r)=>{
		index=index+array[index]
		if(index===(array.length-1)){
			canReach=true
		}
	})
	return console.log(canReach)
	}
	

CanReachEnd([3,2,1,0,4])
/**
 * 2,3,4
 * */