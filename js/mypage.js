window.onload = function() {

    const name = document.querySelector("#user-name")
    const email = document.querySelector("#user-email")
    const intro = document.querySelector("#user-intro")
    const connect = document.querySelector("#user-lastconnect")

    fetch("http://127.0.0.1:8000/api/members/test3",{
        method: "GET",
    })
    .then((result) => {
        console.log(result);
        return result.json()
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });

    name.innerHTML= window.localStorage.getItem('nickname')
    email.innerHTML = "something@some.com"
    intro.innerHTML = "소개글"
    connect.innerHTML = "2022.11.06 17:4"
}

function lastPage(){
    history.back();
}

function nextPage(){
    location.href="subscribe_create.html"
}

function editPage(){
    location.href="change_mypage.html"
}
