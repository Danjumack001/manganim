window.addEventListener('load',()=>{
    async function Top() {
       const link="https://api.jikan.moe/v4/top/manga"
try {
    const response=await fetch(link)
if (!response.ok) {
    throw new Error(`Response status:${response.status}`);
    
}
const top=await response.json()
const topData=top.data.slice(0,10)
console.log(topData)

const Datatop=topData.map((popular,index)=>{
    const{
        title,episodes,year,images:{webp:{image_url}},
    }=popular

    return{
        title,episodes,year,image_url,

    }
})

const popularDiv=Datatop.map(({title,episodes,year,image_url,})=>
    `
  <div id="card_wrap1">
                    <img id="img1" src=${image_url}>
                    <div id="info_txt1">
                    <p>${title}</p>
                    </div>
                    
        
                    
                    </div>
    `
)

document.querySelector("#top_div").innerHTML=popularDiv
console.log(Datatop)
} catch (error) {
    console.error(error.message)
}
    }
    Top()

    async function Recommended() {
        const link="https://api.jikan.moe/v4/manga"

try {
    const response=await fetch(link)
if (!response.ok) {
    throw new Error(`Response status:${response.status}`);
    
}
const rec=await response.json()
const recData=rec.data.slice(0,10)
console.log(recData)

const Datarec=recData.map((recommend,index)=>{
    const{
        title,images:{webp:{image_url}},
    }=recommend

    return{
        title,image_url,

    }
})

const recDiv=Datarec.map(({title,image_url,})=>
    `
  <div id="card_wrap2">
                    <img id="img2" src=${image_url}>
                    <div id="info_txt2">
                    <p>${title}</p>
                    </div>
                    
        
                    
                    </div>
    `
)

document.querySelector("#recommended_div").innerHTML=recDiv
console.log(Datarec)
} catch (error) {
    console.error(error.message)
}
    }
    Recommended()



    async function Bottom() {
        const link="https://api.jikan.moe/v4/schedules"

try {
    const response=await fetch(link)
if (!response.ok) {
    throw new Error(`Response status:${response.status}`);
    
}
const bot=await response.json()
const botData=bot.data.slice(12,13)

console.log(botData);

// const botnarrow=botData.entry
// console.log(botslice)

// console.log(botnarrow)




const Databot=botData.map((last,index)=>{
    const{
title_english,images:{webp:{large_image_url}}}=last

    return{
       title_english,large_image_url

    }
})


const botDiv=Databot.map(({title_english,large_image_url})=>
    `
  <div id="carousel_wrap">
                    <img id="img3" src=${large_image_url}>
                    <div id="carousel_info">
                    <p>${title_english}</p>
                    

                    </div>
        
                    
                    </div>
    `
);



document.querySelector("#new_div").innerHTML=botDiv
// console.log(Databot)


// const display=document.querySelector("#images")
// const display2=botDiv
// let count=-1

// function increment() {
//     if (count===display2.lenght-1) {
//         count=-1
//     }
//     count++
//     display.src=display2[count]
// }
// setInterval(increment,1000)

} catch (error) {
    console.error(error.message)
}
    }
   Bottom()
})


