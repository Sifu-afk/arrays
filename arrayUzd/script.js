const arr = Array.from({length: 30}, () => Math.floor(Math.random() * 21) + 5)
//console.log(arr)

const number = arr.filter((element) => element > 10)
//console.log(number.length)

function largestElement(arr) {
    return arr.reduce((largest, current) =>
        (current > largest ? current : largest), arr[0]);
}
const index = arr.indexOf(largestElement(arr));
//console.log(largestElement(arr), index);

const lyginiai = arr.filter((x, index) => index % 2 === 0 ).reduce((prev, curr) => prev + curr)
//console.log(lyginiai)

const masyvas = arr.map((value, index) => value - index)
//console.log(masyvas)


const newArr = Array.from({length: 10}, () => Math.floor(Math.random() * 21) + 5)
const array = masyvas.concat(newArr)
//console.log(array)


const evenArr = array.filter((x) => x % 2 === 0);
const oddArr = array.filter((x) => x % 2 !== 0);
console.log(evenArr)
console.log(oddArr)


const evenToNull = evenArr.map((x, i) => {
    if (i % 2 === 0 && x > 15){
        return 0
    }
    return x
})

console.log(evenToNull)

const indexas = array((x) => x < 10)


