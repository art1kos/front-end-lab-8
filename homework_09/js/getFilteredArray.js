var arr = [2, 3, 4, 5];

function forEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function predicate(num) {
    return num > 3
}

function getFilteredArray(arr, func) {
    var newarr = [];
    forEach(arr, function(num) {
        if (func(num) == true) {
            newarr.push(num);
        }
    });
    console.log(newarr);
    return newarr;
}
getFilteredArray(arr, predicate);