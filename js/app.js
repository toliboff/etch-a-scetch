let pixel=+prompt('Enter the number of cells for painting', 10);
let down = false;

const app=document.getElementById('app');

const clearBtn=document.createElement('button');
clearBtn.textContent='Clear';
clearBtn.style.margin='0 auto';
app.appendChild(clearBtn);

const canvas=document.createElement('div');
canvas.className='container';
canvas.style.width='500px';
canvas.style.height='500px';
canvas.style.margin='20px auto';

canvas.style.gridTemplateColumns=`repeat(${pixel}, 1fr)`;
canvas.style.gridTemplateRows=`repeat(${pixel}, 1fr)`;

// canvas.textContent='tttt';
app.appendChild(canvas);


// document.body.onmousedown=()=> {
//     down = true;
// }0
// do0ument.body.onmouseup=()=> {
//     down = false;
// };
// .mouseup(function() {
//     down = false;  
// });

for(let j=0; j<pixel; j++){
    for(let i=0; i<pixel; i++){
        const cell=document.createElement('div');
        cell.className='cell';
        // cell.style.width='20px';
        // cell.style.height='20px';
        // cell.textContent=i;
        canvas.appendChild(cell);
    }
}
document.querySelectorAll('.cell').forEach(pxl=>pxl.onmouseover=(evt)=>{
   const r=Math.floor(Math.random()*255);
   const g=Math.floor(Math.random()*255);
   const b=Math.floor(Math.random()*255);
   if(1) evt.target.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
});

clearBtn.onclick=()=>{
    document.querySelectorAll('.cell').forEach(pxl=>pxl.style.backgroundColor='white');
}
