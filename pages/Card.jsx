import styleCard from '../styles/card.module.scss';
import {DiGitMerge} from 'react-icons/di'
import {FiLink} from 'react-icons/fi';
import Image from 'next/dist/client/image';
import imageProject1 from "../public/images/Capturecms.PNG";




const Card = ({title,description,img,imgClassName})=>{

  const showProjectImage=()=>{
    switch (imgClassName) {
      case "card__image__porfolio":
        return  <div className={`${styleCard.card__image} ${styleCard.card__image__porfolio}`}></div>
      break;

      case "card__image__porfoliocms":
        return  <div className={`${styleCard.card__image} ${styleCard.card__image__porfoliocms}`}></div>
      break;
     
      case "card__image__skull":
        return  <div className={`${styleCard.card__image} ${styleCard.card__image__skull}`}></div>
      break;
    
      case "card__image__themovie":
        return  <div className={`${styleCard.card__image} ${styleCard.card__image__themovie}`}></div>
      break;
      default:
        break;
    }
  
  }
    return (
      <li className={styleCard.cards__item}>
      <div className={styleCard.card}>
        {showProjectImage()}
        <div className={styleCard.card__content}>
          <div className={styleCard.card__title}>{title}</div>
          <p className={styleCard.card__text}>{description}</p>
          <button className={`${styleCard.btn} ${styleCard.btn__block} ${styleCard.card__btn}`}>
              <DiGitMerge style={{color:"#ffe73d" , fontSize:"25px", fontWeight:700, cursor:"pointer"}}/>
              <FiLink style={{color:"#ffe73d" , fontSize:"25px", fontWeight:700, cursor:"pointer"}}/>
          </button>
        </div>
      </div>
    </li>

    )
}

export default Card;