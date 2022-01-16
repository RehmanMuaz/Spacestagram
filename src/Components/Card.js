import './Card.css'
import './Button.css'
import React, { useState } from 'react'
import { FaHeart,FaRegHeart } from 'react-icons/fa'
import { BiShare } from 'react-icons/bi'
import { useAlert } from 'react-alert'
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const ExpandText = ({ children }) => {
    const content = children;
    const [isExpanded, setExpanded] = useState(true);

    const toggleExpand = () => {
      setExpanded(!isExpanded);
    };
    return (
      <p>
        {isExpanded ? content.slice(0, 150) : content}
        <span onClick={toggleExpand} className="read-or-hide">
          {isExpanded ? <div className='ExpandBtn'>Expand<MdExpandMore style={{verticalAlign: 'middle'}}/></div> : <div className='ExpandBtn'>Collapse<MdExpandLess style={{verticalAlign: 'middle'}}/></div>}
        </span>
      </p>
    );
  };


function Card(props) {
    const [liked, setLike] = useState(false);
    const alert = useAlert();

    return (
        <div className="Card">
            <img src={props.url} alt={props.url}/>
            <div className='Content'>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <p>{<ExpandText>{props.desc}</ExpandText>}</p>
                <div className='ButtonRow'>
                    <button 
                        onClick={() => setLike(!liked)}
                    >
                        {liked ? <FaHeart className='LikeBtnClicked' size={25}/> : <FaRegHeart className='LikeBtnUnclicked' size={25}/>}
                    </button>
                    <button 
                        onClick={() => {navigator.clipboard.writeText(props.url); alert.success('Link Copied')}}
                    >
                        <BiShare className='ShareBtn' size={25}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;