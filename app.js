let ele = document.querySelector('#canvas');

let btn = document.querySelector('#button');

btn.addEventListener('click',()=>{
    let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let ans = "#";
    for(let i = 0; i < 6; i++){
        let ran = Math.floor(Math.random() * 16);
        ans += arr[ran];
    }
    ele.style.backgroundColor = ans;
});