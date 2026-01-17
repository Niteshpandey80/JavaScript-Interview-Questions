Q1 Create an array of 5 numbers and print the sum of all elements.
var arr = [1,2,4,6,7] ; 
var sum = 0 ; 
for(var i = 0 ; i<arr.length ; i++){
   sum = sum + arr[i] ; 
}
console.log(sum);

Q2 Find the largest and smallest number in an array.
var arr = [2,8,5,3,1] ; 
var large = arr[0] ; 
for(var i = 0 ; i<arr.length ; i++){
    if(large < arr[i] ){
        large = arr[i] ; 
    }
}
console.log(large);

Q3 Reverse an array without using reverse().
var arr = [2,8,5,3,1] ; 
var revesed = [] ; 
for(var i = arr.length-1; i>=0; i--){
  revesed.push(arr[i])
}
console.log(revesed);

Q4 Check if a value exists in an array.
var arr = [2,8,5,3,1] ;  
let key = 3 ; 
for(var i = 0 ; i<arr.length ; i++){
    if(key == arr[i]){
        return console.log("getting");    
    }
}

Q5 Count how many even and odd numbers are in an array.
var arr = [2,8,5,3,1] 
let odd = [] ; 
let even = [] ; 
for(var i=0 ; i<arr.length ; i++){
    if(arr[i]%2==0){
        odd.push(arr[i])
    }else{
        even.push(arr[i])
    }
}
console.log(odd);
console.log(even);

Q6 Convert an array of strings to uppercase.
const arr = ["hello", "world", "javascript"];
const result = [] ; 
for(var i = 0 ; i<arr.length ; i++){
   result.push(arr[i].toLocaleUpperCase())
}
console.log(result);

using Map

const arr = ["hello", "world", "javascript"];
const uppercase = arr.map(str=>str.toUpperCase());
console.log(uppercase);

Q7 Remove the last element from an array and print the updated array.
 var arr = [2,8,5,3,1] ;
 const updatearr = []
 for(var i= 0 ; i<arr.length-1; i++){
     updatearr.push(arr[i]);
 }
 console.log(updatearr);


Q8 Print all elements at even indexes.
const arr = [10, 20, 30, 40, 50, 60];
for(var i= 0 ; i<arr.length ; i+=2){
   console.log(arr[i]);
}
for(var i=0 ; i<arr.length ; i++){
    if(i%2==0){
        console.log(arr[i]);  
    }
}

Q9 Find the length of an array without using .length.
const arr = [10, 20, 30, 40, 50, 60];
var length = 0 ; 
for(var i = 0 ; i < arr.length ; i++){
  length++ 
}
console.log(length);

Q 10 Merge two arrays into one.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);
console.log(merged);

const arr1  = [1,2,3,4] ; 
const arr2 = [5,6,7,8] ; 
arr1.push(...arr2)
console.log(arr1);

