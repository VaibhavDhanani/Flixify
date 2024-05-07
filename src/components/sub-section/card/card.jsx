import React, { useState } from "react";
import "./card.css";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
function Card(props) {
 
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const { id, name, imageUrl, ratings, totalLikes, totalSeasons } = props.info;
  return (
    
 
        <div
        
          className="imageContainer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={imageUrl}
           
            className="image"
          />
          {isHovered && (
            <div className="additionalInfo">
              <div className="info-container">
                <div className="imgcon">
                  <img
                    src={imageUrl}
                   
                    className="infoimg"
                  />
                </div>
                <div className="information">
                  <div class="button-container">
                    <button class="circular-button"><PlayArrowIcon></PlayArrowIcon></button>
                    <button class="circular-button"><AddIcon></AddIcon></button>
                    <button class="circular-button"><CloseIcon></CloseIcon></button>
                    <button class="circular-button"><ThumbUpOffAltIcon></ThumbUpOffAltIcon></button>
                    <button class="circular-buttonl"><KeyboardArrowDownIcon></KeyboardArrowDownIcon></button>
                  </div>
                  <div className="season text-xs">{totalSeasons} seasons</div>
              <div className="hashtags text-xs">
                <p>{name}</p>
                <p>{totalLikes}</p>
                <p>{ratings} / 5.0</p>
                </div>
            </div>
          </div>
                
              </div>
           
          )}

        </div>
    
       
  );
}

export default Card;