import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  videoItem: {
    display: 'inline-block',
    marginBottom: '20px',
    width: '490px',
  },
  left: {
    marginRight: '20px',
  },
  name: {
    textAlign: 'center',
    fontSize: '22px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontWeight: '400',
    margin: '5px 0 0 0',
  },
  galleryWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 270px)',
    justifyContent: 'space-between',
  },
  videosWrapper: {
    flex: 1,
    marginTop: '40px',
  },
});
