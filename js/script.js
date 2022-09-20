

//                            Start Product overview                   //


let btnone = document.getElementById('btnone');
let btntwo = document.getElementById('btntwo');
let btnthree = document.getElementById('btnthree');
let btnfour = document.getElementById('btnfour');
let btnfive = document.getElementById('btnfive');
let hp = document.getElementById('hp');
let dell = document.getElementById('dell');
let lenovo = document.getElementById('lenovo');
let acer = document.getElementById('acer');
let offer = document.getElementById('offer');



window.onload = function(){

    dell.style.display = 'none';
    lenovo.style.display = 'none';
    acer.style.display = 'none';
    offer.style.display = 'none';
    btnone.classList.add('active');
}





btnone.onclick =function(){

    dell.style.display = 'none';
    lenovo.style.display = 'none';
    acer.style.display = 'none';
    offer.style.display = 'none';
    hp.style.display = 'block';
    this.classList.add('active');
    btntwo.classList.remove('active');
    btnthree.classList.remove('active');
    btnfour.classList.remove('active');
    btnfive.classList.remove('active');
}




btntwo.onclick =function(){

    hp.style.display = 'none';
    lenovo.style.display = 'none';
    acer.style.display = 'none';
    offer.style.display = 'none';
    dell.style.display = 'block';
    this.classList.add('active');
    btnone.classList.remove('active');
    btnthree.classList.remove('active');
    btnfour.classList.remove('active');
    btnfive.classList.remove('active');
}



btnthree.onclick =function(){

    hp.style.display = 'none';
    dell.style.display = 'none';
    acer.style.display = 'none';
    offer.style.display = 'none';
    lenovo.style.display = 'block';
    this.classList.add('active');
    btnone.classList.remove('active');
    btntwo.classList.remove('active');
    btnfour.classList.remove('active');
    btnfive.classList.remove('active');
}


btnfour.onclick =function(){

    hp.style.display = 'none';
    dell.style.display = 'none';
    lenovo.style.display = 'none';
    offer.style.display = 'none';
    acer.style.display = 'block';
    this.classList.add('active');
    btnone.classList.remove('active');
    btntwo.classList.remove('active');
    btnthree.classList.remove('active');
    btnfive.classList.remove('active');
}


btnfive.onclick =function(){

    hp.style.display = 'none';
    dell.style.display = 'none';
    acer.style.display = 'none';
    lenovo.style.display = 'none';
    offer.style.display = 'block';
    this.classList.add('active');
    btnone.classList.remove('active');
    btntwo.classList.remove('active');
    btnthree.classList.remove('active');
    btnfour.classList.remove('active');
}


//                            end Product overview                   //




