
window.onload = function() {
    const nickname = document.querySelector("#nickname")
    
    
    fetch("http://127.0.0.1:8000/api/members/test10/subscribes-groups",{
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

    //nickname.innerHTML= window.localStorage.setItem('nickname', nickname.value)

}


function drop_sub_list1(){
    let click = document.getElementById("drop-content");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content").stop().slideToggle(-1000).slideUp(700);
    }
}

function drop_sub_list2(){
    let click = document.getElementById("drop-content2");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content2").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content2").stop().slideToggle(-1000).slideUp(700);
    }
}

function lastPage(){
    history.back();
}

function nextPage(){
    location.href="subscribe_create.html"
}

function subDetail(){
    location.href="subscribe.html"
}

function listPage(){
    location.href="list.html"
}

function go_mypage(){
    location.href="mypage.html"
}

