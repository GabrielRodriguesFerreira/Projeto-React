import React, { Suspense } from "react";
import home from "../../assets/icones/home-ativo.png";
import MaisCurtidas from "../../assets/icones/mais-curtidas-inativo.png";
import MaisVistas from "../../assets/icones/mais-vistas-inativo.png";
import Novas from "../../assets/icones/novas-inativo.png";
import SurpreendaMe from "../../assets/icones/surpreenda-me-inativo.png";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="" />
          <a href="/">Inicio</a>
        </li>
        <li className={styles.menu__item}>
          <img src={MaisCurtidas} alt="" />
          <a href="/">Mais Curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={MaisVistas} alt="" />
          <a href="/">Mais Vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={Novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={SurpreendaMe} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
