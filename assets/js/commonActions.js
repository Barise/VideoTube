$(document).ready(function() {
    
    $(".navShowHide").on("click", function() {
        
        var main = $("#mainSectionContainer");
        var nav = $("#sideNavContainer");

        //leftPadding란 클래스를 갖는 요소
        //현재: mainSectionContainer에 단어가 있으면 leftPadding가있어서 왼쪽으로 멈
        //sideNavContainer(nav)에 단어가 있으면 hide()와 show()가 작동해서 사라지게할수있음
        
        if(main.hasClass("leftPadding")) {
            //display가 none으로 됨
            nav.hide();
        }
        else {
            //display none이 취소됨
            nav.show();
        }
        //toggleClass: class를 leftPadding로 바꿔줌
        //main만 leftPadding가 추가되는거지 다른거는 영향 X
        main.toggleClass("leftPadding");

    });

});

