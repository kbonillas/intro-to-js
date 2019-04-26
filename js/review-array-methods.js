var array1 = ['pomegranate', 'kiwi', 'dragonfruit'];
console.log(array1);
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);

array1.unshift('pineapple');
console.log(array1);

array1.push('watermelon');
console.log(array1);

array1.splice(2,1,'cantelope');
console.log(array1);

array1.splice(1,1);
console.log(array1);

var array2 = array1.slice();
console.log(array2);