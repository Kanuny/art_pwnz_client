import { StyleSheet } from 'aphrodite';
import back from './back.svg';
export default StyleSheet.create({
  container: {
    margin: '55px 0 70px 0',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  inquiry: {
    backgroundColor: '#6D8BAD',
    border: '1px solid #6D8BAD',
    padding: '2px',
    width: '130px',
    marginLeft: '7px',
    cursor: 'pointer',
    fontSize: '22px',
    color: 'white',
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previewWrapper: {
    marginBottom: '24px',
    width: '100px',
    height: '100px',
  },
  previewContainer: {
    width: '100px',
    marginLeft: '24px',
  },
  mainView: {
    width: '100%',
  },
  mainContainer: {
    width: '100%',
  },
  previewImage: {
    width: '100px',
    marginBottom: '24px',
    height: '100px',
    opacity: '1',
    cursor: 'pointer',
  },
  active: {
    opacity: '0.4',
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '30px',
    fontSize: '32px',
    color: 'black',
    cursor: 'pointer',
    textDecoration: 'none',
    ':visited': {
      color: 'black',
      textDecoration: 'none',
    },
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px 0',
    fontSize: '24px',
  },
  postInfo: {
    marginTop: '60px',
    fontSize: '24px',
  },
  description: {
    width: 'calc(100% - 124px)',
  },
  back: {
    width: '22px',
    height: '20px',
    display: 'inline-block',
    marginRight: '4px',
    backgroundImage: `url(${back})`,
  },
});
