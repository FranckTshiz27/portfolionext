/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Image from "next/image";
import { FiChevronsDown } from "react-icons/fi";
import TypeIt from "typeit-react";
import menuStyle from "../styles/menu.module.scss";
import { FiAlignJustify, FiX } from "react-icons/fi";
import bannerStyle from "./banner.module.scss";
import { useState } from "react";
import competenceStyle from "../styles/competence.module.scss";
import serviceStyle from "../styles/service.module.scss";
import aproposStyle from "./apropos.module.scss";
import profilePic from "../public/images/bannerimg.png";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPaintBrush,
  FaQuoteLeft,
  FaQuoteRight,
  FaBug,
  FaPaperPlane,
} from "react-icons/fa";
import { SiAmericanairlines } from "react-icons/si";
import { DiCode, DiDatabase } from "react-icons/di";
import styleCardService from "../styles/cardService.module.scss";
import styleRealisation from "../styles/realisation.module.scss";
import Card from "./Card";
import styleContact from "../styles/contact.module.scss";
import myImage from "../public/images/porfolio31.png";
// eslint-disable-next-line @next/next/no-document-import-in-page

export default function Home({ posts }) {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isSelected, setIsSelected] = useState("accueil");
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

  const handleClicItem = (e) => {
    setIsSelected(e.target.id);
    // setIsMenuVisible(!isMenuVisible);
  };

  const handleClickMenu = (e) => {
    setIsMenuVisible(!isMenuVisible);
  };

  const showMenu = () => {
    return !isMenuVisible ? (
      <div></div>
    ) : (
      <div className={menuStyle.navigation}>
        <a
          className={
            isSelected == "accueil"
              ? menuStyle.navigation__item__active
              : menuStyle.navigation__item
          }
          href="#banner"
          id="accueil"
          onClick={handleClicItem}
        >
          Accueil
        </a>
        <a
          className={
            isSelected == "apropo"
              ? menuStyle.navigation__item__active
              : menuStyle.navigation__item
          }
          href="#apropos"
          id="apropo"
          onClick={handleClicItem}
        >
          A propos
        </a>
        <a
          className={
            isSelected == "service"
              ? menuStyle.navigation__item__active
              : menuStyle.navigation__item
          }
          href="#services"
          id="service"
          onClick={handleClicItem}
        >
          Services
        </a>
        <a
          className={
            isSelected == "competence"
              ? menuStyle.navigation__item__active
              : menuStyle.navigation__item
          }
          href="#competences"
          id="competence"
          onClick={handleClicItem}
        >
          Compétences
        </a>

        <a
          className={
            isSelected == "realisation"
              ? menuStyle.navigation__item__active
              : menuStyle.navigation__item
          }
          href="#realisations"
          id="realisation"
          onClick={handleClicItem}
        >
          Réalisations
        </a>
      </div>
    );
  };
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className={menuStyle.menu__container}>
          <div className={menuStyle.menu__main}>{getSymbol()}</div>
          <div className={menuStyle.menu}>{showMenu()}</div>
        </div>
        <div className={bannerStyle.banner} id="banner">
          <div className={bannerStyle.banner__content}>
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
            <div>
              <Image
                src={profilePic}
                alt="François Tshizubu"
                className={bannerStyle.banner_img}
                width="600"
                height="600"
              />
            </div>
          </div>

          <div className={bannerStyle.banner__direction}>
            <div className={bannerStyle.banner__direction__content}>
              <a href="#apropos">
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
                    marginBottom: -40,
                  }}
                />
              </a>
            </div>
            <a href="#apropos">
              <button>VOIR PLUS</button>
            </a>
          </div>
        </div>

        <div className={aproposStyle.apropos} id="apropos">
          <div className={aproposStyle.imageContainer}>
            <Image src={myImage} alt="françois tshizubu" />
          </div>

          <div className={aproposStyle.descriptionContainer}>
            <h1>A propos de moi</h1>
            <div className={aproposStyle.apropos__underline}></div>
            <p>
              Je suis détenteur d'un diplôme de licence en génie informatique,
              donc ingénieur logiciel. J'ai également fait plusieurs formations
              qui m'ont permis de maitriser plusieurs langages de programmation
              dont Java et C#. Je suis actuellement à la Kinshasa Digital
              Academy pour renforcer mes compétences dans le domaine du
              développement web et mobile.
            </p>
            <div className="contact__coordonnee__content__links">
              <AiFillGithub className={aproposStyle.icons} />
              <FaLinkedinIn className={aproposStyle.icons} />
              <AiOutlineTwitter className={aproposStyle.icons} />
            </div>
          </div>
        </div>

        <div id="services" className={serviceStyle.service}>
          <h2>
            <FaQuoteLeft className={serviceStyle.service__quote} />
            Développeur informatique indépendant
            <FaQuoteRight className={serviceStyle.service__quote} />
          </h2>
          <div className={serviceStyle.service__container}>
            <div className={styleCardService.cardServiceContainer}>
              <div className={styleCardService.cardService}>
                <SiAmericanairlines
                  className={styleCardService.cardService__logo}
                />
              </div>

              <h3>ANALYSE</h3>

              <div className={styleCardService.cardServiceContainer__level}>
                <h5>1</h5>
              </div>
            </div>
            <div className={styleCardService.cardServiceContainer}>
              <div className={styleCardService.cardService}>
                <FaPaintBrush className={styleCardService.cardService__logo} />
              </div>

              <h3>DESIGN</h3>

              <div className={styleCardService.cardServiceContainer__level}>
                <h5>2</h5>
              </div>
            </div>
            <div className={styleCardService.cardServiceContainer}>
              <div className={styleCardService.cardService}>
                <DiCode className={styleCardService.cardService__logo} />
              </div>

              <h3>FRONTEND</h3>

              <div className={styleCardService.cardServiceContainer__level}>
                <h5>3</h5>
              </div>
            </div>

            <div className={styleCardService.cardServiceContainer}>
              <div className={styleCardService.cardService}>
                <DiDatabase className={styleCardService.cardService__logo} />
              </div>

              <h3>BACKEND</h3>

              <div className={styleCardService.cardServiceContainer__level}>
                <h5>4</h5>
              </div>
            </div>
            <div className={styleCardService.cardServiceContainer}>
              <div className={styleCardService.cardService}>
                <FaBug className={styleCardService.cardService__logo} />
              </div>

              <h3>TESTS</h3>

              <div className={styleCardService.cardServiceContainer__level}>
                <h5>5</h5>
              </div>
            </div>
            <div className={styleCardService.cardServiceContainer}>
              <div className={styleCardService.cardService}>
                <FaPaperPlane className={styleCardService.cardService__logo} />
              </div>

              <h3>LIVRAISON</h3>

              <div className={styleCardService.cardServiceContainer__level}>
                <h5>6</h5>
              </div>
            </div>
          </div>
          <div className={serviceStyle.service__separator}></div>
        </div>

        <div className={competenceStyle.competence} id="competences">
          <h2>MES COMPETENCES</h2>

          <div className={competenceStyle.competence__underline}></div>

          <div className={competenceStyle.competence__container}>
            <div className={competenceStyle.competence__container__item}>
              <div
                className={competenceStyle.competence__container__item__header}
              >
                <h3>HTML5</h3>
                <strong>70%</strong>
              </div>
              <div className={competenceStyle.niveau}>
                <div className={competenceStyle.niveauHtml}></div>
              </div>
            </div>

            <div className={competenceStyle.competence__container__item}>
              <div
                className={competenceStyle.competence__container__item__header}
              >
                <h3>CSS3</h3>
                <strong>70%</strong>
              </div>
              <div className={competenceStyle.niveau}>
                <div className={competenceStyle.niveauHtml}></div>
              </div>
            </div>
            <div className={competenceStyle.competence__container__item}>
              <div
                className={competenceStyle.competence__container__item__header}
              >
                <h3>JAVASCRIPT</h3>
                <strong>65%</strong>
              </div>
              <div className={competenceStyle.niveau}>
                <div className={competenceStyle.niveauJs}></div>
              </div>
            </div>
            <div className={competenceStyle.competence__container__item}>
              <div
                className={competenceStyle.competence__container__item__header}
              >
                <h3>PHP</h3>
                <strong>50%</strong>
              </div>
              <div className={competenceStyle.niveau}>
                <div className={competenceStyle.niveauPhp}></div>
              </div>
            </div>
            <div className={competenceStyle.competence__container__item}>
              <div
                className={competenceStyle.competence__container__item__header}
              >
                <h3>JAVA</h3>
                <strong>60%</strong>
              </div>
              <div className={competenceStyle.niveau}>
                <div className={competenceStyle.niveauJs}></div>
              </div>
            </div>
            <div className={competenceStyle.competence__container__item}>
              <div
                className={competenceStyle.competence__container__item__header}
              >
                <h3>CSHARP</h3>
                <strong>60%</strong>
              </div>
              <div className={competenceStyle.niveau}>
                <div className={competenceStyle.niveauCsharp}></div>
              </div>
            </div>
            <div className={competenceStyle.competence__container__item}>
              <div
                className={competenceStyle.competence__container__item__header}
              >
                <h3>BASE DE DONNEES</h3>
                <strong>60%</strong>
              </div>
              <div className={competenceStyle.niveau}>
                <div className={competenceStyle.niveauDb}></div>
              </div>
            </div>
            <div className={competenceStyle.competence__container__item}>
              <div
                className={competenceStyle.competence__container__item__header}
              >
                <h3>GIT ET GITHUB</h3>
                <strong>60%</strong>
              </div>
              <div className={competenceStyle.niveau}>
                <div className={competenceStyle.niveauDb}></div>
              </div>
            </div>
            <div className={competenceStyle.competence__container__item}>
              <div
                className={competenceStyle.competence__container__item__header}
              >
                <h3>FIGMA</h3>
                <strong>50%</strong>
              </div>
              <div className={competenceStyle.niveau}>
                <div className={competenceStyle.niveauDb}></div>
              </div>
            </div>
            <div className={competenceStyle.competence__container__item}>
              <div
                className={competenceStyle.competence__container__item__header}
              >
                <h3>GESTION DE PROJET (SCRUM)</h3>
                <strong>60%</strong>
              </div>
              <div className={competenceStyle.niveau}>
                <div className={competenceStyle.niveauDb}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styleRealisation.realisation} id="realisations">
          <h2>MES REALISATIONS</h2>
          <div className={styleRealisation.realisation__underline}></div>
          <div className={styleRealisation.realisation__content}>
            <Card
              title={"PORTFOLIO"}
              imgClassName={"card__image__porfolio"}
              description={
                "Un site vitrine présentant notre identité, parcours et compétences."
              }
            />

            <Card
              title={"PORTFOLIO CMS"}
              imgClassName={"card__image__porfoliocms"}
              description={
                "Il s'agit d'une application permettant d'administrer le site porfolio"
              }
            />
            <Card
              title={"TMOVIES"}
              imgClassName={"card__image__themovie"}
              description={
                "Site vitrine de présentation et recherche des films utilisant l'Api The movies"
              }
              link="https://epic-northcutt-7543fb.netlify.app/"
            />
            <Card
              title={"SKULMAN"}
              imgClassName={"card__image__skull"}
              description={
                "Une application de gestion prenant en charge plusieurs processus des écoles, notamment l'inscription, la paie et le controle"
              }
              link="https://drive.google.com/drive/folders/1Oucofy44plg8ugVYSIAyytd00CNCFbNd"
            />
          </div>
        </div>

        <div className={styleContact.contact__coordonnee}>
          <div className={styleContact.contact__coordonnee__content}>
            <p>KINSHASA/RDC</p>
            <p>Téléphone: +243824360292</p>
            <p>Email: francktshizbu27@gmail.com</p>
            <div className={styleContact.contact__coordonnee__content__links}>
              <a>
                <AiFillGithub className={styleContact.icons} />
              </a>
              <a href="https://web.facebook.com/profile.php?id=100005899638524">
                <FaFacebookF className={styleContact.icons} />
              </a>

              <a href="https://www.linkedin.com/feed/">
                <FaLinkedinIn className={styleContact.icons} />
              </a>
              <a href="https://twitter.com/TshizubuFranoi2">
                {" "}
                <AiOutlineTwitter className={styleContact.icons} />
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
