let name = document.getElementById("name");
let phone = document.getElementById("phone");



function dataStore() {
    event.preventDefault();
    console.log(name.value);
    const data = { name: name.value, phone: phone.value }
    console.log(data);
    localStorage.setItem(phone.value, JSON.stringify(data));


}
function loginStore() {
    event.preventDefault();
    let checkLocal = localStorage.getItem(phone.value);
    let check = JSON.parse(checkLocal);
    // console.log(checkLocal);
    if (check) {
        if (check.name === name.value) {
          
             const stores= {name:name.value, logged:'yes'}
             console.log(stores);
            sessionStorage.setItem("isLoggedin", JSON.stringify(stores));
            window.location.href = '/home.html'
        }


    }
    else {
        console.log('no');

    }

}

