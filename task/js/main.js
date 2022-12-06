// Task1
// let arr1=[2,3,4,5,6,7,8,9,10,11]
// function Myfunction(number){
//     let arr2 = [];
//     let arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if(arr1[i] % 2 ==0){
//             arr2.push(arr1[i])
//         }else{
//             arr3.push(arr1[i])
//         }
//     }
//     console.log(arr2);
//     console.log(arr3);
// }
// Myfunction();

// Task2
// function palindrome(str){
//     let split = str.split("")
//     let reverse =split.reverse();
//     for (let i = 0; i < str.length; i++) {
//         if(reverse[i]==str[i]){
//             console.log(reverse); 

//         }else{
//             alert("it is not palindrome")
//         }
        
          
//     }
// }
// palindrome("utu");

// Task3

function Myfunction(str){
    let arr =["salam","sagol", "yaxsi ol","oldu"]   
    for (let i = 0; i < arr.length; i++) {
        
        if (str==arr[i]) {
            console.log(str)
            
        }else{
            alert("bele bir sey movcud deyil")
        }
    }
}
Myfunction("sagol")