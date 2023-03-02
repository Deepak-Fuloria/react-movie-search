import { createContext,useEffect,useState } from "react"

const url=`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`
const appContext= createContext()


const DataProvider=({children})=>{
   const [movie,setMovie]=useState([])
   const [isLoading,setIsLoading]=useState(true)
   const [isError,setIsError]=useState({show:"false",msg:""})
   const [query,setQuery]=useState("titanic")
  
    const getAllMovies=async(url)=>{
        try{
           
            const res= await fetch(url)
             const data= await res.json()
            
            
            
          if(data.Response)
          {
            setIsLoading(false)
            setMovie(data.Search)
            
          }
          else{
            setIsError({show:"true",msg:data.Error})
          }
            
        }
        catch(err){
          
       console.log(err)
        }
       
        }
    
    useEffect(()=>{ 
    getAllMovies(`${url}&s=${query}`)
    },[query])
    
    return <appContext.Provider value={{movie,isError,isLoading,query,setQuery}}>{children}</appContext.Provider>

}

export {appContext,DataProvider}
