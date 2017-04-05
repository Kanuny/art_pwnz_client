import { StyleSheet } from 'aphrodite';

const inputColor = '#bfcfe1';

export default StyleSheet.create({
  wrapper: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0, 0.6)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    margin: 'auto',
    backgroundColor: 'white',
    width: '600px',
  },
  input: {
    backgroundColor: inputColor,
    border: '1px solid #979797',
    display: 'block',
    width: '500px',
    margin: '20px 50px',
    padding: '4px',
    fontSize: '18px',
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    margin: '0 38px 50px 0',
    fontSize: '18px',
  },
  cancel: {
    border: '1px solid #979797',
    color: 'white',
    backgroundColor: '#df8d8d',
    padding: '8px',
    width: '120px',
    marginLeft: '10px',
    fontSize: '18px',
  },
  title: {
    display: 'block',
    textAlign: 'center',
    fontSize: '22px',
    margin: '50px 0',
  },
  send: {
    border: '1px solid #979797',
    color: 'white',
    fontSize: '18px',
    backgroundColor: '#6d8bad',
    padding: '8px',
    width: '120px',
    marginLeft: '10px',
  },
});
