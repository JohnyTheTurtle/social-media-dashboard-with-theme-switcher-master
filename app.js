generateView = function() {

  const titlestats = document.querySelector(".title a")
  const allsocials = document.querySelectorAll(".social")
  const overview = document.querySelector(".overview")
  
  generateSocials = function(item) {
    let statusIMG
    if (item.state === "up"){
      statusIMG = "./images/icon-up.svg"
    }else {
      statusIMG = "./images/icon-down.svg"
    }
    return '<div><img class="socialicon" src="'+item.icon+'"><span class="name"></span>'+item.name+'</div><h1>'+item.typeresult+'</h1><a>'+item.type+'</a><div class="statusdiv"><img class="updownicon" src="'+statusIMG+'"><span class="status">'+item.statevalue+'</span></div>'
  }
  generateOverview = function(item) {
    let statusIMG
    if (item.state === "up"){
      statusIMG = "./images/icon-up.svg"
    }else {
      statusIMG = "./images/icon-down.svg"
    }
    return '<span class="overviewtitle">'+item.type+'</span><img class="overviewlogo" src="'+item.icon+'" alt=""><h1 class="overvscore">'+item.typeresult+'</h1><div class="overviewtatusdiv"><img class="overviewupdownicon" src="'+statusIMG+'"><span class="overviewstatus">'+item.statevalue+'</span></div>'
  }
  
  const fetchFeed = async() => {
        const reply = await fetch("./feed.json")
        const data = await reply.json()
        ///rendering title statistics
        titlestats.innerText = data[2].headertext
        ///rendering socials data
          const socialsData = []
          for(key in data[0]) {
            socialsData.push(data[0][key])
          }
          allsocials.forEach((a, i)=> a.innerHTML = generateSocials(socialsData[i]))
        ///rendering overview data
        console.log(allsocials)
        const overviewData = []
        for(key in data[1]) {
          overviewData.push(data[1][key])
        }
        bits.forEach((a, i)=> a.innerHTML = generateOverview(overviewData[i]))
      }  
      fetchFeed()
}
///dark-light mode
const slider = document.querySelector(".slider input")
const wrapper = document.querySelector(".wrapper")
const socials = document.querySelectorAll(".social")
const bits = document.querySelectorAll(".bits")
let brightness = "brightness(135%)"

   const tiltles = document.querySelectorAll(".title")
   const modetext = document.querySelector(".slider span")
  
   slider.addEventListener("input", () => { 
     if (slider.value === "1") {
       modetext.innerText = "Light Mode"
       brightness = "brightness(80%)"
       slider.setAttribute("class", "lightstlider")
       wrapper.setAttribute("class", "lightwrapper")
       socials.forEach(b=> b.setAttribute("class", "lightsocial"))
       bits.forEach(b=> b.setAttribute("class", "lightbits"))
       tiltles.forEach(c => c.setAttribute("class", "lighttitle"))
     }
     if (slider.value === "0") {
       modetext.innerText = "Dark Mode"
       brightness = "brightness(135%)"
       
       slider.setAttribute("class", "darkslider")
       wrapper.setAttribute("class", "wrapper")
       socials.forEach(b=> b.setAttribute("class", "social"))
       bits.forEach(a=> a.setAttribute("class", "bits"))
       tiltles.forEach(a => a.setAttribute("class", "title"))
     }
   })
 
    slider.addEventListener("mouseover", () => { 
      slider.style.filter = brightness
      slider.style.cursor = "pointer"
    })
    slider.addEventListener("mouseout", () => { 
      slider.style.filter = null
      slider.style.cursor = null
    })
    socials.forEach(a => a.addEventListener("mouseover", () => { 
      a.style.filter = brightness
      a.style.cursor = "pointer"
    }))
    socials.forEach(a => a.addEventListener("mouseout", () => { 
      a.style.filter = null
      a.style.cursor = null
    }))
    bits.forEach(a => a.addEventListener("mouseover", () => { 
      a.style.filter = brightness
      a.style.cursor = "pointer"
    }))
    bits.forEach(a => a.addEventListener("mouseout", () => { 
      a.style.filter = null
      a.style.cursor = null
    }))
