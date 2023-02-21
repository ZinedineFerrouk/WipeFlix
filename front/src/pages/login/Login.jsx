import "../login/login.css";

const Login = () => {
  return (
    <div class="login-wrapper hybrid-login-wrapper">
      <div class="login-wrapper-background">
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
      </div>
      <div class="nfHeader login-header signupBasicHeader">
        <a
          href="/"
          class="svg-nfLogo signupBasicHeader"
          data-uia="netflix-header-svg-logo"
        >
          <svg
            viewBox="0 0 111 30"
            data-uia="netflix-logo"
            class="svg-icon svg-icon-netflix-logo"
            aria-hidden="true"
            focusable="false"
          >
            <g id="netflix-logo">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              ></path>
            </g>
          </svg>
          <span class="screen-reader-text">Accueil Netflix</span>
        </a>
      </div>
      <div class="login-body">
        <div>
          <noscript>
            <div
              data-uia="error-message-container"
              class="ui-message-container ui-message-error"
              role="alert"
            >
              <div class="ui-message-icon"></div>
              <div data-uia="text" class="ui-message-contents">
                Il semble que JavaScript soit désactivé. Veuillez l'activer pour
                restaurer toutes les fonctionnalités de la page.
              </div>
            </div>
          </noscript>
          <div
            class="login-content login-form hybrid-login-form hybrid-login-form-signup"
            data-uia="login-page-container"
          >
            <div class="hybrid-login-form-main">
              <h1 data-uia="login-page-title">S'identifier</h1>
              <form
                method="post"
                class="login-form"
                action=""
                data-bitwarden-watching="1"
              >
                <div
                  data-uia="login-field+container"
                  class="nfInput nfEmailPhoneInput login-input login-input-email"
                >
                  <div class="nfInputPlacement">
                    <div class="nfEmailPhoneControls">
                      <label class="input_id" placeholder="">
                        <input
                          type="text"
                          data-uia="login-field"
                          name="userLoginId"
                          class="nfTextField"
                          id="id_userLoginId"
                          value=""
                          tabindex="0"
                          autocomplete="email"
                          spellcheck="false"
                          dir=""
                          placeholder=""
                        />
                        <label for="id_userLoginId" class="placeLabel">
                          E-mail ou numéro de téléphone
                        </label>
                        <div
                          data-lastpass-icon-root="true"
                          style={{
                            position: "relative !important",
                            height: "0px !important",
                            width: "0px !important",
                            float: "left !important",
                          }}
                        ></div>
                      </label>
                      <div
                        data-uia="phone-country-selector+container"
                        class="ui-select-wrapper country-select"
                      >
                        <a
                          data-uia="phone-country-selector+target"
                          href="#"
                          class="ui-select-wrapper-link"
                        >
                          <div
                            class="ui-select-current"
                            placeholder='{"current_selected_country":"FR"}'
                          >
                            <span class="country-select-flag nf-flag nf-flag-fr"></span>
                            <span class="country-select-code">+33</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-uia="password-field+container"
                  class="nfInput nfPasswordInput login-input login-input-password"
                >
                  <div class="nfInputPlacement">
                    <div class="nfPasswordControls">
                      <label class="input_id" placeholder="">
                        <input
                          type="password"
                          data-uia="password-field"
                          name="password"
                          class="nfTextField"
                          id="id_password"
                          value=""
                          tabindex="0"
                          autocomplete="password"
                          spellcheck="false"
                          dir=""
                          placeholder=""
                        />
                        <label for="id_password" class="placeLabel">
                          Mot de passe
                        </label>
                        <div
                          data-lastpass-icon-root="true"
                          style={{
                            position: "relative !important",
                            height: "0px !important",
                            width: "0px !important",
                            float: "left !important",
                          }}
                        ></div>
                      </label>
                      <button
                        data-uia="password-visibility-toggle"
                        id="id_password_toggle"
                        type="button"
                        class="nfPasswordToggle"
                        title="Afficher le mot de passe"
                      >
                        AFFICHER
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  class="btn login-button btn-submit btn-small"
                  type="submit"
                  autocomplete="off"
                  tabindex="0"
                  data-uia="login-submit-button"
                >
                  S'identifier
                </button>
                <div class="hybrid-login-form-help">
                  <div class="ui-binary-input login-remember-me">
                    <input
                      type="checkbox"
                      class=""
                      name="rememberMe"
                      id="bxid_rememberMe_true"
                      value="true"
                      tabindex="0"
                      data-uia="rememberMe"
                      checked=""
                    />
                    <label
                      for="bxid_rememberMe_true"
                      data-uia="label+rememberMe"
                    >
                      <span class="login-remember-me-label-text">
                        Se souvenir de moi
                      </span>
                    </label>
                    <div class="helper"></div>
                  </div>
                  <a
                    class="login-help-link link"
                    target="_self"
                    data-uia="login-help-link"
                    href="/LoginHelp"
                  >
                    Besoin d'aide&nbsp;?
                  </a>
                </div>
                <input type="hidden" name="flow" value="websiteSignUp" />
                <input type="hidden" name="mode" value="login" />
                <input type="hidden" name="action" value="loginAction" />
                <input
                  type="hidden"
                  name="withFields"
                  value="rememberMe,nextPage,userLoginId,password,countryCode,countryIsoCode,recaptchaResponseToken,recaptchaError,recaptchaResponseTime"
                />
                <input
                  type="hidden"
                  name="authURL"
                  value="1676991500662.fdaobpAn1pcFQlj8mYEKZ0nPmgI="
                />
                <input type="hidden" name="nextPage" value="" />
                <input type="hidden" name="showPassword" value="" />
                <input type="hidden" name="countryCode" value="+33" />
                <input type="hidden" name="countryIsoCode" value="FR" />
              </form>
            </div>
            <div class="hybrid-login-form-other">
              <div class="login-signup-now" data-uia="login-signup-now">
                Première visite sur Netflix&nbsp;?
                <a class="" target="_self" href="/">
                  Inscrivez-vous
                </a>
                .
              </div>
              <div
                class="recaptcha-terms-of-use"
                data-uia="recaptcha-terms-of-use"
              >
                <p>
                  <span>
                    Cette page est protégée par Google reCAPTCHA pour nous
                    assurer que vous n'êtes pas un robot.
                  </span>
                  &nbsp;
                  <button
                    class="recaptcha-terms-of-use--link-button"
                    data-uia="recaptcha-learn-more-button"
                  >
                    En savoir plus.
                  </button>
                </p>
                <div
                  class="recaptcha-terms-of-use--disclosure"
                  data-uia="recaptcha-disclosure"
                >
                  <span id="" data-uia="recaptcha-disclosure-text">
                    Les informations collectées par Google reCAPTCHA sont
                    soumises aux
                    <a
                      href="https://policies.google.com/privacy"
                      id="recaptcha-privacy-link"
                      data-uia="recaptcha-privacy-link"
                      target="_blank"
                    >
                      Règles de confidentialité
                    </a>
                    et
                    <a
                      href="https://policies.google.com/terms"
                      id="recaptcha-tos-link"
                      data-uia="recaptcha-tos-link"
                      target="_blank"
                    >
                      Conditions d'utilisation
                    </a>
                    de Google, et sont utilisées pour fournir, maintenir et
                    améliorer le service reCAPTCHA, ainsi qu'à des fins de
                    sécurité générale (elles ne sont pas utilisées pour les
                    publicités personnalisées par Google).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
