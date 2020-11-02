//  function sqr(n){
//      return n*n
//  }
 
//  console.log(sqr(2))

//  var n= 10

//  function change(){
//      n=100
//  }

//  console.log(n)

//  var point = {
//      x:45,
//      y:30
//  }

//  function printPoint(point){
//      point.x = 100
//      point.y=200

//      console.log(point )
//  }
//  printPoint(point)

// var sum = add
// console.log(sum(4,5))
// console.log(typeof sum)

// var arr= []
// arr.push(add)
// console.log(arr)
// console.log(arr[0](5,3))

// var obj={
//     sum:add
// }
// console.log(obj)
// console.log(obj.sum(7,9))

// setTimeout(function(){
//     console.log('I Have Created')
// },5000)


// function add(a,b){
//     return a+b
// }

// function manipulate(a,b,func){
//     var c = a+b
//     var d = a-b
//     function multiply(){
//         var m= func(a,b)
//         return c*d*m

//     }
//     return multiply()
// }
// var multiply = manipulate(3,4,add)
// console.log(multiply)

// var b=10
// function a(){
// var x=5 
// return function (){
//     console.log(x)
// }
// }
// var abc= a()
// console.dir(abc)

var arr =[1,2,3,4,5]

// var sum=0
// arr.forEach(function(value,index,arr){
//     // console.log(value,index,arr)
//     sum=sum+value
// })

// console.log(sum) 

// var sqrArr= arr.map(function(value,index,arr){
//     // return Math.random()*100
//     return value * value
   

// })

// console.log(arr)
// console.log(sqrArr)

// var filtering= arr.filter(function(value,index,arr){
//         return value%3==0
//     })

//     console.log(filtering)

var reducem= arr.reduce(function(prev,curr,index,arr){
    return Math.max(prev,curr)
})

console.log(reducem)