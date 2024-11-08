//Dutch National Flag Algorithm by Edsger Dijkstra
function sortArray(arr) {
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else { // arr[mid] === 2
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}

// Example usage:
const arr = [2, 0, 2, 1, 1, 0];
console.log(sortArray(arr)); // Output: [0, 0, 1, 1, 2, 2]
