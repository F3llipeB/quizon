const aboutBtn = document.getElementById("about-link");
const sectionAbout = document.getElementById("sectionAbout");
const sectionExperiences = document.getElementById("experiences-section")
//Função que ao clicar o botão about me, será levado para determinada área

aboutBtn.addEventListener("click", ()=>{
    sectionAbout.scrollIntoView({behavior:"smooth"});
    
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
