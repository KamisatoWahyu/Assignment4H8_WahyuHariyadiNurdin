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
    }else{
        dataStorage.name = nama;
        dataStorage.role = role,
        dataStorage.usia = usia,
        dataStorage.availability = availability,
        dataStorage.lokasi = lokasi,
        dataStorage.experience = experience,
        dataStorage.email = email
        localStorage.setItem("storage", JSON.stringify(dataStorage));
    };

    document.getElementById("profile-form").style.display="none";
})

let buttonEdit = document.getElementById("btn-edit");

buttonEdit.addEventListener("click", function(){
    document.getElementById("profile-form").style.display="block";
    document.getElementById("name-input").value = document.getElementById("name-profile").innerHTML;
    document.getElementById("role-input").value = document.getElementById("role-profile").innerHTML;
    document.getElementById("usia-input").value = document.getElementById("usia-profile").innerHTML;
    document.getElementById("availability-input").value = document.getElementById("availability-profile").innerHTML;
    document.getElementById("lokasi-input").value = document.getElementById("lokasi-profile").innerHTML;
    document.getElementById("experience-input").value = document.getElementById("experience-profile").innerHTML;
    document.getElementById("email-input").value = document.getElementById("email-profile").innerHTML;
})

window.addEventListener("load", (_) => {
    try {
        const dataRead = localStorage.getItem(storage);
        const dataGet = JSON.parse(dataRead);
        if (typeof dataGet === 'object') {
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
