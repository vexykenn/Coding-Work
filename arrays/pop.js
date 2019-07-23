function RemoveLast(array){
    let last = array [array.length-1];
    array[array.length-1] = undefined
    array.length = array.length-1;
    return [last];
};

let arr = [1, 2, 3, 4, 5];
let last = RemoveLast(arr);

console.log(last);
console.log(arr);