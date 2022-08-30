import parse from "html-react-parser";
import {fatchData, getLocale} from "../utilits";
import { useTranslation, useLanguageQuery } from 'next-export-i18n';


const Home = ({ dark }) => {

  const { t } = useTranslation();
  const data = t('info')

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div
          className="background"
          data-img-url={`img/slider/${dark ? 2 : 1}.jpg`}
          // style={{ backgroundImage: `img/slider/${dark ? 2 : 1}.jpg` }}
        />

        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">

                <h3 className="orangeText">{t('home.welcome')}</h3>
              </div>
              <div className="name">
                <h3>{t('info.name')}</h3>
              </div>
              <div className="job">
                <h4>
                  <span>{t('home.tag1')}</span>{" "}
                    <span className="purpleText">{t('home.tag2')}</span><span className="redText"> ❤</span>
                </h4>
              </div>

              <div className="text">
                <h6>{t('home.desc')}</h6>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <a className="anchor" href="#about">
                    <span>{t('nav.booking_now')}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <img  style={{borderRadius: '16px'}}
                  src={data && data.img ? data.img : "/img/slider/avatar.png"}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dizme_tm_down">
          <a className="anchor" href="#about">
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
