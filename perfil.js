const form =
document.getElementById("profileForm");

const previewSection =
document.getElementById("previewSection");

const approvalSection =
document.getElementById("approvalSection");

const historySection =
document.getElementById("historial");

const surveySection =
document.getElementById("opiniones");

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

function agregarHistorial(texto){

const historyContainer =
document.getElementById(
"historyContainer"
);

if(!historyContainer) return;

const card =
document.createElement("div");

card.classList.add(
"history-card"
);

card.innerHTML = `

<h3>${texto}</h3>

<p>
${new Date().toLocaleDateString()}
</p>

<span class="pending">

Pendiente

</span>

`;

historyContainer.prepend(card);

}

function cargarEmprendimiento(){

const saved =
sessionStorage.getItem(
"vertexBusiness"
);

if(!saved) return;

const business =
JSON.parse(saved);

previewSection.classList.remove(
"hidden"
);

approvalSection.classList.remove(
"hidden"
);

historySection.classList.remove(
"hidden"
);

surveySection.classList.remove(
"hidden"
);

document.getElementById(
"previewName"
).textContent =
business.name;

document.getElementById(
"previewDescription"
).textContent =
business.desc;

if(business.website){

document.getElementById(
"siteLink"
).href =
business.website;

}

if(business.instagram){

document.getElementById(
"igLink"
).href =
business.instagram;

}

if(business.facebook){

document.getElementById(
"fbLink"
).href =
business.facebook;

}

if(business.whatsapp){

document.getElementById(
"waLink"
).href =
business.whatsapp;

}

if(business.banner){

document.getElementById(
"previewBanner"
).src =
business.banner;

}

}

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const business = {

name:
document.getElementById(
"businessName"
).value,

desc:
document.getElementById(
"businessDesc"
).value,

website:
document.getElementById(
"website"
).value,

instagram:
document.getElementById(
"instagram"
).value,

facebook:
document.getElementById(
"facebook"
).value,

whatsapp:
document.getElementById(
"whatsapp"
).value,

banner:null

};

const banner =
document.getElementById(
"bannerInput"
).files[0];

function guardar(){

const existe =
sessionStorage.getItem(
"vertexBusiness"
);

sessionStorage.setItem(
"vertexBusiness",
JSON.stringify(
business
)
);

if(existe){

agregarHistorial(
"Información actualizada"
);

showToast(
"Perfil actualizado",
"Los cambios fueron guardados."
);

}else{

agregarHistorial(
"Emprendimiento creado"
);

showToast(
"Emprendimiento creado",
"Tu perfil fue creado correctamente."
);

}

cargarEmprendimiento();

form.reset();

}

if(banner){

const reader =
new FileReader();

reader.onload =
function(e){

business.banner =
e.target.result;

guardar();

};

reader.readAsDataURL(
banner
);

}else{

const saved =
sessionStorage.getItem(
"vertexBusiness"
);

if(saved){

const old =
JSON.parse(saved);

business.banner =
old.banner;

}

guardar();

}

});

document.addEventListener(
"click",
function(e){

if(
e.target &&
e.target.id ===
"editBusinessBtn"
){

const saved =
sessionStorage.getItem(
"vertexBusiness"
);

if(!saved) return;

const business =
JSON.parse(saved);

document.getElementById(
"businessName"
).value =
business.name;

document.getElementById(
"businessDesc"
).value =
business.desc;

document.getElementById(
"website"
).value =
business.website || "";

document.getElementById(
"instagram"
).value =
business.instagram || "";

document.getElementById(
"facebook"
).value =
business.facebook || "";

document.getElementById(
"whatsapp"
).value =
business.whatsapp || "";

window.scrollTo({

top:0,

behavior:"smooth"

});

showToast(
"Modo edición",
"Puedes modificar tu emprendimiento."
);

}

});

cargarEmprendimiento();
