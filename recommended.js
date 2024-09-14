window.addEventListener('load',()=>{
    let notAva
    async function Recommend() {
        const link="https://api.jikan.moe/v4/manga"
        try {
            const response=await fetch(link)
            if (!response.ok) {
                throw new Error(`Response status:${response.status}`)
            }
            const json=await response.json()
            const rec=json.data
            console.log(rec[0].genres[0].name)

            const RecData=rec.map((rec,index)=>{
            const
            {title,
               
                images:{jpg:{image_url}},
                
                status,
                chapters}
            =rec;


        //    const genre=genres.map((gen,index)=>{
        //         name
        //     })
            if(chapters == null){
                notAva = "Ongoing •"
                return {
                    title,
                    
                    image_url,
                    
                    status,
                    chapters:notAva
                }
            }
          else{
              return {
                title,
                
                image_url,
                
                status,
                chapters
            }
          }


            })

// console.log(notAva);

            const card_wrap=RecData.map(
                ({title,
                    
                    image_url,
                
                    status,
                    chapters})=>
                `
                    <div id="card_wrap">
                    <img src=${image_url}>
                    <div id="info">
                    <p>${title}</p>
                    <p>${chapters}  </p>
                    <p>${status}</p>
                    </div>
                    
        
                    
                    </div>
                    
                    `)

                    document.querySelector("#recommended_cover").innerHTML=card_wrap
            console.log(RecData)

        } catch (error) {
        console.error(error.message)
        }
    }
    Recommend();
})