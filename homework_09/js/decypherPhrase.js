function forEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function getTransformedArray(arr, func) {
    var newarr = [];
    forEach(arr, function(num) {
        newarr.push(func(num))
    });
    return newarr;
}
var charactersMap = {
    a: 'o',
    c: 'd',
    t: 'g'
}
var charactersMap1 = {
    o: 'a',
    d: 'c',
    g: 't'
}

function cypherPhrase(Map, string) {
    var cypherstring = getTransformedArray(string.split(''), function(char) {
        return Map[char] || char;
    }).join('');
    return cypherstring;
}

function decypherPhrase(Map, string) {
    return cypherPhrase(Map, string);
}
var str = cypherPhrase(charactersMap, "Kitty cat");
console.log(str);
str = decypherPhrase(charactersMap1, str);
console.log(str);