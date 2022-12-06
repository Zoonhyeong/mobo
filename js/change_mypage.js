const nickname = document.querySelector("#user-name")
const email = document.querySelector("#user-email")
const intro = document.querySelector("#user-intro")
const connect = document.querySelector("#user-lastconnect")

window.onload = function() {
    
    nickname.value = "배고픈딸기"
    email.value  = "something@some.com"
    intro.value  = "소개글"
    connect.value  = "2022.11.06 17:4"
    
    fetch("http://127.0.0.1:8000/api/members/test3",{
        method: "get",
    })
    .then((result) => {console.log(result);
        let data = [];

        (async () => {
        data = await result.json();
        console.log(data);
        })();
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });
}

function put_data(){
    fetch("http://127.0.0.1:8000/api/members/test3",{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nickname: nickname.value,
                password: window.localStorage.getItem('password'),
                email: email.value,
                profile: intro.value,
            }),
    })
    .then((result) => {console.log(result);
        result.json();
        location.href="mypage.html"
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });
}