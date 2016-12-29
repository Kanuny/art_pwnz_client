import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import { css } from 'aphrodite';

import styles from './styles';

export default function Layout(props) {
  return (
    <div className={css(styles.layout)} >
      <header>
        <div
          className={cx(
            css(styles.blueLine),
            css(styles.topLine),
          )}
        >
          <div> </div>
          <div className={css(styles.langPicker)} >
            <button className={css(styles.langBtn)} > RU </button>
            <button className={css(styles.langBtn)} > EN </button>
          </div>
        </div>
        <div className={css(styles.header)} >
          <h1 className={css(styles.h1)} >
            Yury Klapouh
          </h1>
          <nav className={css(styles.nav)} >
            <Link
              activeClassName={css(styles.active)}
              className={css(styles.link)}
              to="/home"
            >
              Home
            </Link>
            <Link
              activeClassName={css(styles.active)}
              className={css(styles.link)}
              to="/gallery"
            >
              Gallery
            </Link>
            <Link
              activeClassName={css(styles.active)}
              className={css(styles.link)}
              to="/videos"
            >
              Videos
            </Link>
            <Link
              activeClassName={css(styles.active)}
              className={css(styles.link)}
              to="/about"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      <div className={css(styles.container)}>
        {props.children}
      </div>

      <footer
        className={cx(
          css(styles.blueLine),
          css(styles.bottomLine),
        )}
      >
      </footer>
    </div>
  );
}
