const form =
document.getElementById("profileForm");

function showToast(title,message){

const toast =
document.getElementById("toast");

const toastTitle =
document.getElementById("toastTitle");

const toastMessage =
document.getElementById("toastMessage");

toastTitle.textContent = title;

toastMessage.textContent = message;

toast.classList.remove("hidden");

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.classList.add("hidden");

},400);

},3500);

}

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("businessName").value;

const desc =
document.getElementById("businessDesc").value;

const website =
document.getElementById("website").value;

const instagram =
document.getElementById("instagram").value;

const facebook =
document.getElementById("facebook").value;

const whatsapp =
document.getElementById("whatsapp").value;

const banner =
document.getElementById("bannerInput").files[0];

document.getElementById("previewName")
.textContent = name;

document.getElementById("previewDescription")
.textContent = desc;

if(website){

document.getElementById("siteLink")
.href = website;

}

if(instagram){

document.getElementById("igLink")
.href = instagram;

}

if(facebook){

document.getElementById("fbLink")
.href = facebook;

}

if(whatsapp){

document.getElementById("waLink")
.href = whatsapp;

}

if(banner){

const reader = new FileReader();

reader.onload = function(e){

document.getElementById("previewBanner")
.src = e.target.result;

}

reader.readAsDataURL(banner);

}

document.getElementById("previewSection")
.classList.remove("hidden");

showToast(
"Emprendimiento creado",
"Tu perfil fue creado correctamente."
);

form.reset();

});