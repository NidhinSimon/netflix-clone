import React,{useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl ,API_KEY} from '../../constants/constant'
import Youtube from 'react-youtube'


const RowPost = (props) => {  

    const [movies,setMovies]=useState([])
    const [id,setId]=useState('')

useEffect(() => {
axios.get(props.url).then((response)=>{
    console.log(response.data,"dhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
setMovies(response.data.results)
})
}, [])

const opts = {
    height: '390',
    width: '100%',
    playerVars: {
     
      autoplay: 1 ,
    },
  };
const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data)
       if(response.data.length!==0)
       {
        setId(response.data.results[0])
       }
       else
       {
        console.log('djdjhjhjshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
       }
    })
}
 

  return (
    <div className='row'>
      <h2>{props.title}</h2>

<div className='posters'>

{movies.map((obj,index) => (
  <div key={index+1}>
    <img onClick={()=>handleMovie(obj.id )}
      className={props.isSmall ? "smallPoster" : "poster"}
      src={`${imageUrl + obj.backdrop_path}`}
      alt={obj.title} 
    />
    <h2>{obj.name}</h2>
    <h3>{obj.title}</h3>
  </div>
))}



</div>
{id && <Youtube opts={opts} videoId={id.key} />}
    </div>
  )
}

export default RowPost
