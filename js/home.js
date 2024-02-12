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

    let targetTime; // 목표 시간

    tissue.addEventListener('click', function () {
        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            tissueModal.style.display = 'flex';

            // 현재 시간으로부터 24시간 목표 시간으로 설정합니다.
            targetTime = new Date().getTime() + (24 * 60 * 60 * 1000);

            startTimer();
        }
    });

    function startTimer() {
        updateTimer();
        setInterval(updateTimer, 1000); // 1초마다 타이머 업데이트
    }

    function updateTimer() {
        // 현재 시간 설정
        var currentTime = new Date().getTime();

        // 남은 시간 계산
        var distance = targetTime - currentTime;

        // 시간, 분 계산
        var hours = Math.floor(distance / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // 시간과 분이 한 자리 수일 경우 앞에 0을 붙여줌
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        document.getElementById('d-day-hour').textContent = hours;
        document.getElementById('d-day-min').textContent = minutes;
    }
});

