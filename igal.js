const arr1 = ['shay', 'guy', 'liron', 'grisha', 'sumbat', 'tom'];


function map(arr, fn) {
    const arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        const fr = fn(arr[i]);
        arr2.push(fr);
    }

    return arr2;

}


const addHi = (str) => `hi ${str}`;


const length = (str) => {
    const i = 1;
    return str.length + i;
}




// console.log(toUpper(['koko', 'jumbo'], addHi));
// console.log(toUpper(['koko', 'jumbo'], function igal(str) {
//     return str + 'popopop'
// }));
// console.log(toUpper(['koko', 'jumbo'], (str) => {
//     return `bye ${str}`
// }));


// console.log(
//     arr1.map(x => x.toUpperCase())
// )

// console.log(
//     arr1.filter(x => x.endsWith('t'))
// )

// console.log(
//     arr1.find(x => x.length === 3)
// )

// console.log(
//     arr1.map(x => x + 9)
// )

// console.log(
//     arr1.find(x => x.length === 3)
// )

// console.log(
//     arr1.some(x => x.includes('y'))
// )

// console.log(
//     arr1.every(x => x.endsWith('t'))
// )


// console.log(
//     map(['pop', 'rock', 'rap'], genre => genre + 90)
// );



// console.log(arr1);