import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import { css } from 'aphrodite';
import { connect } from 'react-redux';

import { changeLocale } from '../../redux/modules/locale';
import LocalMsg from '../../helpers/localization';

import styles from './styles';

function Layout(props) {
  return (
    <div className={css(styles.layout)} >
      <header className={css(styles.head)}>
        <div
          className={cx(
            css(styles.blueLine),
            css(styles.topLine),
          )}
        >
          <div> </div>
          <div className={css(styles.langPicker)} >
            <button
              className={
                cx(css(styles.langBtn), props.locale === 'ru' ? css(styles.active) : '')
              }
              onClick={() => props.changeLocale('ru')}
            > RU </button>
            <button
              className={
                cx(css(styles.langBtn), props.locale === 'en' ? css(styles.active) : '')
              }
              onClick={() => props.changeLocale('en')}
            > EN </button>
          </div>
        </div>
        <div className={css(styles.header)} >
          <h1 className={css(styles.h1)} >
            <LocalMsg ID="NAME" />
          </h1>
          <nav className={css(styles.nav)} >
            <Link
              activeClassName={css(styles.active)}
              className={css(styles.link)}
              to="/home"
            >
              <LocalMsg ID="HOME" />
            </Link>
            <Link
              activeClassName={css(styles.active)}
              className={css(styles.link)}
              to="/gallery"
            >
              <LocalMsg ID="GALLERY" />
            </Link>
            <Link
              activeClassName={css(styles.active)}
              className={css(styles.link)}
              to="/videos"
            >
              <LocalMsg ID="VIDEOS" />
            </Link>
            <Link
              activeClassName={css(styles.active)}
              className={css(styles.link)}
              to="/about"
            >
              <LocalMsg ID="ABOUT" />
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
        <span className={css(styles.copyright)}> © 2016 Yury Klapouh </span>
      </footer>
    </div>
  );
}

export default connect(
  ({ locale }) => ({ locale: locale.locale }),
  { changeLocale },
)(Layout);
