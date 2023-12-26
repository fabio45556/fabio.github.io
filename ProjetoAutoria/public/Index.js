const valor =  document.getElementById('valor');
const mais = document.getElementById('mais')
const menos = document.getElementById('mais')

const Atualizar = () =>{
	valor.innerHTML = count;	
};

let count = 0;
let IntervalId = 0;

mais.addEventListener('mousedown', () => {
iIntervalId = setInterval(() => {
	count += 1;
	Atualizar();
},100);
});

mais.addEventListener('mousedown', () => {
iIntervalId = setInterval(() => {
	count -= 1;
	Atualizar();
},100);
});

document.addEventListener('mouseup', () => clearInterval(iIntervalId));