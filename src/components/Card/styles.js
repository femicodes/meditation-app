import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    /* alignItems: 'center',
    justifyContent: 'center', */
    width: getWidth(292),
    height: getHeight(165),
    borderRadius: getWidth(28),
    marginLeft: getWidth(15),
    marginRight: getWidth(5),
    paddingHorizontal: getWidth(15),
  },
  innerContainer: {
    paddingHorizontal: getHeight(4),
    marginVertical: getHeight(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texts: {

  },
  heading: {
    color: '#FFFFFF',
    fontFamily: 'sf-pro',
    fontWeight: '600',
    fontSize: getHeight(28),
    marginTop: -10
  },
  main: {
    width: getWidth(143),
    marginTop: getHeight(12),
    color: '#FFFFFF',
    fontWeight: '300',
  },
  time: {
    marginTop: getHeight(26),
    color: '#FFFFFF',
    fontWeight: '300',
    fontSize: getHeight(12),
  },
  line: {
    opacity: 0.5,
    borderColor: '#FFFFFF',
  },
  illustration: {
    width: getWidth(124),
    height: getHeight(135),
    resizeMode: 'contain',
    marginTop: -16,
  }
});

export default styles;
