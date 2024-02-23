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
    const modal = document.getElementById('modal');

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
            // targetTime = new Date().getTime() + (1000 * 5); // 5초 실험용

            startTimer();
        }
    });

    let timerInterval;

    function startTimer() {
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        // 현재 시간 설정
        var currentTime = new Date().getTime();

        // 남은 시간 계산
        var distance = targetTime - currentTime;

        // 시간이 종료되었을 때 타이머를 멈춤
        if (distance <= 0) {
            clearInterval(timerInterval);
            document.getElementById('d-day-hour').textContent = '00';
            document.getElementById('d-day-min').textContent = '00';
            window.location.href = "mission_fail.html"; // 타이머가 멈췄을 때 화면이동
            return;
        }

        // 시간, 분 계산
        var hours = Math.floor(distance / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var hours = Math.floor(distance / (1000 * 60));
        // var minutes = Math.floor((distance % (1000 * 60)) / 1000);

        // 시간과 분이 한 자리 수일 경우 앞에 0을 붙여줌
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        document.getElementById('d-day-hour').textContent = hours;
        document.getElementById('d-day-min').textContent = minutes;
    }

    // 모든 체크박스 요소를 가져오는 함수
    function getAllCheckboxes() {
        return document.querySelectorAll('input[type="checkbox"]');
    }

    // 모든 체크박스가 체크되었는지 확인하는 함수
    function areAllCheckboxesChecked() {
        const checkboxes = getAllCheckboxes();
        for (let i = 0; i < checkboxes.length; i++) {
            if (!checkboxes[i].checked) {
                return false;
            }
        }
        return true;
    }

    // 체크박스 상태 변경 시 이벤트 처리
    function handleCheckboxChange() {
        const isChecked = areAllCheckboxesChecked();
        if (isChecked) {
            // 모든 체크박스가 선택된 경우
            window.location.href = "mission_success.html";
        }
    }

    // 체크박스에 change 이벤트 리스너 추가
    const checkboxes = getAllCheckboxes();
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', handleCheckboxChange);
    });
});

