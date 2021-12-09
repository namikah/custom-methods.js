const arr = [4, 5, 1, 2, 7, 8, 5, 2, 8]
const arr2 = ["alma","armud"]

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
});

console.log("custom filter: " + customFilter);
console.log("custom find: " + customFind);
console.log("custom every: " + customEvery);
console.log("custom some: " + customSome);
console.log("custom reduce: " + customReduce);

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

//my reduce
function myReduce(arr, func, total) {
    let result = total;
    i= 0;
    if(total==undefined) {result = arr[i]; i= 1}

    for (; i < arr.length; i++) {

    result = func(result, arr[i], i, arr);
    }
    return result;
}

//my push
function myPush(arr, item) {
    arr[arr.length] = item;
}