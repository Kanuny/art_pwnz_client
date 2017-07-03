import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import { css } from 'aphrodite';
import { connect } from 'react-redux';

import { changeLocale } from '../../redux/modules/locale';
import LocalMsg from '../../helpers/localization';
import Modal from '../Modal/Modal';
import { open } from '../../redux/modules/modal';

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
          <div className={css(styles.socialWrapper)}>
            <a
              className={css(styles.socialLink)}
              target="_blank"
              href="https://www.youtube.com/channel/UCU7Q-7n4bcxB6zPOxSFXZUg"
            >
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100013131251099"
              className={css(styles.socialLink)}>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a className={css(styles.socialLink)} onClick={props.open}>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
          </div>
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
        <span className={css(styles.copyright)}> © 2017 Yury Klapouh </span>
      </footer>
      <Modal />
    </div>
  );
}

export default connect(
  ({ locale }) => ({ locale: locale.locale }),
  { changeLocale, open },
)(Layout);
