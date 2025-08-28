const historydata = [];
 function cardAlert(id,serviceName,serviceNumber) {
console.log("Call button clicked");
const CoinCount = parseInt(document.getElementById(id).innerText);
if (CoinCount<20){
alert(`you have not sufficient coin ,you have to call atlist 20 coin need`)
}
else{
alert( `calling ${serviceName} ${serviceNumber}`);
 const totalCoinCount = parseInt(CoinCount-20);
    document.getElementById(id).innerText = totalCoinCount  ;
}
}

// function make for history
function historyobj(serviceName ,serviceNumber){

const data = {
  name: "serviceName" ,
  Number:"serviceNumber" ,
  date: new Date().toLocaleString()
 
};

historydata.push(data);



}
// function abc()
// {
 const hcallbtns= document.getElementsByClassName("call");
for (const hcallbtn of hcallbtns) {
  hcallbtn.addEventListener("click", function (e) {
    e.preventDefault();

const historyContainer = document.getElementById("history-Container")
 historyContainer.innerText = ""
for (const data of historydata)
 { console.log("ban")
const div = document.createElement("div");
  div.innerHTML = `<div class="flex justify-between items-center bg-[#fafafa] p-4 rounded-2">
              <div><h1 class="font-bold">Fire Service Number</h1> 
                   <p class="text-[#5c5c5c]">999</p>
              </div>
              <div>date</div>
            </div>`
 historyContainer.appendChild(div);
}
});
}

// }


// function history(id1,id2) {
//   document.getElementById(call).addEventListener("click",function(){
//     const historyContainer = document.getElementById(historyContain)
//     historyContainer.innerText = ""
// for (const data of historydata) {
//   const div = document.createElement("div");
//   div.innerHTML = `<div class="flex justify-between items-center bg-[#fafafa] p-4 rounded-2">
//               <div><h1 class="font-bold">Fire Service Number</h1> 
//                    <p class="text-[#5c5c5c]">999</p>
//               </div>
//               <div>date</div>
//             </div>`;
//   historyContainer.appendChild(div);
// }
// })
// }
// heart-count 
// and love increase
console.log(historydata);

 const hearts= document.getElementsByClassName("heart");
for (const heart of hearts) {
  heart.addEventListener("click", function (e) {
    e.preventDefault();
    const loveCount = parseInt(document.getElementById("love-count").innerText);

   const totalLoveCount = parseInt(loveCount+1);
    document.getElementById("love-count").innerText = totalLoveCount  ;
  });
}
// card 1

 const callbtns= document.getElementsByClassName("call");
for (const callbtn of callbtns) {
  callbtn.addEventListener("click", function (e) {
    e.preventDefault();


   const naturalAlert = cardAlert("coin-count","National Emergency Number",999)
const historyObj = historyobj("National Emergency Number",999)
    


  
  });
}


