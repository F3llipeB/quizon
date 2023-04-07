const aboutBtn = document.getElementById("about-link");
const sectionAbout = document.getElementById("sectionAbout");
sectionAbout.addEventListener('click',()=>{
    console.log('OI')
})
aboutBtn.addEventListener("click", ()=>{
    sectionAbout.scrollIntoView({behavior:"smooth"});
    
})
