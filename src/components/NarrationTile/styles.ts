import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b1acb9',
  },

  book: {
    width: 300,
    height: 390,
    position: 'relative',
  },

  bar: {
    position: 'absolute',
    width: 3,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    left: 15,
    zIndex: 101,
  },

  firstPage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    zIndex: 10,
    borderTopWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    elevation: 30,
  },

  secondPage: {
    left: -7,
    top: 2,
    width: 12,
    height: '103%',
    position: 'absolute',
    transform: [{ rotateY: '-60deg' }],
    backgroundColor: '#D9559D',
    borderBottomEndRadius: 30,
  },

  thirdPage: {
    bottom: -22.5,
    width: '90%',
    height: 40,
    left: -0.5,
    position: 'absolute',
    backgroundColor: '#C1C2C1',
    transform: [{ rotateX: '60deg' }],
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
});
