let data = []
let length = 10 // number of elements in array
let bubble_sorts = []
let selection_sorts = []
let insertion_sorts = []
let quick_sorts = []

function swap(arr, x, y) {
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
    return arr
}

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, low, high) {

    // pivot
    let pivot = arr[high];

    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {

        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {

            // Increment index of
            // smaller element
            i++;
            swap(arr, i, j);
            let temp = [...arr]
            quick_sorts.push(temp)
        }
    }
    swap(arr, i + 1, high);
    let temp1 = [...arr]
    quick_sorts.push(temp1)
    return (i + 1);

}


function bubble_sort(arr) {
    bubble_sorts = [[...arr]]
    let l = arr.length
    let i, j

    for (i = 0; i < l - 1; i++) {
        for (j = 0; j < l - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr = swap(arr, j, j + 1)
                let temp = [...arr]
                bubble_sorts.push(temp)

            }
        }
    }
    //console.log('bubble', bubble_sorts)

}

function selection_sort(arr) {
    selection_sorts = [[...arr]]
    let n = arr.length
    let i, j, min_idx

    // One by one move boundary of unsorted subarray
    for (i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        // Swap the found minimum element with the first element
        swap(arr, min_idx, i);
        let temp = [...arr]
        selection_sorts.push(temp)
    }
    //console.log('select', selection_sorts)
}

function insertion_sort(arr) {
    insertion_sorts = [[...arr]]
    let n = arr.length
    let i, key, j;

    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            let temp = [...arr]
            insertion_sorts.push(temp)
        }
        arr[j + 1] = key;
    }
}

function quick_sort(arr, low, high) {

    if (low < high) {

        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(arr, low, high);

        // Separately sort elements before
        // partition and after partition
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
    //console.log(quick_sorts)
}

function generate_array(n) {
    var arr = []
    for (i = 0; i < n; i++) {
        //arr.push(Math.floor(Math.random() * 10))
        arr.push((Math.random() * 10))
    }
    return arr
}


function display_results() {
    let arr = generate_array(length)
    n = arr.length
    let temp1 = [...arr]
    let temp2 = [...arr]
    let temp3 = [...arr]
    quick_sorts = [[...arr]]
    //console.log(arr, '1', temp1)
    //data1.innerHTML = arr
    let round = [...arr]
    round = round_array(round)
    data1.innerHTML = round
    bubble_sort(arr)
    selection_sort(temp1)
    insertion_sort(temp2)
    quick_sort(temp3, 0, n - 1)
    round = round_array(temp1)
    data2.innerHTML = round
    data = arr
}

function round_array(arr) {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        temp.push(' ' + Math.round(arr[i] * 10) / 10)
    }
    return temp
}


function make_squares(arr) {
    //console.log(arr)
    //console.log(arr, arr.length)
    squares = document.getElementById('squares')
    squares.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        div1 = document.createElement('div')
        div1.className = 'square'
        //console.log(i, arr[i])
        //div1.innerHTML = arr[i]
        div1.style.width = String(25 + arr[i] * 10) + 'px'
        //console.log(div1)
        squares.appendChild(div1)
    }

}

function clear_squares() {
    squares = document.getElementById('squares')
    squares.innerHTML = ''
}


async function loop_steps(arr) {
    //console.log('bub', bubble_sorts)
    //console.log(arr)
    //console.log(arr[0], arr[0].length)
    for (let i = 0; i < arr.length; i++) {
        setTimeout(function timer() {
            //test_loop(arr[i])
            make_squares(arr[i])

        }, i * 200);
    }
}

