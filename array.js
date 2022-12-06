// Arrays of strings:
//let names = ["Irfan" , "Ajmal" , "mushaf" , "Faizan"];
//  console.log ( names[0]);
//  console.log ( names[1]);
//  console.log(names[2]);
//  console.log( names[3]);
// console.log(names);

//FIRST 10 NATURAL NUMBERS:
// let a=1,b=2,c=3,d=4,e=5,f=6,g=7,h=8,i=9,j=10;
// let arr = [1,2,3,4,5,6,7,8,9,10];
 //         0 1 2 3 4 5 6 7 8  9         
 //Arrays are representrd by Square Brackets
 //Index always start from 0
 //There is no Maximum length by Default for Arrays
 // console.log(a, b, c, d, e, f, g, h, i, j);
//output:1 2 3 4 5 6 7 8 9 10

 //let arr2 = [4, 5, 7, 9, 3, 5, 4, 5, 7, 0];
 // console.log(arr[5]);
//  console.log(arr)
//  console.log(arr2);

//Array of strings:
// let names = ["adnan", "Ateeq", "Fawaz","Ahmed"]
// console.log(names);//output ['adnan', 'Ateeq', 'Fawaz', 'Ahmed']

// let mixed =[1, 2, 3, "Adnan", "CFI", 5];
// console.log(mixed)//output[1, 2, 3, 'Adnan', 'CFI', 5]
//console.log(mixed[0], mixed[2], mixed[4]);//output 1 3 CFI
//console.log(mixed.length)//output 6
// console.log(mixed[10]);//undefined

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a[0]);//output 1
// console.log(a[1]);//output 2
// console.log(a[2]);//output 3
// console.log(a[3]);//output 4
// console.log(a[4]);//output 5
// console.log(a[5]);//output 6
// console.log(a[6]);//output 7
// console.log(a[7]);//output 8
// console.log(a[8]);//output 9
// console.log(a[9]);//output 10

// for (var i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
/*output 1
          2
          3
          4
          5
          6
          7
          8
          9
          10
          */

// let arr2 = [0, 100, 200, 300, 400, 500, undefined];
// let i = 0;
// let length = 0;
// while (arr2[i] != undefined){
//     console.log(arr2[i]);
//     i++;
//     length++;
//}
/*output 0
          100
          200
          300
          400
          500
          */
//console.log(NaN);output will be undefined and its in infinite loop
//i m experimenting:
// let arr2 = [0, 100, 200, 300, 400, 500, NaN];
// let i = 0;
// let length = 0;
// while (arr2[i] != NaN){
    // console.log(arr2[i]);
    // i++;
    // length++;
//}//output will come undefined and its in infinite loop

// let b =[1, 2, 3];
//  console.log(b);//output [ 1, 2, 3 ]
//  b[b.length] = 4;
//  console.log(b);//output [ 1, 2, 3, 4 ]
//  b.push("Quayyum");
//  console.log(b);//output [ 1, 2, 3, 4, 'Quayyum' ]
// //PUSH:It is used for adding elements to the end of an Array

// //POP:It is used to remove the last elements from the array
// b.pop();
// // console.log(b.pop());
// console.log(b)

// //SHIFT:It is used to removes the first element from the array
// b.shift();
// console.log(b);

// //UNSHIFT:It is used for adding element to the first index
// b.unshift(100,200,300,520);
// console.log(b);

//EMPTY ITEM:-
// let arr = [];
// let arr2 = new Array(10);
// arr[0] = 1;
// arr[2] = 5;
// arr[5] = 100;
// // console.log(arr);//output [ 1, <1 empty item>, 5, <2 empty items>, 100 ]
// // console.log(arr[1]);//output [ 1, <1 empty item>, 5, <2 empty items>, 100 ]
//                     //undefined 
                    
// // console.log(arr2);//output [ <10 empty items> ]
// console.log(arr2.length);//output 10----how? so,count 1+1empty+5+2empty+100

let arr3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
           -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
arr3[4] = "Hello";
console.log(arr3);
console.log(arr3[arr3.length - 1]);


console.log(arr3.at(-(arr3.length)));
console.log(arr3[-1]);