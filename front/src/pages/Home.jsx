import txt from '../assets/texte.txt';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div class="our-story-cards page page-home" data-uia-nmhp="our-story-cards">
      <div
        class="our-story-card hero-card hero_fuji vlv"
        data-uia-nmhp="hero_fuji"
        data-uia="our-story-card"
      >
        <div class="our-story-card-background">
          <div
            class="concord-img-wrapper"
            data-uia="concord-img-wrapper"
            style={{ height: "762px" }}
          >
            <img
              class="concord-img vlv-creative"
              src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/ca0bb65a-15c7-43e1-ac55-eb495cbbecdc/FR-fr-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg"
              srcset="
                              https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/ca0bb65a-15c7-43e1-ac55-eb495cbbecdc/FR-fr-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg  1000w,
                              https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/ca0bb65a-15c7-43e1-ac55-eb495cbbecdc/FR-fr-20230213-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w,
                              https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/ca0bb65a-15c7-43e1-ac55-eb495cbbecdc/FR-fr-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg  1800w
                            "
              alt=""
            />
            <div class="concord-img-gradient"></div>
          </div>
        </div>
        <div class="our-story-card-text">
          <h1 id="" class="our-story-card-title" data-uia="hero-title">
            Films, séries et bien plus en&nbsp;illimité.
          </h1>
          <h2
            id=""
            class="our-story-card-subtitle"
            data-uia="our-story-card-subtitle"
          >
            Où que vous soyez. Annulez à tout moment.
          </h2>
          <form class="cta-form email-form" data-uia="email-form" method="GET">
            <h3 class="email-form-title">
                Prêt à regarder Netflix&nbsp;? Télécharger notre application afin de profiter
              des meilleurs films et séries du moment.
            </h3>
            <div class="email-form-lockup">
              <div class="our-story-cta-container cta-link-wrapper">
              <Link to={txt} class="cta-btn-txt" target="_blank" download class="btn nmhp-cta btn-red nmhp-cta-extra-large btn-none btn-custom" type="button" autocomplete="off" tabindex="0" role="link" data-uia="our-story-cta-faq">
                Télécharger notre application
                  <span id="" class="chevron-right-arrow" data-uia="">
                    <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                      <desc>chevron</desc>
                      <path
                        d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                        fill="none"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div class="center-pixel" style={{ position: "absolute" }}></div>
      </div>
      <div
        class="our-story-card animation-card watchOnTv"
        data-uia-nmhp="watchOnTv"
        data-uia="our-story-card"
      >
        <div class="animation-card-container">
          <div class="our-story-card-text">
            <h1
              id=""
              class="our-story-card-title"
              data-uia="animation-card-title"
            >
              Regardez Netflix sur votre&nbsp;TV.
            </h1>
            <h2
              id=""
              class="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Regardez Netflix sur votre Smart&nbsp;TV, PlayStation, Xbox,
              Chromecast, Apple&nbsp;TV, lecteur Blu-ray et&nbsp;bien plus.
            </h2>
          </div>
          <div class="our-story-card-img-container">
            <div class="our-story-card-animation-container">
              <img
                alt=""
                class="our-story-card-img"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                data-uia="our-story-card-img"
              />
              <div
                class="our-story-card-animation"
                data-uia="our-story-card-animation"
              >
                <video
                  class="our-story-card-video"
                  data-uia="our-story-card-video"
                  autoplay=""
                  playsinline=""
                  muted=""
                  loop=""
                >
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  />
                </video>
                <div class="our-story-card-animation-text"></div>
                <div
                  class="our-story-card-animation-custom"
                  data-uia="our-story-card-custom"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
          <div class="center-pixel" style={{ position: "absolute" }}></div>
        </div>
      </div>
      <div
        class="our-story-card animation-card watchOnDevice flipped"
        data-uia-nmhp="watchOnDevice"
        data-uia="our-story-card"
      >
        <div class="animation-card-container">
          <div class="our-story-card-text">
            <h1
              id=""
              class="our-story-card-title"
              data-uia="animation-card-title"
            >
              Où que vous soyez.
            </h1>
            <h2
              id=""
              class="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Regardez des films et séries en illimité sur votre TV, smartphone,
              tablette et ordinateur, sans payer de supplément.
            </h2>
          </div>
          <div class="our-story-card-img-container">
            <div class="our-story-card-animation-container">
              <img
                alt=""
                class="our-story-card-img"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                data-uia="our-story-card-img"
              />
              <div
                class="our-story-card-animation"
                data-uia="our-story-card-animation"
              >
                <video
                  class="our-story-card-video"
                  data-uia="our-story-card-video"
                  autoplay=""
                  playsinline=""
                  muted=""
                  loop=""
                >
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                    type="video/mp4"
                  />
                </video>
                <div class="our-story-card-animation-text"></div>
                <div
                  class="our-story-card-animation-custom"
                  data-uia="our-story-card-custom"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
          <div class="center-pixel" style={{ position: "absolute" }}></div>
        </div>
      </div>
      <div
        class="our-story-card animation-card kidsValueProp"
        data-uia-nmhp="kidsValueProp"
        data-uia="our-story-card"
      >
        <div class="animation-card-container">
          <div class="our-story-card-text">
            <h1
              id=""
              class="our-story-card-title"
              data-uia="animation-card-title"
            >
              Créez des profils pour les enfants.
            </h1>
            <h2
              id=""
              class="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Les enfants découvrent de nouvelles aventures et retrouvent leurs
              personnages préférés dans un espace bien à eux, déjà inclus dans
              votre abonnement.
            </h2>
          </div>
          <div class="our-story-card-img-container">
            <div class="our-story-card-animation-container">
              <img
                alt=""
                class="our-story-card-img"
                src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbN6pi_bFc9A7RIro_XUCRVuEb-PNbPx2G8CMhztwzwCRI6k5QsMd_qUPPkb89KSQwBFg0ijdx88drv37Y4unvXzCjB-V0vIk3mP.png?r=a3e"
                data-uia="our-story-card-img"
              />
              <div
                class="our-story-card-animation"
                data-uia="our-story-card-animation"
              >
                <div class="our-story-card-animation-text"></div>
                <div
                  class="our-story-card-animation-custom"
                  data-uia="our-story-card-custom"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
          <div class="center-pixel" style={{ position: "absolute" }}></div>
        </div>
      </div>
      <div
        class="our-story-card animation-card downloadAndWatch flipped"
        data-uia-nmhp="downloadAndWatch"
        data-uia="our-story-card"
      >
        <div class="animation-card-container">
          <div class="our-story-card-text">
            <h1
              id=""
              class="our-story-card-title"
              data-uia="animation-card-title"
            >
              Téléchargez vos séries préférées pour les regarder hors connexion.
            </h1>
            <h2
              id=""
              class="our-story-card-subtitle"
              data-uia="our-story-card-subtitle"
            >
              Uniquement disponible dans les offres sans pub.
            </h2>
          </div>
          <div class="our-story-card-img-container">
            <div class="our-story-card-animation-container">
              <img
                alt=""
                class="our-story-card-img"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                data-uia="our-story-card-img"
              />
              <div
                class="our-story-card-animation"
                data-uia="our-story-card-animation"
              >
                <div class="our-story-card-animation-image">
                  <img
                    alt=""
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                </div>
                <div class="our-story-card-animation-text">
                  <div id="" class="text-0" data-uia="">
                    Stranger Things
                  </div>
                  <div id="" class="text-1" data-uia="">
                    Téléchargement en cours...
                  </div>
                </div>
                <div
                  class="our-story-card-animation-custom"
                  data-uia="our-story-card-custom"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
          <div class="center-pixel" style={{ position: "absolute" }}></div>
        </div>
      </div>
      <div
        class="our-story-card faq-card"
        data-uia-nmhp="faq"
        data-uia="our-story-card"
        id="faq"
      >
        <div class="our-story-card-text">
          <h1 id="" class="our-story-card-title" data-uia="faq-title">
            Foire aux questions
          </h1>
          <ul class="faq-list">
            <li
              class="faq-list-item"
              data-uia-nmhp="faq-list-item"
              data-uia-faq="what_is_netflix_ad_plan"
            >
              <button class="faq-question">
                Netflix, qu'est-ce que c'est&nbsp;?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Netflix est un service de streaming qui propose une vaste
                  sélection de séries, films, animes, documentaires et autres
                  programmes sur des milliers d'appareils connectés à Internet.
                  <br />
                  <br />
                  Regardez tout ce que vous voulez, quand vous voulez, à un prix
                  mensuel très attractif. Découvrez de nouveaux films et séries
                  chaque semaine, il y en a pour tous les goûts&nbsp;!
                </span>
              </div>
            </li>
            <li
              class="faq-list-item"
              data-uia-nmhp="faq-list-item"
              data-uia-faq="cost"
            >
              <button class="faq-question">
                Combien coûte Netflix&nbsp;?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Regardez Netflix sur votre smartphone, tablette,
                  Smart&nbsp;TV, ordinateur ou appareil de streaming, le tout
                  pour un tarif mensuel fixe. Les offres vont de 5,99&nbsp;€ à
                  17,99&nbsp;€ par mois. Pas de contrat ni de frais
                  supplémentaires.
                </span>
              </div>
            </li>
            <li
              class="faq-list-item"
              data-uia-nmhp="faq-list-item"
              data-uia-faq="netflix_with_ads"
            >
              <button class="faq-question">
                Qu'est-ce qui est différent dans une offre avec pub&nbsp;?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Une offre avec pub vous permet de profiter de films et séries
                  à un prix plus attractif. Vous pouvez regarder vos programmes
                  préférés avec de courtes pauses pub (certaines restrictions
                  sur l'emplacement et les appareils s'appliquent). Le
                  téléchargement n'est pas pris en charge et quelques films et
                  séries ne sont pas disponibles en raison de restrictions liées
                  aux licences.
                  <a href="https://help.netflix.com/node/126831">
                    En savoir plus
                  </a>
                  .
                </span>
              </div>
            </li>
            <li
              class="faq-list-item"
              data-uia-nmhp="faq-list-item"
              data-uia-faq="where_to_watch"
            >
              <button class="faq-question">
                Où puis-je regarder Netflix&nbsp;?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Netflix, c'est où vous voulez, quand vous voulez.
                  Connectez-vous à votre compte pour regarder Netflix en ligne
                  sur netflix.com depuis votre ordinateur ou tout appareil
                  connecté à Internet avec l'application Netflix, comme les
                  Smart&nbsp;TV, smartphones, tablettes, lecteurs de streaming
                  et consoles de jeu.
                  <br />
                  <br />
                  Vous pouvez aussi télécharger vos séries préférées avec
                  l'application iOS, Android ou Windows&nbsp;10. Téléchargez des
                  titres pour les regarder sur votre appareil mobile, même sans
                  connexion Internet. Emportez Netflix partout avec vous.
                </span>
              </div>
            </li>
            <li
              class="faq-list-item"
              data-uia-nmhp="faq-list-item"
              data-uia-faq="cancel"
            >
              <button class="faq-question">
                Comment puis-je annuler mon offre&nbsp;?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Netflix offre une grande souplesse. Pas de contrat compliqué.
                  Sans engagement. Deux clics suffisent pour annuler votre
                  compte en ligne. Pas de frais d'annulation&nbsp;: ouvrez ou
                  fermez votre compte à tout moment.
                </span>
              </div>
            </li>
            <li
              class="faq-list-item"
              data-uia-nmhp="faq-list-item"
              data-uia-faq="what_to_watch_nft"
            >
              <button class="faq-question">
                Que puis-je regarder sur Netflix&nbsp;?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Netflix propose un vaste catalogue comprenant notamment des
                  longs-métrages, des documentaires, des séries, des animes et
                  des programmes originaux Netflix primés. Regardez Netflix à
                  volonté, quand vous le voulez.
                </span>
              </div>
            </li>
            <li
              class="faq-list-item"
              data-uia-nmhp="faq-list-item"
              data-uia-faq="kids_value_prop"
            >
              <button class="faq-question">
                Est-ce que Netflix est adapté aux enfants&nbsp;?
                <svg
                  id="thin-x"
                  viewBox="0 0 26 26"
                  class="svg-icon svg-icon-thin-x svg-closed"
                  focusable="true"
                >
                  <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
              </button>
              <div class="faq-answer closed">
                <span id="" data-uia="">
                  Netflix Jeunesse est inclus dans votre abonnement et offre un
                  meilleur contrôle aux parents, ainsi qu'un espace dédié aux
                  enfants, avec des films et des séries destinés à toute la
                  famille.
                  <br />
                  <br />
                  Les profils Jeunesse comportent des fonctionnalités de
                  contrôle parental avec code&nbsp;PIN permettant de modifier la
                  catégorie d'âge des contenus que vos enfants peuvent regarder
                  et de bloquer des titres spécifiques.
                </span>
              </div>
            </li>
          </ul>
          <form class="cta-form email-form" data-uia="email-form" method="GET">
            <h3 class="email-form-title">
                Prêt à regarder Netflix&nbsp;? Télécharger notre application afin de profiter
              des meilleurs films et séries du moment.
            </h3>
            <div class="email-form-lockup">
              <div class="our-story-cta-container cta-link-wrapper">
              <Link to={txt} class="cta-btn-txt" target="_blank" download class="btn nmhp-cta btn-red nmhp-cta-extra-large btn-none btn-custom" type="button" autocomplete="off" tabindex="0" role="link" data-uia="our-story-cta-faq">
                Télécharger notre application
                  <span id="" class="chevron-right-arrow" data-uia="">
                    <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                      <desc>chevron</desc>
                      <path
                        d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                        fill="none"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/common/transparent_1x1.png"
          aria-hidden="true"
          alt=""
          style={{ position: "absolute" }}
        />
        <div class="center-pixel" style={{ position: "absolute" }}></div>
      </div>
    </div>
  );
};

export default Home;
