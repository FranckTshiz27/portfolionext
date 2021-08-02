import Head from "next/head";
import * as React from "react";
import Image from "next/image";
import { DiAptana } from "react-icons/di";
import { FiChevronsDown } from "react-icons/fi";
import TypeIt from "typeit-react";
import style from "./apropos.module.scss";
import menuStyle from "../styles/menu.module.scss";
import { FiAlignJustify, FiX } from "react-icons/fi";
import bannerStyle from "./banner.module.scss";
import { useState } from "react";
import { div } from "prelude-ls";
import competenceStyle from "../styles/competence.module.scss";
import aproposStyle from "./apropos.module.scss";
import profilePic from "../public/images/dev.png";
import { AiFillGithub, AiFillLayout, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const getSymbol = () => {
    return isMenuVisible ? (
      <FiX className={menuStyle.menu__btn} onClick={handleClickMenu} />
    ) : (
      <FiAlignJustify
        className={menuStyle.menu__btn}
        onClick={handleClickMenu}
      />
    );
  };

  const handleClickMenu = (e) => {
    setIsMenuVisible(!isMenuVisible);
  };

  const showMenu = () => {
    return !isMenuVisible ? (
      <div></div>
    ) : (
      <ul className={menuStyle.navigation}>
        <li className={menuStyle.navigation__item}>
          <a href="#banner">Accueil</a>
        </li>
        <li className={menuStyle.navigation__item}>
          <a href="#apropos">A propos</a>
        </li>
        <li className={menuStyle.navigation__item}>Compétences</li>
        <li className={menuStyle.navigation__item}>Réalisations</li>
      </ul>
    );
  };
  return (
    <div>
      <div className={menuStyle.menu__container}>
        <div className={menuStyle.menu__main}>{getSymbol()}</div>
        <div className={menuStyle.menu}>{showMenu()}</div>
      </div>

      <div className={bannerStyle.banner} id="banner">
        <div className={bannerStyle.banner__content}>
          <div className={bannerStyle.banner__symbol}>
            <DiAptana
              style={{
                fontSize: "30px",
                color: "#ffe73d",
                animation: `${bannerStyle.rotating} 3s linear infinite`,
                zIndex: 0,
              }}
            />
          </div>

          <div className={bannerStyle.banner__title}>
            <h2 className={bannerStyle.banner__title__parts__first}>
              DEVELOPPEUR WEB
            </h2>
            <h2 className={bannerStyle.banner__title__parts__second}>
              FULL-STACK
            </h2>
            <h1 className={bannerStyle.banner__title__name}>
              <TypeIt>François&nbsp;Tshizubu</TypeIt>
            </h1>
            <p>
              Développeur web et mobile, Développeur Fullstack, UX et UI
              designer
            </p>
            <p className={bannerStyle.p__last}>
              Contactez-nous pour obtenir des solutions
              <strong> belles</strong> et <strong>intelligentes</strong>
            </p>
          </div>
          <Image
            src={profilePic}
            alt="François Tshizubu"
            className={bannerStyle.img__1}
            width="1100"
            height="1100"
          />
        </div>

        <div className={bannerStyle.banner__direction}>
          <button>VOIR PLUS</button>
          <div className={bannerStyle.banner__direction__content}>
            <FiChevronsDown
              style={{
                color: "#ffe73d",
                fontSize: "30px",
                animation: `${bannerStyle.MoveUpDown} 3s linear infinite`,
                position: "absolute",
                left: 0,
                bottom: 0,
                cursor: "pointer",
                zIndex: 0,
              }}
            />
          </div>
        </div>
      </div>

      <div className={aproposStyle.apropos} id="apropos">
        <div className={aproposStyle.imageContainer}></div>

        <div className={aproposStyle.descriptionContainer}>
          <h1>A propos de moi</h1>
          <p>
            Je suis détenteur d'un diplôme de licence en génie informatique et
            ingénieur logiciel. J'ai également fait plusieurs formations qui
            m'ont permis de maitriser plusieurs langages de programmation dont
            Java et C#. Je suis actuellement à la Kinshasa Digital Academy pour
            renforcer mes compétences dans le domaine du développement du web et
            mobile.
          </p>
          <div className="contact__coordonnee__content__links">
            <AiFillGithub
              style={{ color: "#5a5a5a", fontSize: 35, margin: 20 }}
            />
            <FaLinkedinIn
              style={{ color: "#5a5a5a", fontSize: 35, margin: 20 }}
            />
            <AiOutlineTwitter
              style={{ color: "#5a5a5a", fontSize: 35, margin: 20 }}
            />
          </div>
        </div>
      </div>

      <div className={competenceStyle.competence}>
        <h2>Compétences</h2>

        <ul className={competenceStyle.competence__container}>
          <div className={competenceStyle.competence__container__item}>
            <li>HTML</li>
            <div className={competenceStyle.niveau}>
              <div className={competenceStyle.niveauHtml}></div>
            </div>
          </div>
          <div className={competenceStyle.competence__container__item}>
            <li>CSS</li>
            <div className={competenceStyle.niveau}>
              <div className={competenceStyle.niveauCss}></div>
            </div>
          </div>

          <div className={competenceStyle.competence__container__item}>
            <li>JAVASCRIPT</li>
            <div className={competenceStyle.niveau}>
              <div className={competenceStyle.niveauJs}></div>
            </div>
          </div>
          <div className={competenceStyle.competence__container__item}>
            <li>JAVA</li>
            <div className={competenceStyle.niveau}>
              <div className={competenceStyle.niveauJava}></div>
            </div>
          </div>
          <div className={competenceStyle.competence__container__item}>
            <li>CSHARP</li>
            <div className={competenceStyle.niveau}>
              <div className={competenceStyle.niveauCsharp}></div>
            </div>
          </div>
          <div className={competenceStyle.competence__container__item}>
            <li>BASE DE DONNEES</li>
            <div className={competenceStyle.niveau}>
              <div className={competenceStyle.niveauDb}></div>
            </div>
          </div>
        </ul>
        <div className={competenceStyle.competence__separator}></div>
      </div>
    </div>
  );
}
