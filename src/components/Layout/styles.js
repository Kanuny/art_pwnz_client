import { StyleSheet } from 'aphrodite';

const blue = '#6D8BAD';

export default StyleSheet.create({
  blueLine: {
    backgroundColor: blue, 
  },
  topLine: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px',
  },
  bottomLine: {
    display: 'flex',
    alignItems: 'center',
    height: '40px',
  },
  layout: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
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
  },
  header: {
    margin: '80px 133px 34px 133px',
    display: 'flex',
  },
  h1: {
    fontSize: '48px',
    fontWeight: '400',
    width: '300px',
    margin: '0 180px 0 0',
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
  },
});
