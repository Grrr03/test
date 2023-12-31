const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator(){
    const fieldValue = document.querySelector("#field_value");
    let timeValue = document.querySelector("#time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == "") {
        alert('입력해주세요.');
        fieldValue.focus();
        return false;
    } else if(timeValue_int.value == "") {
        alert('입력해주세요.');
        timeValue.focus();
        return false;
    } else if(timeValue_int > 24) {
        alert("하루는 24시간뿐입니다!");
        return false;
    }

    result.style.display = 'none';
    loading.style.display= 'flex';  

    // result.style.display = 'none';
    // loading.style.display = 'felx';

    setTimeout(function() {
        loading.style.display = 'none';
        result.style.display = 'flex';
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
    }, 1800);
}

function openModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }   
}

function copyUrl() {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
        alert("URL이 복사되었습니다"); 
    });
}


shareButton.addEventListener('click',copyUrl);
openButton.addEventListener('click',openModal);
closeButton.addEventListener('click',closeModal);
startButton.addEventListener('click',calculator);