import { StyleSheet } from 'aphrodite';

const blue = '#6D8BAD';

export default StyleSheet.create({
  item: {
    display: 'inline-block',
    width: '31%',
    height: 'calc(31% + 30px)',
    margin: '0 20px 20px 0',
    color: 'black',
    textDecoration: 'none',
    ':visited': {
      color: 'black',
      textDecoration: 'none',
    },
  },
  img: {
    width: '100%',
    height: '100%',
  },
  galleryWrapper: {
    padding: '0 0 10px 0',
  },
  itemName: {
    textAlign: 'center',
    fontSize: '22px',
  },
  galleryWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 270px)',
    justifyContent: 'space-between',
  },
  itemWrapper: {
    flex: 1,
  },
  filterWrapper: {
    margin: 'auto',
    marginBottom: '30px',
  },
  filterLink: {
    color: 'black',
    fontSize: '22px',
    textDecoration: 'none',
    ':visited': {
      color: 'black',
      textDecoration: 'none',
    },
  },
  filterActive: {
    fontWeight: 'bold',
  },
});
