let user = {
    weight: document.querySelector('#weight'),
    height: document.querySelector('#height'),
    capacity: document.querySelector('#capacity'),
    frequency: document.querySelector('#frequency'),
    pressure: document.querySelector('#pressure'),
    time: document.querySelector('#time'),
    dinanometria: document.querySelector('#dinanometria'),
    btn: document.querySelector('button'),
    point: 0,
    male: document.querySelector('#male'),
    tr1: document.querySelector('#tr1'),
    tr2: document.querySelector('#tr2'),
    tr3: document.querySelector('#tr3'),
    tr4: document.querySelector('#tr4'),
    tr5: document.querySelector('#tr5'),
    tr6: document.querySelector('#tr6')
}

let table = document.querySelector('table');

/*Функция, предназначенная для вычисления 1-ого параметра*/
function calcMass(weight, height, bool) {
    let a = weight/height;
    user.tr1.childNodes[5].classList.remove('blue');
    user.tr1.childNodes[7].classList.remove('blue');
    user.tr1.childNodes[9].classList.remove('blue');
    user.tr1.childNodes[11].classList.remove('blue');
    user.tr1.childNodes[13].classList.remove('blue');
    if(bool){
        if(a >= 501){
            user.tr1.childNodes[5].classList.add('blue'); 
        }else if(a < 501 && a >= 451){
            user.tr1.childNodes[7].classList.add('blue');
        }else if(a < 451 && a >= 401){
            user.tr1.childNodes[9].classList.add('blue');
        }else if(a < 401 && a >= 375){
            user.tr1.childNodes[11].classList.add('blue');
        }else{
            user.tr1.childNodes[13].classList.add('blue');
        }
    }else{
        if(a >= 451){
            user.tr1.childNodes[5].classList.add('blue'); 
        }else if(a < 451 && a >= 401){
            user.tr1.childNodes[7].classList.add('blue');
        }else if(a < 401 && a >= 375){
            user.tr1.childNodes[9].classList.add('blue');
        }else if(a < 375 && a >= 350){
            user.tr1.childNodes[11].classList.add('blue');
        }else{
            user.tr1.childNodes[13].classList.add('blue');
        }
    }

    if(bool) {
        if(a >= 501){
            return -2;
        } else if(a < 501 && a >= 451){
            return -1;
        } else{
            return 0;
        }
    }else {
        if(a >= 451){
            return -2;
        } else if(a < 451 && a >= 401){
            return -1;
        } else{
            return 0;
        }
    }
}

/*Функция, предназначенная для вычисления 2-ого параметра*/
function calcCapacity(capacity, weight, bool){
    weight /= 1000;
    let a = capacity/weight;
    user.tr2.childNodes[5].classList.remove('blue');
    user.tr2.childNodes[7].classList.remove('blue');
    user.tr2.childNodes[9].classList.remove('blue');
    user.tr2.childNodes[11].classList.remove('blue');
    user.tr2.childNodes[13].classList.remove('blue');
    if(bool){
        if(a < 51){
            user.tr2.childNodes[5].classList.add('blue');
            return 0;
        }else if(a >= 51 && a < 56){
            user.tr2.childNodes[7].classList.add('blue');
            return 1;
        }else if(a >= 56 && a < 60){
            user.tr2.childNodes[9].classList.add('blue');
            return 2;
        }else if(a >= 60 && a < 65){
            user.tr2.childNodes[11].classList.add('blue');
            return 4;
        }else{
            user.tr2.childNodes[13].classList.add('blue');
            return 5;
        }
    }else {
        if(a < 41){
            user.tr2.childNodes[5].classList.add('blue');
            return 0;
        }else if(a >= 41 && a < 46){
            user.tr2.childNodes[7].classList.add('blue');
            return 1;
        }else if(a >= 46 && a < 50){
            user.tr2.childNodes[9].classList.add('blue');
            return 2;
        }else if(a >= 50 && a < 57){
            user.tr2.childNodes[11].classList.add('blue');
            return 4;
        }else{
            user.tr2.childNodes[13].classList.add('blue');
            return 5;
        }
    }
}

/*Функция, предназначенная для вычисления 3-ого параметра*/
function calcFrequency(frequency, pressure){
    let a = frequency * pressure / 100;
    user.tr3.childNodes[5].classList.remove('blue');
    user.tr3.childNodes[7].classList.remove('blue');
    user.tr3.childNodes[9].classList.remove('blue');
    user.tr3.childNodes[11].classList.remove('blue');
    user.tr3.childNodes[13].classList.remove('blue');
    if(a >= 111){
        user.tr3.childNodes[5].classList.add('blue');
        return -2;
    }else if(a >= 95 && a < 111){
        user.tr3.childNodes[7].classList.add('blue');
        return 0;
    }else if(a >= 85 && a < 95){
        user.tr3.childNodes[9].classList.add('blue');
        return 2;
    }else if(a >= 70 && a < 85){
        user.tr3.childNodes[11].classList.add('blue');
        return 3;
    }else{
        user.tr3.childNodes[13].classList.add('blue');
        return 4;
    }
}

/*Функция, предназначенная для вычисления 4-ого параметра*/
function calcTime(time){
    user.tr4.childNodes[5].classList.remove('blue');
    user.tr4.childNodes[7].classList.remove('blue');
    user.tr4.childNodes[9].classList.remove('blue');
    user.tr4.childNodes[11].classList.remove('blue');
    user.tr4.childNodes[13].classList.remove('blue');
    if(time >= 180){
        user.tr4.childNodes[5].classList.add('blue');
        return -2;
    }else if(time >= 120 && time < 180){
        user.tr4.childNodes[7].classList.add('blue');
        return 1;
    }else if(time >= 90 && time < 120){
        user.tr4.childNodes[9].classList.add('blue');
        return 3;
    }else if(time >= 60 && time < 90){
        user.tr4.childNodes[11].classList.add('blue');
        return 5;
    }else{
        user.tr4.childNodes[13].classList.add('blue');
        return 7;
    }
}

/*Функция, предназначенная для вычисления 5-ого параметра*/
function calcDinanometria(dinanometria, bool){
    user.tr5.childNodes[5].classList.remove('blue');
    user.tr5.childNodes[7].classList.remove('blue');
    user.tr5.childNodes[9].classList.remove('blue');
    user.tr5.childNodes[11].classList.remove('blue');
    user.tr5.childNodes[13].classList.remove('blue');
    if(bool){
        if(dinanometria <= 60){
            user.tr5.childNodes[5].classList.add('blue');
            return 0;
        }else if(dinanometria > 60 && dinanometria <= 65){
            user.tr5.childNodes[7].classList.add('blue');
            return 1;
        }else if(dinanometria > 65 && dinanometria <= 70){
            user.tr5.childNodes[9].classList.add('blue');
            return 2;
        }else if(dinanometria > 70 && dinanometria <= 80){
            user.tr5.childNodes[11].classList.add('blue');
            return 3;
        }else{
            user.tr5.childNodes[13].classList.add('blue');
            return 4;
        }
    }else{
        if(dinanometria <= 40){
            user.tr5.childNodes[5].classList.add('blue');
            return 0;
        }else if(dinanometria > 40 && dinanometria <= 50){
            user.tr5.childNodes[7].classList.add('blue');
            return 1;
        }else if(dinanometria > 50 && dinanometria <= 55){
            user.tr5.childNodes[9].classList.add('blue');
            return 2;
        }else if(dinanometria > 55 && dinanometria <= 60){
            user.tr5.childNodes[11].classList.add('blue');
            return 3;
        }else{
            user.tr5.childNodes[13].classList.add('blue');
            return 4;
        }
    }
}

/*Функция, предназначенная для показа общей оценки пользователя*/
function output(point){
    user.tr6.childNodes[5].classList.remove('blue');
    user.tr6.childNodes[7].classList.remove('blue');
    user.tr6.childNodes[9].classList.remove('blue');
    user.tr6.childNodes[11].classList.remove('blue');
    user.tr6.childNodes[13].classList.remove('blue');
    if(point <= 4){
            user.tr6.childNodes[5].classList.add('blue');
    }else if(point >= 5 && point <= 9){
            user.tr6.childNodes[7].classList.add('blue');
    }else if(point >= 10 && point <= 13){
            user.tr6.childNodes[9].classList.add('blue');
    }else if(point >= 14 && point <= 16){
            user.tr6.childNodes[11].classList.add('blue');
    }else{
            user.tr6.childNodes[13].classList.add('blue');
    }
}

user.btn.addEventListener('click', () =>  {
    user.point += calcMass(user.weight.value, user.height.value, user.male.checked);
    user.point += calcCapacity(user.capacity.value, user.weight.value, user.male.checked);
    user.point += calcFrequency(user.frequency.value, user.pressure.value);
    user.point += calcTime(user.time.value);
    user.point += calcDinanometria(user.dinanometria.value, user.male.checked);
    alert(user.point);
    output(user.point);
    user.point = 0;
    table.style.display = 'block';
})
