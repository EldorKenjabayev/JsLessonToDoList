let input = document.getElementById('input')
let boxHead = document.getElementById('boxHead')
let Addbtn = document.getElementById('Addbtn')
let b = new Date().getHours()
let c = new Date().getMinutes()
let d = new Date().getSeconds()
let a


input.addEventListener('keyup', (event)=>{
    a  = event.target.value

})
Addbtn.addEventListener('click', ()=>{
    boxHead.innerHTML += 
    ` <div class="box">
    <div class="box_left">
        <h3>${a}</h3>
        <p>${ b + ":" + c + ":" + d}</p>
    </div>
    <div class="box_right">
        <span>x</span>
    </div>
 </div>`
})
