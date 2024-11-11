//An element is considered to be peak if its value is greater 
//than or equal to the values of its adjacent elements (if they exist).

function findPeakElement(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        const left = i > 0 ? arr[i - 1] : -Infinity; // Adjacent left value
        const right = i < n - 1 ? arr[i + 1] : -Infinity; // Adjacent right value

        if (arr[i] >= left && arr[i] >= right) {
            return i; // Return the index of the peak
        }
    }

    return -1; // Return -1 if no peak (edge case)
}

// Validator to check the correctness of the returned peak index
function validatePeakIndex(arr, peakIndex) {
    const left = peakIndex > 0 ? arr[peakIndex - 1] : -Infinity;
    const right = peakIndex < arr.length - 1 ? arr[peakIndex + 1] : -Infinity;

    return arr[peakIndex] >= left && arr[peakIndex] >= right;
}

const arr = [1, 2, 3, 1];
const peakIndex = findPeakElement(arr);
console.log(peakIndex); // Output: 2
console.log(validatePeakIndex(arr, peakIndex)); // Output: true
