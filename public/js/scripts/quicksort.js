export default function quickSort(arr, desc) {
    if (arr.length < 1) {
        return arr
    }

    const pivot = arr[Math.floor(arr.length / 2)]

    const left = []
    const mid = []
    const right = []

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].votes < pivot.votes) {
            left.push(arr[i])
        } else if(arr[i].votes === pivot.votes) {
            mid.push(arr[i])
        } else if(arr[i].votes > pivot.votes) {
            right.push(arr[i])
        }
    }

    if(!desc) {
        return [...quickSort(left), ...mid, ...quickSort(right)]
    } else {
        return [...quickSort(right, true), ...mid, ...quickSort(left, true)]
    }
}