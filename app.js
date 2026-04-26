//Cambiar a modo Eco
const boton1=document.querySelector("#boton1");

boton1.addEventListener('click', function() {
const modooscuro=document.body;

modooscuro.classList.toggle("dark-mode");

console.log(modooscuro);
});

//Añadir texto y cambiar estilo
const boton2=document.querySelector("#boton2");

boton2.addEventListener('click', function(){
    const status = document.querySelector("#software-status");

    status.textContent = "Current Status: Green Code (Optimized & Efficient) ✅";

    status.style.color = "#27ae60";

    status.style.fontWeight = "bold";

    console.log(status);
});

//Cambiar imagen
const boton3=document.querySelector(("#boton3"));

boton3.addEventListener('click', function() {
    const img = document.querySelector("#device-img");
    img.src = "https://cdn-icons-png.flaticon.com/128/1541/1541413.png";
    const desc = document.querySelector("#device-desc");
    desc.textContent = "Device Refurbished! Life extended by 3 years.";

    console.log(img);

    console.log(desc);
});

//Crear Lista de Habitos Sostenibles
const boton4=document.querySelector("#boton4");

boton4.addEventListener('click', function() {
    const ul1=document.createElement("ul");
    
    const li1=document.createElement("li");
    
    const li2=document.createElement("li");
    
    const li3=document.createElement("li");
    
    const li4=document.createElement("li");
    
    const li5=document.createElement("li");
    
    const li6=document.createElement("li");

    li1.textContent="Enable Power Saving Modes";

    li2.textContent="Declutter Cloud Storage";

    li3.textContent="Unsubscribe from Newsletters";

    li4.textContent="Repair and Upgrade Hardware";

    li5.textContent="Lower Screen Brightness";

    li6.textContent="Recycle E-waste Properly";

    const anadirul=document.querySelector("body section:nth-of-type(3)")

    anadirul.appendChild(ul1);

    ul1.appendChild(li1);

    ul1.appendChild(li2);

    ul1.appendChild(li3);

    ul1.appendChild(li4);

    ul1.appendChild(li5);

    ul1.appendChild(li6);

    const colorli=document.querySelectorAll("li");

    colorli.forEach(item =>{
        item.style.backgroundColor="#2d4a2d";
        item.style.color="white";
    });

    console.log(ul1);

    console.log(li1);

    console.log(li2);

    console.log(li3);

    console.log(li4);

    console.log(li5);

    console.log(li6);
});

//Tip secreto
const boton5=document.querySelector("#boton5");

boton5.addEventListener('click', function() {
    const section4=document.querySelector("#cloud-section");

    const secret_tip_h3=document.createElement("h3");

    secret_tip_h3.textContent='4.1 Green Tip: The "Direct URL" Habit';

    const secret_tip_p=document.createElement("p");

    secret_tip_p.textContent="Instead of searching for a website on Google every single time, use Bookmarks or type the URL directly in the address bar. Every search query sent to a search engine processes data through massive servers that consume electricity. Cutting out the 'middleman' for sites you visit daily reduces your personal carbon footprint.";

    section4.appendChild(secret_tip_h3);

    section4.appendChild(secret_tip_p);

    console.log(secret_tip_h3);

    console.log(secret_tip_p);
});

//Eliminar p del header
const boton6=document.querySelector("#boton6");

boton6.addEventListener('click', function() {
    const pbody=document.querySelector("p");

    pbody.remove();

    console.log(pbody);
});