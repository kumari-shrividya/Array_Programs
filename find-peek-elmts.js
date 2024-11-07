//An element is considered to be peak if its value is greater 
//than or equal to the values of its adjacent elements (if they exist).

function findPeekElmts(arr) {

    let peek = [];

    for (let i = 0; i < arr.length - 1; i++) {

        if(arr[i] > arr[i+1]) {

            peek.push(i)
        }
    }
    return peek;
}

const arr =[1, 1, 1, 2, 1, 1, 1];
console.log(findPeekElmts(arr))
