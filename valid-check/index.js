'use strict';

function loginValid() {
    let getUserId = document.getElementById('userId');
    let getUserPw = document.getElementById('userPw');
    
    //id의 길이는 3자 이상 10자 이하
    let validIdLen = getUserId.value.length;

    if (validIdLen < 3 || validIdLen > 10) {
        alert('아이디는 3자 이상 10자 이하가 되어야 합니다!');
        //커서가 깜박이고
        document.getElementById('userId').value.focus();
        //해당 위치의 텍스트가 드래그
        getUserId.value.select();
    } else {
        alert('로그인 성공!');
    }
}