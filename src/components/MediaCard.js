import React from 'react'

const MediaCard = ({title,body,imgUrl}) => {
    return (
        <div className="MediaCard">
           <h2>{title}</h2>
           <p>{body}</p>
           <img className="elec" src = {imgUrl}/> 
        </div>
    )
}

export default MediaCard
