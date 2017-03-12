import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  img: {
    width: '300px',
    height: '300px',
  },
  description: {
    margin: '20px 0 15px 0',
  },
  footer: {
    marginBottom: '35px',
  },
  share: {
    display: 'inline-block',
    padding: '5px 7px',
    backgroundColor: '#4267b2',
    border: '1px solid #4267b2',
    borderRadius: '2px',
    color: 'white',
  },
  shareLink: {
    color: 'white',
    marginLeft: '4px',
    textDecoration: 'none',
    ':visited': {
      color: 'white',
    }
  }
});
