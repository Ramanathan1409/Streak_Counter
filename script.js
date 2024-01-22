const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
const d = new Date();
let cur_date = 21;
console.log(cur_date);
let Streak=0;
setInterval(()=>{
    let temp = d.getDate();
    if(temp-cur_date>1){
        cur_date=temp;
        Streak=0;
        text.innerText = `The Current Streak is ${Streak}`;
        saveData();
    }
},1000)
btn.addEventListener("click",()=>{
    let now = d.getDate();
    if(now-cur_date==1){
        cur_date=now;
        Streak+=1;
        text.innerText = `The Current Streak is ${Streak}`;
        saveData();
    }
})
function saveData(){
    localStorage.setItem("local_data",text.innerHTML);
}
function showData(){
    text.innerHTML = localStorage.getItem("local_data");
}
showData();