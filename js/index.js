const arr = [4, 5, 1, 2, 7, 8, 5, 2, 8]
const arr5 = ["alma", "armud", "heyva"]


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














































































// function myreduceMain(funcMain,total){
//     funcMain = myReduce(arr, func, totalvalue);
//         func = func(total = arr[0], arr[i], i, arr);

//         let result = null;
//         for (let i = 0; i < arr.length; i++) {
//             result += func(total = 0, arr[i], i, arr)
//         }
//         return totalValue + result;
//     }







//     const reduce = (reducer, initialValue, array) => {
//       let value = initialValue;

//       for(let i = 0; i < array.length; i++) {
//         let currentValue = array[i]
//         value = reducer(value, currentValue)
//       }

//       return value;
//     }

//     const sumOfNumbersCustom = reduce((initialValue, current) => {return initialValue + current}, 100, arr5)

//     console.log("Custom reduce function, " + sumOfNumbersCustom);