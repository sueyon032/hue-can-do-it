// function tissuecrumpled() {
//     // 미션 성공 컨테이너 안보이게
//     var missionSuccessContainer = document.querySelector('.missionSuccess-container');
//     missionSuccessContainer.style.display = 'none';

//     // tissue-crumpled-container 클래스가 보이게
//     var tissueCrumpledContainer = document.querySelector('.tissue-crumpled-container');
//     tissueCrumpledContainer.style.display = 'block';

//     // #mission-tissue 이미지가 나오고 천천히 사라지게
//     var missionTissueImage = document.getElementById('mission-tissue');
//     missionTissueImage.style.opacity = 1;
//     var fadeOutInterval = setInterval(function() {
//         if (missionTissueImage.style.opacity > 0) {
//             missionTissueImage.style.opacity -= 0.01;
//         } else {
//             clearInterval(fadeOutInterval);
//             // #tissue 이미지가 나오게
//             var tissueImage = document.getElementById('tissue');
//             tissueImage.style.display = 'block';
//         }
//     }, 30); // 30 milliseconds 간격으로 opacity 조절
// }

function tissuecrumpled() {
    // 미션 성공 컨테이너 안보이게
    var missionSuccessContainer = document.querySelector('.missionSuccess-container');
    missionSuccessContainer.style.display = 'none';

    // tissue-crumpled-container 클래스가 보이게
    var tissueCrumpledContainer = document.querySelector('.tissue-crumpled-container');
    tissueCrumpledContainer.style.display = 'block';

    // #mission-tissue 이미지가 나오고 천천히 사라지게
    var missionTissueImage = document.getElementById('mission-tissue');
    missionTissueImage.style.opacity = 1;
    var fadeOutInterval = setInterval(function() {
        if (missionTissueImage.style.opacity > 0) {
            missionTissueImage.style.opacity -= 0.01;
        } else {
            clearInterval(fadeOutInterval);
            // #tissue 이미지가 나오게
            var tissueImage = document.getElementById('tissue');
            tissueImage.style.display = 'block';
            // 2.5초 후에 trash.html로 페이지 이동
            setTimeout(function() {
                window.location.href = "trash.html";
            }, 2500);
        }
    }, 30); // 30 milliseconds 간격으로 opacity 조절
}

