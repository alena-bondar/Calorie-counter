
let butCalc = document.querySelector('.calculate');
let man = document.querySelector('#radio_one');
let woman = document.querySelector('#radio_two');
let a = document.querySelector('.age');
let h = document.querySelector('.height');
let w = document.querySelector('.weight');
let resultNormal = document.querySelector('.weight_normal h4');
let resultLoss = document.querySelector('.weight_loss h4');
let resultGain = document.querySelector('.weight_gain h4');
let oneTrain = document.querySelector('#one');
let twoTrain = document.querySelector('#two');
let threeTrain = document.querySelector('#three');
let fourTrain = document.querySelector('#four');
let fiveTrain = document.querySelector('#five');
let butDelete = document.querySelector('.delete');

butCalc.onclick = function (){
    debugger;

    let age, height, weight;

    age = parseInt(a.value);
    if (!age){
        alert('Вы ввели некорректный возраст');
        return ;
    }
    height = parseInt(h.value);
    if (!height){
        alert('Вы ввели некорректный рост');
        return ;
    }
    weight = parseInt(w.value);
    if (!weight){
        alert('Вы ввели некорректный вес');
        return ;
    }

    if (man.checked){
        let b = 88.36 + (13.4*w.value) + (4.8*h.value) - (5.7*a.value);// расчет каллорий
        if(oneTrain.checked){
           b = Math.round(b * 1.2);
        }else if (twoTrain.checked){
            b = Math.round(b * 1.375);
        }else if (threeTrain.checked){
            b = Math.round(b * 1.55);
        }else if (fourTrain.checked){
            b = Math.round(b * 1.725);
        }else if (fiveTrain.checked){
            b = Math.round(b * 1.9);
        }

        let k = Math.round(b + (b * 15)/100);
        let l = Math.round(b - (b * 15)/100);
        resultNormal.innerHTML = b + ' ккал' + '<br>' + '<p class="gray">поддержание<br>веса</p>';
        resultLoss.innerHTML = l + ' ккал' + '<br>' + '<p class="gray">снижение<br>веса</p>';
        resultGain.innerHTML = k + ' ккал' + '<br>' + '<p class="gray">набор<br>веса</p>';

    }else if(woman.checked){
        let c = 447.6 + (9.2*w.value) + (3.1*h.value) - (4.3*a.value);
        if(oneTrain.checked){
            c = Math.round(c * 1.2);
        }else if (twoTrain.checked){
            c = Math.round(c * 1.375);
        }else if (threeTrain.checked){
            c = Math.round(c * 1.55);
        }else if (fourTrain.checked){
            c = Math.round(c * 1.725);
        }else if (fiveTrain.checked){
            c = Math.round(c * 1.9);
        }
        let m = Math.round(c + (c * 15)/100);
        let l = Math.round(c - (c * 15)/100);
        resultNormal.innerHTML = c + ' ккал' + '<br>' + '<p class="gray">поддержание<br>веса</p>';
        resultLoss.innerHTML = l + ' ккал' + '<br>' + '<p class="gray">снижение<br>веса</p>';
        resultGain.innerHTML = m + ' ккал' + '<br>' + '<p class="gray">набор<br>веса</p>';

    }
}

butDelete.onclick = function (){
    resultNormal.innerHTML = '';
    resultLoss.innerHTML = '';
    resultGain.innerHTML = '';
    a.value = '';
    h.value = '';
    w.value = '';
}