let zoo = [] //obj
let arr = [] //dom



let container = document.querySelector('.container')
let button = document.querySelector('.button')
let start = document.querySelector('#start')

class Hamster {
    constructor() {
        this.y = '555px';
        this.x = Math.floor(Math.random() * 900 + 30) + 'px';
        this.food = [];
    }
}

button.addEventListener('click', () => {
    zoo.push(new Hamster);
    
	container.insertAdjacentHTML('afterbegin', '<div class="hamster"></div>');
    
	arr = document.querySelectorAll('.hamster');
	
    arr.forEach((el, index) => {
        el.style.top = zoo[index].y
        el.style.left = zoo[index].x
		el.id = 'ham'+index;
    })
})

const starting = () => {
	prompt('Как думаете, хомяк под каким номером придет к финишу первым?', '№')
	let finish = 0;
	
    let interval = setInterval(() => {
        arr.forEach((el, index) => {
            let speed = Math.floor(Math.random() * 30);
            let currentY = window.getComputedStyle(el).top.slice(0, -2)
			currentY -= speed
            
			if (currentY < 0) {
				currentY = 0
			}

			el.style.top = currentY + 'px'
			
            if (currentY == 0) {
				clearInterval(interval);
				
				let nomer_pobeditelya = index + 1;
				
				let nazvanie_priza = priz(index); // назначение приза победителю
				
				delete_ham(index); // удаление проигравших
				
				alert('Победил хомяк №' + nomer_pobeditelya + '. Приз победителю - ' +  nazvanie_priza);
				
				return;
            }
        })
		
    }, 250)
	

}


const delete_ham = (ham) => {
	zoo.forEach((el, index) => {
		if (index != ham) {
			delete zoo[index];
			document.getElementById('ham'+index).remove();
		}
		
	})
}





const priz = (ham) => {
	let prizy = ['торт', 'конфета', 'морковка', 'пельмень'];
	let prizy_class = ['tort', 'konfeta', 'morkovka', 'pelmen'];
	
	let gift_index = Math.floor(Math.random() * prizy.length);
		
	zoo[ham].food.push(prizy[gift_index]);
	document.getElementById('ham'+ham).classList.toggle(prizy_class[gift_index]);
	
	
	return prizy[gift_index];
	
}


let pobeditel = start.addEventListener('click', starting);