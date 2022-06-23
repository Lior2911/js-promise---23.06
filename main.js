function getTime(){
  const NowDate = new Date();
  return new Promise((resolve,reject)=>{
    if(NowDate.getHours()<11){
      resolve("good morning");
    }
    reject("good afternoon");
  })
 
}

// function clickME(){
//   // getTime()
//   getModulu(num1,num2)
//   .then((data)=>{(printLine.innerText = data)})
//   .catch((data)=>{(printLine.innerText = data)})

// }

// function getModulu(num1,num2){
//   return new Promise ((resolve,reject)=>{
//     if(num2%num1 == 0){
//       resolve("yes")

//     }
//     reject("no")
//   })
// }
// getModulu(2,3)
// .then((data)=>{(printLine.innerText = data)})
// .catch((data)=>{(printLine.innerText = data)})

// function getPromise(num,arrayNum){
// return new Promise ((resolve,reject)=>{
//   for(let i=0 ;i<arrayNum.length;i++){
//     if(arrayNum[i]==num){
//       resolve("yes");
//     }
//     reject("no")
//   }
// })
// }
// getPromise(1,[12,32,33,22])
// .then((data)=>printLine.innerText = data)
// .catch((data)=>printLine.innerText = data)


