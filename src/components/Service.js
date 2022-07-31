import parse from "html-react-parser";
import { useEffect, useState } from "react";
import {fatchData, getLocale} from "../utilits";
import ServicePopup from "./popup/ServicePopup";
import {useTranslation} from "next-export-i18n";

const Service = ({ dark }) => {
  const [popupdata, setPopupdata] = useState({});
  const [popup, setPopup] = useState(false);
  const { t } = useTranslation();
  const service = t('service')
  const data = t('services')

  useEffect(async () => {
    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  }, []);

  const onClick = (index) => {
    setPopup(true);
    setPopupdata(data && data[index]);
  };

  return (
    <div className="dizme_tm_section" id="service">
      <ServicePopup
        data={popupdata}
        open={popup}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>{t('nav.service')}</span>
            <h3>{service.title}</h3>
            <p>
              {service.desc}
            </p>
          </div>
          <div className="service_list">
            <ul>
              {data &&
                data.map(
                  (data, i) =>
                    data && (
                      <li
                        className={`wow ${
                          (i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                        }`}
                        data-wow-duration="1s"
                        key={i}
                        onClick={() => onClick(i)}
                      >
                        <div className="list_inner tilt-effect">
                          <span className="icon">
                            {parse(data.icon.svg)}
                            {dark ? (
                              <img
                                className="back"
                                src={data.icon.iconBgDark}
                                alt="image"
                              />
                            ) : (
                              <img
                                className="back"
                                src={data.icon.iconBg}
                                alt="image"
                              />
                            )}
                          </span>
                          <div className="title">
                            <h3>{data.title}</h3>
                            <span className="price">
                              {service.from} <span>RM{data.price}</span>
                            </span>
                          </div>
                          <div className="text">
                            <p>{data.shortDec}</p>
                          </div>
                          <a className="dizme_tm_full_link" href="#" />
                          <img
                            className="popup_service_image"
                            src="img/service/1.jpg"
                            alt="image"
                          />
                        </div>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/service/5.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Service;
