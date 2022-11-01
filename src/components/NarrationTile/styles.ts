import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  book: {
    width: 176,
    height: 198,
    position: 'relative',
  },

  bar: {
    position: 'absolute',
    width: 2,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    left: 15,
    zIndex: 101,
  },

  firstPage: {
    zIndex: 20,
    width: '100%',
    height: '100%',
    elevation: 30,
    overflow: 'hidden',
    position: 'absolute',
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
  },

  secondPage: {
    left: -5,
    width: 8,
    height: '105.7%',
    position: 'absolute',
    transform: [{ rotateY: '-45deg' }],
    backgroundColor: '#D64B93',
    borderBottomEndRadius: 30,
  },

  thirdPage: {
    bottom: -24,
    width: '100%',
    height: 40,
    left: -1.5,
    position: 'absolute',
    backgroundColor: '#B8B8B8',
    transform: [{ rotateX: '70deg' }],
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },

  border: {
    position: 'absolute',
    width: '101%',
    height: 45,
    top: -1.6,
    zIndex: 0,
    left: -2,
    borderTopRightRadius: 100000,
    borderBottomRightRadius: 100000,
    transform: [{ skewY: '-0.8deg' }],
  },
});
