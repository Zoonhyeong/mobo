window.onload = function() {
    const nickname = document.querySelector("#nickname")
    const price = document.querySelector("#total-price")
    const profile = document.querySelector("#profile-image")

    var arrList = new Array();
    
    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name'),{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let data = [];

        (async () => {
        data = await result.json();
        console.log(data);
        
        nickname.innerHTML = data.nickname
        // profile.innerHTML = data.profile_image
        })();
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });

    
    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name')+"/subscribes-groups",{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let data = [];

        (async () => {
            for(var i=0; i<arrList.length; i++){
                arrList[i] = await result.json();
            }
        // data = await result.json();
        })();
    })
    .then((arrList)=> {
        console.log(arrList);
    })
    .catch((error)=>{
        console.log(error);
    });

    
    fetch("http://127.0.0.1:8000/api/members/" + window.localStorage.getItem('name') + "/summary",{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let data_price = [];

        (async () => {
            data_price = await result.json();
            console.log(data_price);
            price.innerHTML = data_price.purchase_price__sum
        })();
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });


    

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

