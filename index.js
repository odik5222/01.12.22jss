
/* 2 */
let arr = [4, 78, 42, 65, 32, 1, 2, 3, 5,];
console.log('До ' + arr);

for(let j = 0; j < arr.length; j++) {
    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let sorted = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = sorted
        }

    }

}

console.log('После ' + arr);


/* 3 */
let name = ['Alex', 'George', 'Michail']
let count = []
for (let item of name) {
    count.push(item.length)
    for (let itemTwo of count) {
        Math.max(count)
    }
  name.filter(  item =>{
    if(item.length === Math.max(...count)) {
        console.log(item)
    }
  })
}

/* 4 */
var step;
for (step = 0; step < 5; step++) {
    console.log('Идём 1 шаг на восток');
}