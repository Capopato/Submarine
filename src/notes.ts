// import fetch, { Headers } from "node-fetch";

// // // import fetch, { Headers } from "node-fetch";

// class Submarine{
//     private str?: string

//     fetchData = async () => {
//         const result = await fetch('https://dev.api.mintycloud.nl/api/v1/challenges/input', {
//             method: 'GET',
//             headers: {Authorization: 
//                 'Basic 0153c98143c78d3cd57c1ecdc3514cef64a5178974496c57465eb46df9f93115c46c1d0fcd64a46683aac30190b28977b9dca9d36d203213621c65dd7018a0c7'}
//         });
//         const text = await result.text();
//         this.str = text.toString();
//         // console.log(this.str)
//       }

//     //   workArray(){
//     //     // console.log('test')
//     //     console.log(this.str)
//     //     // console.log(this.fetchData())
//     // }

//     // constructor(){
//     //     console.log('sub created')
//     // }

//     // pushArray(data: string){
//     //     return this.arr.push(data)
//     // }

//     // toString(data: string){
//     //     return data.toString()
//     // }

//     // async fetchData(){
//     //     await fetch('https://dev.api.mintycloud.nl/api/v1/challenges/input', {
//     //         method: 'GET',
//     //         headers: {Authorization: 
//     //             'Basic 0153c98143c78d3cd57c1ecdc3514cef64a5178974496c57465eb46df9f93115c46c1d0fcd64a46683aac30190b28977b9dca9d36d203213621c65dd7018a0c7'}
//     //     })
//     //     .then(res => res.text())
//     //     .then(data => {
//     //         console.log(this)
//     //         this.str = data.toString()
//     //     })
//     //     .finally(() => console.log('test'))
//     //     .catch(error => console.log(error))
//     // }

//     getData = async () =>{
//         const result = await this.fetchData()
//         console.log(this.str)
//     }



//     // test() {
//     // fetch("url")
//     // // .then((data) => console.log("do something"));
//     // // console.log("Go")
//     // }

// }

// let sub = new Submarine()
// sub.fetchData()
// sub.getData()
// // sub.workArray()


// // const getData = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
// //   .then(response => response.json());

// // const showData = async () => {
// //   const result = await getData();
// //   console.log(result);
// // }


































// // class Submarine{
// //     HorizontalAndDepth(){
// //         fetch('https://dev.api.mintycloud.nl/api/v1/challenges/input', {
// //             method: 'get',
// //             headers: {
// //                 'Authorization': 'Basic '+'0153c98143c78d3cd57c1ecdc3514cef64a5178974496c57465eb46df9f93115c46c1d0fcd64a46683aac30190b28977b9dca9d36d203213621c65dd7018a0c7',
// //                 },
// //             }) 
// //             .then(res => {
// //                 return res.text();
// //             })
// //             .then(splitEnd => {
// //                 let horizontal: number = 0
// //                 let depth: number = 0
// //                 let actions = [] // make empty array for actions
// //                 let movements: any = [] // make empty array for movements
                
// //                 let arrSplit: string[] = splitEnd.split(' ')
// //                 // console.log(arrSplit)
// //                 for (let x of arrSplit){
// //                     actions.push(x.match(/[a-z]+/gi))
// //                     movements.push((x.match(/\d+/g))) // add to empty array
// //                 }
// //                 // console.log(actions)
// //                 // console.log(movements)
// //                 for (let index = 0; index < actions.length; index++){
// //                     if (String(actions[index]) == 'forward'){
// //                         horizontal += Number(movements[index+1])
// //                     }
// //                     else if(String(actions[index]) == 'up'){
// //                         depth -= Number(movements[index+1])
// //                     }
// //                     else if(String(actions[index]) == 'down'){
// //                         depth += Number(movements[index+1])
// //                     }
// //                 }
// //                 // console.log(depth)
// //                 // console.log(horizontal * depth)

// //                 const answer: number = horizontal * depth
// //                 console.log(answer)
// //                 return answer
// //             })
// //             .catch(err => {
// //                 console.error(err);
// //         });
// //     }
// // }

// // let sub = new Submarine()
// // sub.HorizontalAndDepth()
// // // console.log(sub.HorizontalAndDepth())

// function fetchData(){
//     fetch('https://dev.api.mintycloud.nl/api/v1/challenges/input', {
//         method: 'GET',
//         headers: {Authorization: 
//             'Basic 0153c98143c78d3cd57c1ecdc3514cef64a5178974496c57465eb46df9f93115c46c1d0fcd64a46683aac30190b28977b9dca9d36d203213621c65dd7018a0c7'}
//     })
//     .then(res => res.text())
//     // .then(data => {
//     //     this.str = data.toString()
//     //     // this.str = this.toString(data)
//     //     console.log(this.str)
//     //     return this.str
//     // })
//     .catch(error => console.log(error))
// }


// const fetchData = () = fetch('https://dev.api.mintycloud.nl/api/v1/challenges/input')
//     .then(res => res.text())

// const showData = async () => {
//     const result = await fetchData();
//     console.log(result);
//     }

// showData()

const getData = () => fetch('https://dev.api.mintycloud.nl/api/v1/challenges/input',{
    method: 'GET',
    headers: {Authorization: 
        'Basic 0153c98143c78d3cd57c1ecdc3514cef64a5178974496c57465eb46df9f93115c46c1d0fcd64a46683aac30190b28977b9dca9d36d203213621c65dd7018a0c7'}
})
  .then(response => response.text());

const showData = async () => {
  const result = await getData();
  console.log(result);
}

showData();










class Test{
    test: string
    constructor(test: string){
        this.test = test
    }

    setTest(){
        this.test = 'Hello'
        return this.test
    }

    changeTest(){
        console.log(this.test)
        this.test = 'Test'
        return this.test
    }
}

let t = new Test('')
console.log(t.setTest())
console.log(t.changeTest())



// class Submarine{
//     private arr: string[]
//     constructor(arr: string[]){
//         this.arr = arr
//     }

//     pushArray(data: string){
//         return this.arr.push(data)
//     }

//     fetchData(){
//         fetch('https://dev.api.mintycloud.nl/api/v1/challenges/input', {
//             method: 'GET',
//             headers: {Authorization: 
//                 'Basic 0153c98143c78d3cd57c1ecdc3514cef64a5178974496c57465eb46df9f93115c46c1d0fcd64a46683aac30190b28977b9dca9d36d203213621c65dd7018a0c7'}
//         })
//         .then(res => res.text())
//         .then(data => {
//             data.to

//             this.pushArray(data) // use the above method to push the data to a array
//             // console.log(this.arr)
//         })
//         .catch(error => console.log(error))
//     }

//     workArray(){
//         let splitMov: string[] = []
//         let splitNum: string[] = []
//         // this.arr.

//         console.log(this.arr)
//     }


// }


// FETCHING BELOW
// fetch('https://dev.api.mintycloud.nl/api/v1/challenges/input', {
//     method: 'get',
//     headers: {
//         'Authorization': 'Basic '+'input key',
//         },
//     }) 
//     .then(res => {
//         return res.text();
//     })
//     .then(splitEnd => {

//         let horizontal: number = 0
//         let depth: number = 0
//         let actions = [] // make empty array for actions
//         let movements: any = [] // make empty array for movements
        
//         let arrSplit: string[] = splitEnd.split(' ')
//         console.log(arrSplit)

//         for (let x of arrSplit){
//             actions.push(x.match(/[a-z]+/gi))
//             movements.push((x.match(/\d+/g))) // add to empty array
//         }

//         // console.log(actions)
//         // console.log(movements)

//         for (let index = 0; index < actions.length; index++){
//             if (String(actions[index]) == 'forward'){
//                 console.log(actions[index])
//                 console.log(movements[index+1])
//                 horizontal += Number(movements[index+1])
//             }
//             else if(String(actions[index]) == 'up'){
//                 depth -= Number(movements[index+1])
//             }
//             else if(String(actions[index]) == 'down'){
//                 depth += Number(movements[index+1])
//             }
//         }
 
//         console.log(depth)

//         console.log(horizontal * depth)
//         return horizontal * depth
//     })
//     .catch(err => {
//         console.error(err);
//     });


// // class Submarine{
// //     convertInput(a: string): number{



// //         let horizontal: number = 0
// //         let depth: number = 0
// //         let answer: number = 0
// //         let a2 = ' ' + a // add extra whitespace

// //         let arr: string[] = a2.split(',')  // split string on the ,
// //         let arrx = [] // make empty array

// //         for (let x of arr){ // split array again on the space
// //             arrx.push(x.split(' ')) // add to empty array
// //         }
// //         for (let x of arrx){  // x[1] = movement, x[2] is amount of moves
// //             if (x[1] == 'forward'){
// //                 horizontal += Number(x[2])
// //             }
// //             else if (x[1] == 'backwards'){
// //                 horizontal -= Number(x[2])
// //             }
// //             else if (x[1] == 'up'){
// //                 depth -= Number(x[2])
// //             }
// //             else if (x[1] == 'down'){
// //                 depth += Number(x[2])
// //             }
// //         }

// //         return horizontal * depth
// //     }
// // }

// // let sub = new Submarine
// // // console.log(sub.convertInput(res.text()))