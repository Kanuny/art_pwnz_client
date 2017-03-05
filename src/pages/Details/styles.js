import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  container: {
    margin: '55px 0 70px 0',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    height: '100px',
    marginBottom: '24px',
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '30px',
    fontSize: '32px',
    color: 'black',
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
});