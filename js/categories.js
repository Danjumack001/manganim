window.addEventListener('load',()=>{
    async function Categories(){
        const link="https://api.jikan.moe/v4/recommendations/anime"
    
    try{
        const response=await fetch(link)
    if(!response.ok){
    throw new Error(`Response status:${response.status}`)
    }
    const json=await response.json()
    const jsondata=json.data
    console.log(jsondata)
      const CatData=jsondata.map((manga,index)=>{
        
      })


    
    }catch(error){
    console.error(error.message)
    }
     }
     Categories()
})


