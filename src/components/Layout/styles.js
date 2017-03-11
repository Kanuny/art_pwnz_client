import { StyleSheet } from 'aphrodite';

const blue = '#6D8BAD';

export default StyleSheet.create({
  blueLine: {
    backgroundColor: blue,
  },
  active: {
    color: 'white',
  },
  topLine: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    width: '100%',
    justifyContent: 'space-between',
    height: '50px',
  },
  bottomLine: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    height: '40px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  layout: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    width: '1020px',
    margin: '0 auto 50px auto',
  },
  langPicker: {
    margin: '10px',
    alignSelf: 'center',
  },
  langBtn: {
    margin: '0 3px 0 3px',
    background: 'none',
    border: 'none',
    color: 'black',
    cursor: 'pointer',
    appearance: 'none',
  },
  header: {
    margin: '80px auto 47px auto',
    display: 'flex',
    justifyContent: 'space-between',
    width: '1020px',
  },
  socialWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
  },
  socialLink: {
    fontSize: '9pt',
    width: '20px',
    textAlign: 'center',
    height: '20px',
    border: '2px solid white',
    borderRadius: '15px',
    lineHeight: '20px',
    color: 'white',
    marginRight: '7px',
    cursor: 'pointer',
  },
  h1: {
    fontSize: '48px',
    fontWeight: '400',
    width: '370px',
    margin: '0 110px 0 0',
  },
  nav: {
    alignSelf: 'center',
  },
  link: {
    fontSize: '32px',
    margin: '0 10px',
    color: 'black',
    textDecoration: 'none',
    ':visited': {
      color: 'black',
    },
  },
  active: {
    fontWeight: '800',
    color: 'white',
  },
  head: {
    paddingTop: '50px',
  },
  copyright: {
    width: '100%',
    textAlign: 'center',
  },
});
