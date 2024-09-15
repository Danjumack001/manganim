window.addEventListener('load',()=>{
    async function Episodes() {
        const link="https://api.jikan.moe/v4/schedules?page=4"
        try {
            const response=await fetch(link)
            if (!response.ok) {
                throw new Error(`Response status:${response.status}`);
                
            }
            
            const json=await response.json()
            const jsonData=json.data
            console.log(jsonData)

            const newData=jsonData.map((_new,index)=>{
                const{
                title_english,episodes,images:{webp:{image_url}}
                }=_new

                return{
                    title_english,episodes,image_url
 
                }
            })

            const newDiv=newData.map(({title_english,episodes,image_url
            })=>
            `
            <div id="new_wrap">
            
            <div id="img_wrap">
            <img src=${image_url}>
            </div>

            <div id="info">
            <p>${title_english}</p>
            <p>${episodes + " episodes"}</p>
            </div>
        
            </div>
            `
            )

            document.querySelector("#new_div").innerHTML=newDiv

            console.log(newData);
            
        } catch (error) {
            
        }
    }
    Episodes()
})