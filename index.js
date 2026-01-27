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

Q 11 Remove duplicate values from an array.
var arr = [2,8,5,3,2] 
var founded = false ; 
for(var i=0 ; i<arr.length ; i++){
    for(var j =i+1 ; j<arr.length ; j++){
       if(arr[i]==arr[j]){
        founded = true ;
        break ; 
       }
    }
    if(founded)break ;   
}
 if(founded){
        console.log("Finded");    
    }else{
        console.log("NO Finded");
        
}

Q 12 Sort an array of numbers in ascending order (without sort()).
var arr = [2,8,5,3,2] ;
for(var i=0 ; i<arr.length ; i++){
    for(var j=0 ; j<arr.length-1 ; j++){
        if(arr[j]>arr[j+1]){
            var temp = arr[j] ; 
            arr[j] = arr[j+1];
            arr[j+1] = temp;  
        }
    }
}
console.log(arr);

Q 13 . Find the second largest number in an array.

var arr = [9,2,3,4] 
var lg = -Infinity;
var sl = -Infinity;
for(var i=0 ; i<arr.length ; i++){
    if(arr[i]>lg){
        sl=lg;
        lg=arr[i]; 
    }else if(arr[i] > sl && arr[i] !== lg) {
       sl=arr[i]
    }
}
console.log(sl);

Q 14 Move all zeroes to the end of the array. 

const arr = [0, 1, 0, 3, 12];
let index = 0 ;
for(let i = 0 ; i<arr.length ; i++){
    if(arr[i]!==0){
        arr[index]=arr[i];
        index++
    }
}
for(let i=index ; i<arr.length ; i++){
    arr[i]=0;
}
console.log(arr);

Q 15 Find the missing number from an array of 1–10. 
const arr = [1,2,3,5,6,7,8,9,10];
var sum = 0 ; 
for(var i=0 ; i<arr.length ; i++){
  sum = sum + arr[i];
}
let missing = 55 - sum ; 
console.log(missing);

Q 16 Check if two arrays are equal. 

const arr1 = [2,3,5,7,8];
const arr2 = [2,3,5,7,8];
var finded = true ; 

my logic

for(var i=0 ; i<arr1.length ; i++){    
}
for(var j=0 ; j<arr2.length ; j++){
}
if(arr1[i]!==arr2[j]){
        finded = false ; 
}
console.log(finded);

if(arr1.length !== arr2.length){
    finded = false ; 
}else{
    for(var i=0 ; i<arr1.length ; i++){
    if(arr1[i] !== arr2[i]){
        finded = false ; 
        break ; 
    }
}
}
console.log(finded);

