// home.js
document.addEventListener('DOMContentLoaded', function () {
    // 모달창 도전 버튼s
    const challengeContainer = document.getElementById('challenges');
    const challengeTypeContainer = document.getElementById('challenge-types');
    const startContainer = document.getElementById('startContainer');
    
    const challengeButtons = challengeContainer.querySelectorAll('.challenge button');
    const challengeTypeButtons = challengeTypeContainer.querySelectorAll('.challenge-type button');

    challengeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            challengeTypeContainer.style.display = 'flex';
        });
    });

    challengeTypeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            startContainer.style.display = 'flex';
        });
    });


    // 모달창 '도전'버튼
    const modal = document.getElementById('modal'); /*나중에 수정*/

    const startbtn = document.querySelector('.startbtn');
    startbtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });


    // 휴지모달창 + 타이머
    const tissue = document.getElementById('tissue');
    const tissueModal = document.getElementById('tissueModal');
    const missionFailContainer = document.querySelector('.missionfail-container');

    let targetTime; // 목표 시간

    tissue.addEventListener('click', function () {
        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            tissueModal.style.display = 'flex';

            // 현재 시간으로부터 24시간 목표 시간으로 설정합니다.
            targetTime = new Date().getTime() + (5 * 1000);

            startTimer();
        }
    });

    function startTimer() {
        updateTimer();
        setInterval(updateTimer, 1000); // 1초마다 타이머 업데이트
    }

    // 타이머 업데이트 함수
    function updateTimer() {
        // 현재 시간 설정
        var currentTime = new Date().getTime();

        // 남은 시간 계산
        var distance = targetTime - currentTime;

        // 남은 시간이 음수인 경우 00:00으로 설정하고 함수 종료
        if (distance <= 0) {
            document.getElementById('d-day-hour').textContent = '00';
            document.getElementById('d-day-min').textContent = '00';

            // 한 번만 실행되도록 clearInterval 호출
            clearInterval(timerInterval);

            missionFailContainer.style.display = 'flex'; // 미션 실패 창 나타나기
            return;
        }

        // 분, 초 계산
        var minutes = Math.floor(distance / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 분과 초가 한 자리 수일 경우 앞에 0을 붙여줌
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // HTML 엘리먼트에 시간 출력
        document.getElementById('d-day-hour').textContent = minutes;
        document.getElementById('d-day-min').textContent = seconds;
    }

    // 타이머 업데이트 함수를 1초마다 호출하도록 설정
    var timerInterval = setInterval(updateTimer, 1000);

});
//home.js

// 휴지 파쇄 함수
function tissueCrush() {
    tissueModal.style.display = 'none';
    tissue.style.display = 'none';
    missionFailContainer.style.display = 'none'; // missionFailContainer 숨기기

    var tissueContainer = document.getElementsByClassName('tissue-crush-container')[0];

    if (tissueContainers.length > 0) {
        var tissueContainer = tissueContainers[0];
        tissueContainer.classList.add('tissue-crush-animation');
    }
}