import { useEffect, useState } from "react";
import {fatchData, getLocale} from "../utilits";
import {useTranslation} from "next-export-i18n";
const Contact = () => {

  const { t } = useTranslation();
  const data = t('contacts')
  const contact = t('contact')

  return (
      <div className="dizme_tm_section" id="contact">
        <div className="dizme_tm_contact">
          <div className="container">
            <div className="dizme_tm_main_title" data-align="center">
              <span>{contact.title}</span>
            </div>
            <div className="contact_inner">
              <div className="left wow fadeInLeft" data-wow-duration="1s">
                    <ul>
                      <li>
                        <div className="list_inner">
                          <div className="icon orangeBackground">
                            <i className="icon-location orangeText" />
                          </div>
                          <div className="short">
                            <h3>{contact.address}</h3>
                            <span>{data.address}</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="icon greenBackground">
                            <i className="icon-mail-1 greenText" />
                          </div>
                          <div className="short">
                            <h3>{contact.email}</h3>
                            <span>
                          <a href="#">{data.email}</a>
                        </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="icon purpleBackground">
                            <i className="icon-phone purpleText" />
                          </div>
                          <div className="short">
                            <h3>{contact.phn}</h3>
                            <span>{data.phn}</span>
                          </div>
                        </div>
                      </li>
                    </ul>
              </div>
              <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                        height={375}
                        style={{ width: "100%" }}
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    />
                    <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                    <br />
                  </div>
                </div>
                {/* Get your API here https://www.embedgooglemap.net */}
              </div>
              <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
                <img src="img/brushes/contact/2.png" alt="image" />
              </div>
            </div>
          </div>
          <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
            <img src="img/brushes/contact/1.png" alt="image" />
          </div>
        </div>
      </div>
  );
};
export default Contact;
