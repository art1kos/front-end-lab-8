var myNumbers = [100,50,25,1,-2,10];

function getClosestToZero(x) {
    return x.sort(function (a, b) {
        return Math.abs(a) > Math.abs(b) ? 1 : -1;
    })[0];
}
