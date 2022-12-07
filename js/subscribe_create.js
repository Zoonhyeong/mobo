function sub_create(){
    const itemname = document.getElementById("select-box")
    const category = document.getElementById("select-box2")
    const price = document.getElementById("pay-price")
    const date = document.getElementById("start-date")
    const unit_week = document.getElementById("radio-week")
    const unit_month = document.getElementById("radio-month")
    const unit_month_first = document.getElementById("month-unit")
    const unit_month_date = document.getElementById("month-date")
    const unit_week_first = document.getElementById("week-unit")
    fetch("http://127.0.0.1:8000/api/members/" + window.localStorage.getItem('name') + "/subscribe",{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        name: itemname.value,
        start_date: date.value,
        purchase_month: unit_month_first.value,
        purchase_date: unit_month_date.value,
        purchase_price: price.value,
        member: 2,
        group: category.value
        }),
    })
    .then((result) => {console.log(result);
        result.json();
        if(result.status==201){
            location='list.html'
        } else if(result.status==400){
            alert("error msg")
        }
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });


    fetch("http://127.0.0.1:8000/api/members/" + window.localStorage.getItem('name') + "/subscribes-groups",{
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

window.onload = function() {

    const select_category = document.querySelector("#select-box2")
    const select_folder = document.querySelector("#select_folder")

    var arrList = new Array();

    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name')+"/subscribes-groups",{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let data = [];

        (async () => {
            for(var i=0; i<arrList.length; i++){
                arrList[i] = await result.json();
                console.log(arrList);
                data = await result.json();
                select_folder.innerHTML = `<option value="` + arrList[i].group_name + `">` + arrList[i].group_name + `</option>`
            }
        // data = await result.json();
        })();
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });
}

