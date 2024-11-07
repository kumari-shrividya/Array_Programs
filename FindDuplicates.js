
function findDup(arr){

	let dup = [];

	arr.filter((item,index)=>{

   		 if(arr.indexOf(item)!==index)
   		{
          dup.push(item)
    	}
	})
  
	console.log(dup)


}

let ar = [2, 3, 1, 2, 3]
findDup(ar)
