
function findDup(arr){

	let Dup=[]

	arr.filter((item,index)=>{

   		 if(arr.indexOf(item)!==index)
   		 {
        Dup.push(item)
    	}
	})
  
	console.log(Dup)


}

let ar = [2, 3, 1, 2, 3]
findDup(ar)
