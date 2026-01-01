// form
document.getElementById("contactForm").addEventListener("submit", e=>{
e.preventDefault();
alert("Thank you for contacting AJULO PROPERTIES LTD. We will reach out shortly.");
});

// animation
const fades=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
fades.forEach(f=>{
const top=f.getBoundingClientRect().top;
if(top<window.innerHeight-100){
f.classList.add("show");
}
});
});
