const arr = [4, 5, 1, 2, 7, 8, 5, 2, 8]
const arr5 = ["alma", "armud","heyva"]


// my filter
const customFilter = myFilter(arr, (value) => {
    return value > 2;
})

// my Find
const customFind = myFind(arr, (value) => {
    return value > 2;
});

// my Every
const customEvery = myEvery(arr, (value) => {
    return value > 2;
});

// my Some
const customSome = mySome(arr, (value) => {
    return value > 2;
})

// my Reduce
const customReduce = myReduce(arr, (total, value) => {
    return total + value;
}, 10);

console.log(customFilter);
console.log(customFind);
console.log(customEvery);
console.log(customSome);
console.log(customReduce);

// my filter
function myFilter(arr, func) {
    const customArr = [];
    for (let i = 0; i < arr.length; i++) {
        const isExist = func(arr[i], i, arr);
        if (isExist) myPush(customArr, arr[i])
    }
    return customArr;
}

// my Find
function myFind(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        const result = func(arr[i], i, arr);
        if (result) return arr[i];
    }
    return undefined;
}

// my Every
function myEvery(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        const result = func(arr[i], i, arr);
        if (result) continue;
        else return false;
    }
    return true;
}

// my Some
function mySome(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        const result = func(arr[i], i, arr);
        if (result) return true;
    }
    return false;
}

//my Reduce
function myReduce(arr, func, totalValue) {
    let result = null;
    for (let i = 0; i < arr.length; i++) {
        result += func(total = 0, arr[i], i, arr)
    }
    return totalValue + result;
}

//my push
function myPush(arr, item) {
    arr[arr.length] = item;
}
