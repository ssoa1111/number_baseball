
const formSubmit = document.querySelector('#form');
const inputText = document.querySelector('#input-num');
const resultText = document.querySelector('#result');
const resetBox = document.querySelector('.reset');
const resetText = document.querySelector('.reset .text');
const resetBtn = document.querySelector('.reset .resetBtn');
const tryText = document.querySelector('#try');

let userNum;
// 9자리 배열 만들고 정의하지 않고 채움
// map에 return 한 값을 배열에 채움
let totalNum = Array(9).fill().map((value, index)=> index+1);
// 초기 결과값 없음
let resultNum = [];

// 결과 일치 변수, 스트라이크와 볼의 개수를 나타낼 것임
let strike = 0;
let ball = 0;

// 게임 횟수
let tryNum = 1;

function reset(){
    // 4자리 숫자를 선정하기 위한 반복문
    for(let i = 0; i < 4; i++){
        // 랜덤으로 index에 들어갈 1~9의 값이 필요
        // let indexNum = Math.floor(Math.random()*9+1);이었으나 totalNum의 값을 
        //splice로 값을 제거하므로 index가 줄어서 indexNum의 값도 같이 감소하여야 함
        let indexNum = Math.floor(Math.random()*totalNum.length);
        // 랜덤 index로 totalNum의 값을 얻어 결과배열에 넣는다.
        resultNum.push(totalNum[indexNum]);
        // 값이 중복되지 않게 뽑은 숫자를 제거한다.
        totalNum.splice(indexNum, 1);
        console.log(resultNum);
    }
    resetBox.style.opacity = '0';
}
reset();

// input의 value값을 감지하기 위함
inputText.addEventListener('change',(e)=>{
    userNum = e.target.value;
    // 값 초기화
    e.target.value = '';
})

// form태그 요소가 있을 때 submit으로 enter기능과 버튼 click기능이 동일하게 작동하게 함
formSubmit.addEventListener('submit', (e)=>{
    // 제출 시 화면 재생성 방지
    e.preventDefault();
    // 유저의 입력길이가 4일 때
    if(userNum.length === 4){
        // Set()은 중복된 데이터를 거른다. 데이터의 길이를 length가 아닌 size로 얻을 수 있음
        // 값이 중복되지 않을 때 (= 데이터 길이가 4일 때)
        if(new Set(userNum).size === 4){
            for(let j = 0; j < resultNum.length; j++){
                // userNum에 resultNum중 일치하는 값이 있으면
                if(userNum.includes(resultNum[j])){
                    // 자리까지 동일하면
                    if(userNum[j] == resultNum[j]){
                        strike++;
                    }else{
                        ball++;
                    }
                }
            }
            // 결과 값을 보여줌
            resultText.innerHTML += `<b>${userNum}</b> <br> 스트라이크 : ${strike}, 볼 : ${ball} <br><br>`;
            tryText.textContent = tryNum;
            
            // 스트라이크 일 때(10회째 맞춰도 적용되게 함)
            if(strike === 4){
                resetBox.style.animation = 'slideInUp';
                resetBox.style.opacity = '1';
                resetText.textContent = '홈런입니다.';
            }else{
                // 마지막 횟수가 스트라이크 아닌데 10회째일 때
                if(tryNum === 10){
                    resetBox.style.animation = 'slideInUp';
                    resetBox.style.opacity = '1';
                    resetText.textContent = '실패입니다.';
                }
            }
            strike = 0;
            ball = 0;
            tryNum++;
        }else{
            alert('숫자가 중복됩니다.');
        }
    }else{
        alert('4자리 숫자를 입력하세요.');
    }
});


// 리셋버튼
resetBtn.addEventListener('click',()=>{
    // 모든 값 초기화
    totalNum = Array(9).fill().map((value, index)=> index+1);
    resultNum = [];
    tryNum = 1;
    tryText.textContent = '';
    resultText.innerHTML = '';
    reset();
})