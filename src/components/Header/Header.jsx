import React from "react";
import style from "./Headerstyle.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerWrap}>
        <div className={style.headerMain}>
          <div className={style.logo}>
            <Link to="/">
              <img src="/img/logo.png" alt="Наш логотип" />
            </Link>
          </div>
          <Link to="/" className={style.headerButton}>
            Лиги
          </Link>
          <Link to="/teams" className={style.headerButton}>
            Команды
          </Link>
        </div>
        <div className={style.social}>
          <a href="https://vk.com/super_dinoo">
            <img src="/img/vk.png" alt="вк" className={style.icone} />
          </a>
          <a href="https://t.me/super_dinoo">
            <img src="/img/tg.png" alt="телеграмм" className={style.icone} />
          </a>
          <a href="https://www.instagram.com/mr.serzh_73">
            <img src="/img/inst.png" alt="инст" className={style.icone} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
