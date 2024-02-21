//일단 30개 되면 팝업창이 나오는 걸 확인해보기 위해 계속 내려오다가 30개가 되면 팝업창이 나오는 버전과
//새로고침 시 한개만 내려오는 버전 2개의 코드를 작성함 (나중에 미션 성공 시 페이지로 넘어와 쓰레기가 내려오는 버전으로 수정할 예정)

//팝업창 버전
window.onload = function() {
    let score = 0;
    const trashCan = document.querySelector('.trash-can');
    const scoreElement = document.querySelector('.score');
    
    function showPopup() {
        // 팝업 창 요소 생성
        const popup = document.createElement('div');
        popup.className = 'popup';
        
        // 팝업 내용 추가
        const message = document.createElement('p');
        message.textContent = '휴지 적립 완료!';
        popup.appendChild(message);

        // 버튼 추가
        const button = document.createElement('button');
        button.textContent = '마이페이지로 이동';
        button.onclick = function() {
            window.location.href = 'mypage.html';
        };
        popup.appendChild(button);
        
        document.body.appendChild(popup);
    }
    
    function dropTrash() {
        if (score < 1) {
            const trashItem = document.createElement('img');
            trashItem.setAttribute('src', 'Image/tisue.png');
            trashItem.classList.add('trash-item');
            trashCan.appendChild(trashItem);
            
            setTimeout(() => {
                trashItem.style.bottom = '0';
                score++;
                scoreElement.textContent = score + ' / 30';
            }, 100); //내려오는 속도는 여기 숫자로 조정 할 수 있음 (숫자가 작아질수록 빨라짐)
        } else {
            showPopup();
        }
    }
    
    setInterval(dropTrash, 5000);
};

//새로고침 시 한개만 내려오는 버전
// JavaScript (trash-can.js)
// window.onload = function() {
//     let score = 0;
//     const trashCan = document.querySelector('.trash-can');
//     const scoreElement = document.querySelector('.score');
//     let hasDroppedTrash = false; // 이미지가 한 번 내려왔는지 여부를 확인하기 위한 변수
    
//     function dropTrash() {
//         if (!hasDroppedTrash) { // 이미지가 아직 한 번도 내려오지 않았을 때만 실행
//             const trashItem = document.createElement('img');
//             trashItem.setAttribute('src', 'Image/tisue.png');
//             trashItem.classList.add('trash-item');
//             trashCan.appendChild(trashItem);
            
//             setTimeout(() => {
//                 trashItem.style.bottom = '0';
//                 score++;
//                 scoreElement.textContent = score + ' / 30';
//             }, 100);
            
//             hasDroppedTrash = true; // 이미지가 한 번 내려왔으므로 true로 설정하여 더 이상 내려오지 않도록 함
//         }
//     }
    
//     // 페이지가 로드될 때마다 dropTrash 함수를 호출하여 새로고침할 때마다 이미지가 내려오도록 함
//     dropTrash();
// };
