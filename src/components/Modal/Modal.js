import React from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { close, send } from '../../redux/modules/modal';

import style from './styles';

function Modal(props) {
  let el;
  const data = {
    from: '',
    msg: '',
    name: '',
  }
  if (!props.opened) {
    return null;
  }

  function closeModal(e) {
    if (e.target !== el) {
      return ;
    }
    props.close();
  }

  function sendMsg(e) {
    if (!data.from.value || !data.name.value) {
      return;
    }
    e.preventDefault();

    props.send({
      from: data.from.value,
      name: data.name.value,
      message: data.msg.value,
    });
  }
  return (
    <div ref={(e) => el = e} onClick={closeModal} className={css(style.wrapper)}>
      <form className={css(style.form)}>
        <h1 className={css(style.title)}> Send a message </h1>
        <input
          className={css(style.input)}
          ref={(e) => data.name = e}
          name="name"
          required
          placeholder="Name"
          type="text"
        />
        <input
          className={css(style.input)}
          ref={(e) => data.from = e}
          name="from"
          required
          placeholder="Email"
          type="email"
        />
        <textarea
          className={css(style.input)}
          ref={(e) => data.msg = e}
          name="message"
          rows="7"
          placeholder="Message"
        />
        <div className={css(style.btnWrapper)}>
          <button className={css(style.send)} onClick={sendMsg}>
            Send
          </button>
          <button className={css(style.cancel)} onClick={props.close}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default connect(
  ({ modal }) => ({ opened: modal.opened }),
  { close, send },
)(Modal);
