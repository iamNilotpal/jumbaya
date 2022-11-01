import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  book: {
    width: 176,
    height: 198,
    position: 'relative',
    elevation: 50,
  },

  bar: {
    position: 'absolute',
    width: 2,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    left: 8,
    zIndex: 30000,
  },

  firstPage: {
    zIndex: 2000,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
    borderTopRightRadius: 21,
    borderBottomRightRadius: 21,
    elevation: 20,
  },

  secondPage: {
    left: -5,
    width: 8,
    height: '103.6%',
    position: 'absolute',
    transform: [{ rotateY: '-47deg' }],
    backgroundColor: '#D64B93',
    borderBottomEndRadius: 30,
    elevation: 10,
  },

  thirdPage: {
    bottom: -25,
    width: '93%',
    height: 45,
    left: -1,
    zIndex: 1,
    elevation: 50,
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: '#BFBFBF',
    transform: [{ rotateX: '80deg' }],
    borderBottomRightRadius: 50,
  },

  border: {
    position: 'absolute',
    width: '101%',
    height: 45,
    top: -1.5,
    zIndex: 0,
    left: -2,
    borderTopRightRadius: 100000,
    borderBottomRightRadius: 100000,
    transform: [{ skewY: '-0.5deg' }],
  },
});
