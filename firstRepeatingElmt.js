
function first_repeating_elmt(arr) {

    let set=new Set();

    for (let i = 0; i < arr.length - 1; i++) {

        if (set.has(arr[i])){

            return arr[i]
        }
        else {
            set.add(arr[i])
        }

    }

    return -1;
}

let arr =  [1, 5, 3, 4, 3, 5, 6];

console.log(first_repeating_elmt(arr))