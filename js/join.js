function checkPw(){
    const pw = document.querySelector("#user-pw");
    const pw_check = document.querySelector("#user-pw-check");
    const message = document.querySelector("#check-massage")
    if(pw.value !== pw_check.value){
    message.innerHTML = "* 비밀번호가 일치하지 않습니다."
    message.style.color = "red"
}
}