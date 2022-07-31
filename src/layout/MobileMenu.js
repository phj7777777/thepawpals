import { useState } from "react";
import {LanguageSwitcher, useTranslation} from "next-export-i18n";

const MobileMenu = ({ logo }) => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  const nav = t('nav')
  return (
    <div className="dizme_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src={logo ? logo : "img/logo/logo.png"} alt="image" />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">

            <li className="current">
              <a href="#home"  onClick={() => setToggle(!toggle)} >{nav.home}</a>
            </li>
            <li>
              <a href="#about" onClick={() => setToggle(!toggle)}>{nav.about}</a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setToggle(!toggle)}>{nav.portfolio}</a>
            </li>
            <li>
              <a href="#service" onClick={() => setToggle(!toggle)}>{nav.service}</a>
            </li>
            <li>
              <a href="#blog" onClick={() => setToggle(!toggle)}>{nav.blog}</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setToggle(!toggle)}>{nav.contact}</a>
            </li>
            <div className="langSwitcher" onClick={() => setToggle(!toggle)}>
              <LanguageSwitcher lang="zh">中文</LanguageSwitcher> |{' '}
              <LanguageSwitcher lang="en">en</LanguageSwitcher>
            </div>


            <li className="download_cv">
              <a id="Setmore_button_iframe"
                 href="https://booking.setmore.com/scheduleappointment/38e32976-4fbc-45d5-98c3-4ede8a823aff">
                <span>{nav.booking_now}</span>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
