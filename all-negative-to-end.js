
function moveNegativeToEnd(arr){

    const positives = [];
    const negatives = [];

    for (const num of arr) {
        if(num < 0){
            negatives.push(num)
        }
        else{
            positives.push(num)
        }
    }
    return [...positives, ...negatives]
}

const arr = [1, -1, 3, 2, -7, -5, 11, 6 ];

console.log(moveNegativeToEnd(arr))