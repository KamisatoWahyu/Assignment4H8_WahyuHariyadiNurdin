const storage = "storage";
let dataStorage = {};
let formProfile = document.getElementById("form-profile");

formProfile.addEventListener("submit", function(event){
    event.preventDefault();

    let nama = document.getElementById("name-input").value;
    let role = document.getElementById("role-input").value;
    let usia = document.getElementById("usia-input").value;
    let availability = document.getElementById("availability-input").value;
    let lokasi = document.getElementById("lokasi-input").value;
    let experience = document.getElementById("experience-input").value;
    let email = document.getElementById("email-input").value;

    document.getElementById("name-profile").innerText = nama;
    document.getElementById("role-profile").innerText = role;
    document.getElementById("usia-profile").innerText = usia;
    document.getElementById("availability-profile").innerText = availability;
    document.getElementById("lokasi-profile").innerText = lokasi;
    document.getElementById("experience-profile").innerText = experience;
    document.getElementById("email-profile").innerText = email;

    if(JSON.stringify(dataStorage) === '{}'){
        dataStorage = {
        name: nama,
        role: role,
        usia: usia,
        availability: availability,
        lokasi: lokasi,
        experience: experience,
        email: email
        } 
        localStorage.setItem("storage", JSON.stringify(dataStorage));
        console.log("data baru");
    }else{
        dataStorage.name = nama;
        dataStorage.role = role,
        dataStorage.usia = usia,
        dataStorage.availability = availability,
        dataStorage.lokasi = lokasi,
        dataStorage.experience = experience,
        dataStorage.email = email
        localStorage.setItem("storage", JSON.stringify(dataStorage));
        console.log("data update");
    };

    console.log(dataStorage);
})

let buttonEdit = document.getElementById("btn-edit");

buttonEdit.addEventListener("click", function(){
    document.getElementById("profile-form").style.display="block";
    document.getElementById("name-input").placeholder = document.getElementById("name-profile").innerHTML;
    document.getElementById("role-input").placeholder = document.getElementById("role-profile").innerHTML;
    document.getElementById("usia-input").placeholder = document.getElementById("usia-profile").innerHTML;
    document.getElementById("availabilitu-input").placeholder = document.getElementById("availability-profile").innerHTML;
    document.getElementById("lokasi-input").placeholder = document.getElementById("lokasi-profile").innerHTML;
    document.getElementById("experience-input").placeholder = document.getElementById("experience-profile").innerHTML;
    document.getElementById("email-input").placeholder = document.getElementById("email-profile").innerHTML;
})

window.addEventListener("load", (_) => {
    try {
        const dataRead = localStorage.getItem(storage);
        const dataGet = JSON.parse(dataRead);
        console.log("yes");
        if (typeof dataGet === 'object') {
            console.log("yes");
            console.log(dataGet);
            document.getElementById("name-profile").innerText = dataGet.name;
            document.getElementById("role-profile").innerText = dataGet.role;
            document.getElementById("usia-profile").innerText = dataGet.usia;
            document.getElementById("availability-profile").innerText = dataGet.availability;
            document.getElementById("lokasi-profile").innerText = dataGet.lokasi;
            document.getElementById("experience-profile").innerText = dataGet.experience;
            document.getElementById("email-profile").innerText = dataGet.email;
        }
        
    } catch (error) {
        console.error("[handleReadTodo]:", error)
    }
})
