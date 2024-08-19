
// for dark and light mode 
const darkmodebtn = document.querySelectorAll(".dark-light-mode")
// console.log(darkmodebtn);
const lightmode = document.querySelectorAll(".lightmodes")
const darkmode = document.querySelectorAll(".darkmodes")
console.log(lightmode[1]);
console.log(darkmode[1]);


darkmodebtn.forEach((data)=>{
    data.addEventListener("click",()=>{
        document.body.classList.toggle("darkmode")
        if(document.body.className === "darkmode"){
        darkmode.forEach((dm)=>{
            dm.style.display="none"
        })
        lightmode.forEach((lm)=>{
            lm.style.display="block"
        })

        // darkmode.style.display = "none"
        //     lightmode.style.display="block"
        }
        else{
            // darkmode.style.display = "block"
            // lightmode.style.display="none" 
            darkmode.forEach((dm)=>{
                dm.style.display="block"
            })
            lightmode.forEach((lm)=>{
                lm.style.display="none"
            })
    
        }
    })
})


// for responsive navbar 

const navbar = document.querySelector(".nav")
const closenavbar = document.querySelector(".close-navbar")
const narbarstart = document.querySelector(".hamburger")

narbarstart.addEventListener("click",()=>{
    navbar.style.right = "18px"
})
closenavbar.addEventListener("click",()=>{
    navbar.style.right = "-100%"
})