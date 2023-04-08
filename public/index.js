const aboutBtn = document.getElementById("about-link");
const sectionAbout = document.getElementById("sectionAbout");
const sectionExperiences = document.getElementById("experiences-section");
const contact = document.getElementById("contact")
const contactBtn = document.getElementById("contactbtn")
//Função que ao clicar o botão about me, será levado para determinada área

aboutBtn.addEventListener("click", ()=>{
    sectionAbout.scrollIntoView({behavior:"smooth"});
    
})
//Função que ao clicar o botão contact me, será levado para determinada área

contactBtn.addEventListener("click", function(){
    contact.scrollIntoView({behavior:"smooth"})
})
// Função para adicionar novas experiencias na seção de experiencias

const experiences = [
    {name:"HTML", color:"bg-red-600"},
    {name:"CSS", color:"bg-blue-600"},
    {name:"Javascript", color:"bg-green-600"},
    {name:"SASS", color:"bg-yellow-600"},
    {name:"Tailwind-css", color:"bg-blue-600"},
    {name:"React", color:"bg-red-600"}
]
for(exp of experiences){
    let li = document.createElement('li');
    li.classList.add(`hover:${exp.color}`);
    li.classList.add('rounded');
    li.classList.add('p-2');
    li.classList.add('text-center');
    li.textContent = `${exp.name}`
    sectionExperiences.appendChild(li)
}
