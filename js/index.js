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

    document.getElementsByClassName("name-profile")[0].innerText = nama;
    document.getElementsByClassName("role-profile")[0].innerText = role;
    document.getElementsByClassName("usia-profile")[0].innerText = usia;
    document.getElementsByClassName("availability-profile")[0].innerText = availability;
    document.getElementsByClassName("lokasi-profile")[0].innerText = lokasi;
    document.getElementsByClassName("experience-profile")[0].innerText = experience;
    document.getElementsByClassName("email-profile")[0].innerText = email;

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
    sessionStorage.setItem("loadedData", "1");
    alert("Data sudah diubah!");
})

let buttonEdit = document.getElementById("btn-edit");

buttonEdit.addEventListener("click", function(){
    if(document.getElementById("profile-form").style.display=="none"){
        document.getElementById("profile-form").style.display="block";
        if(sessionStorage.getItem("loadedData") == "1" && localStorage.getItem(storage) !== null){
            document.getElementById("name-input").value = document.getElementsByClassName("name-profile")[0].innerHTML;
            document.getElementById("role-input").value = document.getElementsByClassName("role-profile")[0].innerHTML;
            document.getElementById("usia-input").value = document.getElementsByClassName("usia-profile")[0].innerHTML;
            document.getElementById("availability-input").value = document.getElementsByClassName("availability-profile")[0].innerHTML;
            document.getElementById("lokasi-input").value = document.getElementsByClassName("lokasi-profile")[0].innerHTML;
            document.getElementById("experience-input").value = document.getElementsByClassName("experience-profile")[0].innerHTML;
            document.getElementById("email-input").value = document.getElementsByClassName("email-profile")[0].innerHTML; 
        }else{
            document.getElementById("name-input").value = ""
            document.getElementById("role-input").value = ""
            document.getElementById("usia-input").value = ""
            document.getElementById("availability-input").value = ""
            document.getElementById("lokasi-input").value = ""
            document.getElementById("experience-input").value = ""
            document.getElementById("email-input").value = ""
        }

    }else{
        document.getElementById("profile-form").style.display="none";
    }
})

window.addEventListener("load", (_) => {
    try {
        if (localStorage.getItem(storage)) {
            profile(1);
        }
        if(sessionStorage.getItem("loadedData") && localStorage.getItem(storage)){
            profile(0);
        }
    } catch (error) {
        console.error("Gagal:", error)
    }
})

btnLoad = document.getElementById("btn-load");
btnLoad.addEventListener("click", function(){
    profile(0);
    sessionStorage.setItem("loadedData", "1");
})

btnResume = document.getElementById("btn-resume");
btnResume.addEventListener("click", function(){
    if(sessionStorage.getItem("loadedData") == "1" && localStorage.getItem(storage) !== null){
        if(document.getElementsByClassName("info")[2]){
            document.getElementsByClassName("info")[2].style.display="none";
            document.getElementsByClassName("info")[3].style.display="none";
            document.getElementById("btn-load").style.display="none";
        } 
        document.getElementsByClassName("profile-info")[1].innerHTML = `<p>Data sudah disubmit</p>`;
        console.log("loadedData:", sessionStorage.getItem("loadedData"));
        console.log("localStorage item:", localStorage.getItem(storage));
    }else if(localStorage.getItem(storage) == null){
        if(document.getElementsByClassName("info")[2]){
            document.getElementsByClassName("info")[2].style.display="none";
            document.getElementsByClassName("info")[3].style.display="none";
            document.getElementById("btn-load").style.display="none";
        }
        document.getElementsByClassName("profile-info")[1].innerHTML = `<p>Belum ada data tersimpan</p>`;
        sessionStorage.setItem("loadedData", "0");
        console.log("loadedData:", sessionStorage.getItem("loadedData"));
        console.log("localStorage item:", localStorage.getItem(storage));
    }
})

function profile(i){
    const dataRead = localStorage.getItem(storage);
    const dataGet = JSON.parse(dataRead);

    document.getElementsByClassName("name-profile")[i].innerText = dataGet.name;
    document.getElementsByClassName("role-profile")[i].innerText = dataGet.role;
    document.getElementsByClassName("usia-profile")[i].innerText = dataGet.usia;
    document.getElementsByClassName("availability-profile")[i].innerText = dataGet.availability;
    document.getElementsByClassName("lokasi-profile")[i].innerText = dataGet.lokasi;
    document.getElementsByClassName("experience-profile")[i].innerText = dataGet.experience;
    document.getElementsByClassName("email-profile")[i].innerText = dataGet.email;
}