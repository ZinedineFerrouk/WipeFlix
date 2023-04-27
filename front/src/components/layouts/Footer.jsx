import { Link } from "react-router-dom";

const Footer = () => {
    
	return (
        <footer>
            <div className="our-story-card card-contents footer-card our-story-card-no-border" style={{position: "relative"}} data-uia-nmhp="footer"data-uia="our-story-card">
                  <div className="site-footer-wrapper centered dark">
                    <div className="footer-divider"></div>
                    <div className="site-footer">
                      <p className="footer-top">
                        Des questions&nbsp;? Appelez le
                        <a className="footer-top-a" href="tel:(+33) 0805-543-063"
                          >(+33) 0805-543-063</a
                        >
                      </p>
                      <ul className="footer-links structural">
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_faq_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://help.netflix.com/support/412"
                            placeholder="footer_responsive_link_faq"
                            ><span id="" data-uia="data-uia-footer-label"
                              >FAQ</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_help_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://help.netflix.com"
                            placeholder="footer_responsive_link_help"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Centre d'aide</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_account_item"
                        >
                          <Link
                            className="footer-link"
                            data-uia="footer-link"
                            to="/"
                            placeholder="footer_responsive_link_account"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Compte</span
                            ></Link>
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_media_center_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://media.netflix.com/"
                            placeholder="footer_responsive_link_media_center"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Presse</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_relations_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="http://ir.netflix.com/"
                            placeholder="footer_responsive_link_relations"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Relations Investisseurs</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_jobs_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://jobs.netflix.com/jobs"
                            placeholder="footer_responsive_link_jobs"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Recrutement</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_netflix_shop_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://netflix.shop/"
                            placeholder="footer_responsive_link_netflix_shop"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Boutique Netflix</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_gift_redeem_item"
                        >
                          <Link
                            className="footer-link"
                            data-uia="footer-link"
                            to="/"
                            placeholder="footer_responsive_link_gift_redeem"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Utiliser des cartes cadeaux</span
                            ></Link>
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_gift_buy_item"
                        >
                          <Link
                            className="footer-link"
                            data-uia="footer-link"
                            to="/"
                            placeholder="footer_responsive_link_gift_buy"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Acheter des cartes cadeaux</span
                            ></Link>
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_waysToWatch_item"
                        >
                          <Link
                            className="footer-link"
                            data-uia="footer-link"
                            to="/"
                            placeholder="footer_responsive_link_waysToWatch"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Modes de lecture</span
                            ></Link
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_terms_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://help.netflix.com/legal/termsofuse"
                            placeholder="footer_responsive_link_terms"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Conditions d'utilisation</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_privacy_separate_link_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://help.netflix.com/legal/privacy"
                            placeholder="footer_responsive_link_privacy_separate_link"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Confidentialité</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_cookies_separate_link_item"
                        >
                          <Link
                            className="footer-link"
                            data-uia="footer-link"
                            to="/"
                            placeholder="footer_responsive_link_cookies_separate_link"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Préférences de cookies</span
                            ></Link>
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_corporate_information_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://help.netflix.com/legal/corpinfo"
                            placeholder="footer_responsive_link_corporate_information"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Mentions légales</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_contact_us_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://help.netflix.com/contactus"
                            placeholder="footer_responsive_link_contact_us"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Nous contacter</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_speed_test_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://fast.com"
                            placeholder="footer_responsive_link_speed_test"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Test de vitesse</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_legal_guarantee_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://netflix.com/legal/guarantee"
                            placeholder="footer_responsive_link_legal_guarantee"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Garantie légale</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item"
                          placeholder="footer_responsive_link_legal_notices_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://help.netflix.com/legal/notices"
                            placeholder="footer_responsive_link_legal_notices"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Informations légales</span
                            ></a
                          >
                        </li>
                        <li
                          className="footer-link-item originals-link"
                          placeholder="footer_responsive_link_only_on_netflix_item"
                        >
                          <a
                            className="footer-link"
                            data-uia="footer-link"
                            href="https://www.netflix.com/fr/browse/genre/839338"
                            placeholder="footer_responsive_link_only_on_netflix"
                            ><span id="" data-uia="data-uia-footer-label"
                              >Seulement sur Netflix</span
                            ></a
                          >
                        </li>
                      </ul>
                      <div className="lang-selection-container" id="lang-switcher">
                        <div
                          data-uia="language-picker+container"
                          className="ui-select-wrapper"
                        >
                          <label htmlFor="lang-switcher-select" className="ui-label"
                            ><span className="ui-label-text"
                              >Choisir la langue</span
                            ></label
                          >
                          <div className="select-arrow medium prefix globe">
                            <select
                              data-uia="language-picker"
                              className="ui-select medium"
                              id="lang-switcher-select"
                              tabIndex="0"
                              placeholder="lang-switcher"
                            >
                              <option
                                selected=""
                                lang="fr"
                                value="/fr/"
                                data-language="fr"
                                data-country="FR"
                              >
                                Français
                              </option>
                              <option
                                lang="en"
                                value="/fr-en/"
                                data-language="en"
                                data-country="FR"
                              >
                                English
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <p className="footer-country">Netflix France</p>
                    </div>
                  </div>
                  <div className="center-pixel" style={{position: "absolute"}}></div>
                </div>
        </footer>
    );
};

export default Footer;
