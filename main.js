// 1-masala

//  var mergeTwoLists = function(list1, list2) {
//     let new_array = [...list1,...list2]
//     let item = new_array.sort()
//     console.log(item);
// };
// mergeTwoLists(list1 = [1,2,4], list2 = [1,3,4])



// 2-masala

// let arr = [1,2,3,4,5,5,4,3]
// let new_arr = []
// let massiv = []
// for(let i = 0; i < arr.length; i++){
//     if(!new_arr.includes(arr[i])){
//         new_arr.push(arr[i])
//     }else{
//         massiv.push(arr[i])
//     }
// }
// console.log(massiv);



// // 3-masala
// var reverse = function(x) {
//     let item = x
//     let arr = Array.from(item.toString(), Number).reverse()
//     let result = arr.join("")
//     console.log(result);
// };
// reverse(456)


// 4-masala 

// function fn (array){
//     let index = parseInt(array.length / 2)
//     if(array.length % 2 == 0){
//         let a = (array[index] + (array[index] - 1)) / 2
//         return a
//     }else {
//         return array[index]
//     }
// }
// console.log(fn([1,2,3,4,5]));