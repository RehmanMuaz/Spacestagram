import './Card.css'
import './Button.css'
import React, { useState } from 'react'
import { FaHeart,FaRegHeart } from 'react-icons/fa'
import { BiShare } from 'react-icons/bi'

function Card(props) {
    const [liked, setLike] = useState(false);

    return (
        <div className="Card">
            <img src={props.url} alt={props.url}/>
            <div className='Content'>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <p>{props.desc}</p>
                <div className='ButtonRow'>
                    <button 
                        onClick={() => setLike(!liked)}
                    >
                        {liked ? <FaHeart color='red' size={25}/> : <FaRegHeart size={25} color='grey'/>}
                    </button>
                    <button 
                        onClick={() => {navigator.clipboard.writeText(props.url)}}
                    >
                        <BiShare size={25} color='grey'/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;