import {LanguageSwitcher, useTranslation} from "next-export-i18n";


const Header = ({logo}) => {

    const { t } = useTranslation();
    const nav = t('nav')

    return (
        <div className="dizme_tm_header">
            <div className="container">
                <div className="inner">
                    <div className="logo">
                        <a href="#">
                            {logo && (
                                <img src={logo ? logo : "img/logo/logo.png"} alt="image"/>
                            )}
                        </a>
                    </div>
                    <div className="menu">
                        <ul className="anchor_nav">
                            <li className="current">
                                <a href="#home">{nav.home}</a>
                            </li>
                            <li>
                                <a href="#about">{nav.about}</a>
                            </li>
                            <li>
                                <a href="#portfolio">{nav.portfolio}</a>
                            </li>
                            <li>
                                <a href="#service">{nav.service}</a>
                            </li>
                            <li>
                                <a href="#blog">{nav.blog}</a>
                            </li>
                            <li>
                                <a href="#contact">{nav.contact}</a>
                            </li>
                            <li className="download_cv">
                                <a id="Setmore_button_iframe"
                                   href="https://booking.setmore.com/scheduleappointment/38e32976-4fbc-45d5-98c3-4ede8a823aff">
                                    <span>{nav.booking_now}</span>
                                </a>
                            </li>

                            <div className="langSwitcher">
                                <LanguageSwitcher lang="zh">中文</LanguageSwitcher> |{' '}
                                <LanguageSwitcher lang="en">en</LanguageSwitcher>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
