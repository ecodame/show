function show(){
    document.querySelector('.navigation').classList.toggle('ative')
    document.querySelector('.toogel').classList.toggle('ative')
    document.querySelector('.toogel2').classList.toggle('open')

}

function show2(){
    document.querySelector('.navigation').classList.toggle('open')
    document.querySelector('.toogel2').classList.toggle('open')
    document.querySelector('.toogel').classList.toggle('ative')

}


function popup(){
    let openup = document.querySelector('.pop-up')
    openup.classList.toggle('open');
    document.querySelector('.clause').classList.toggle('open');

}