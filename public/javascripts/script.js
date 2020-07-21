// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  //console.log(mashPotatoes[i])
}




// Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => { //rest for 10 minutes
//               addFood(steak[7], '#steak', () => { //enjoy
//                 document.querySelector('#table').innerHTML += `<img src ="./public/images/steak.jpg" />`
//               })
//             })
//           })
//         })
//       })
//     })
//   })
// });


//Nice try but because things have different speeds its out of order 
// for(let i =0; i<steak.length; i++){
//   addFood(steak[i], '#steak')
// }

// let p1 = new Promise((resolve, reject)=>{
//   function recursiveAddFood(n){
//     addFood(steak[n], '#steak', () => {
//       if(n < steak.length - 1){
//         recursiveAddFood(++n)
//       } else {
//         document.querySelector('#table').innerHTML += `<img src ="./public/images/steak.jpg" />`
//         resolve('steak done')
//       }
//     })
//   }
//   recursiveAddFood(0)
// })

// Promise.all([p1]).then(res => {
//   console.log(res)
// })








// addFood(mashPotatoes[0], '#mashPotatoes').then((res)=>{
//   addFood(mashPotatoes[1], '#mashPotatoes').then((res)=>{
//     addFood(mashPotatoes[2], '#mashPotatoes').then((res)=>{
//       addFood(mashPotatoes[3], '#mashPotatoes').then((res)=>{
//         addFood(mashPotatoes[4], '#mashPotatoes').then((res)=>{
//           document.querySelector('#table').innerHTML += `<img src ="./public/images/mashPotatoes.jpg" />`
//         })
//       })
//     })
//   })
// })


// function recursiveAddFoodmashPotatoes(n){
//   addFood(mashPotatoes[n], '#mashPotatoes').then(() => {
//     if(n < mashPotatoes.length - 1){
//       recursiveAddFoodmashPotatoes(++n)
//     }
//     else {
//       document.querySelector('#table').innerHTML += `<img src ="./public/images/mashPotatoes.jpg" />`
//     }
//   })
// }
// recursiveAddFoodmashPotatoes(0)





// Iteration 3 using async and await
  async function makeFood(steps, id) {
    console.log(steps)
    for(step of steps){       //for(let i=0; i< mashPotatoes.length; i++){
      await addFood(step, id)     //await addFood(mashPotatoes[i], '#mashPotatoes)
    }
    document.querySelector('#table').innerHTML += `<img src ="./public/images/${id.replace('#','')}.jpg" />`
    return steps
  }

  Promise.all([
    makeFood(brusselSprouts, '#brusselSprouts'),
    makeFood(mashPotatoes, '#mashPotatoes'),
    makeFood(steak, '#steak')
  ]).then(res => { //All done
    console.log('Dinner is made', res)
    document.body.innerHTML += `<button onclick="new Audio('./public/media/dinnerIsServed.mp3').play()">Dinner is served</button>`
  })
