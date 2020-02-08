import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#2D31AC',
    borderBottomLeftRadius: getHeight(24),
    height: getHeight(313),
    width: getWidth(375),
    paddingTop: getHeight(54)
  },
  headerText: {
    textTransform: 'uppercase',
    fontFamily: 'sf-pro',
    fontWeight: '600',
    fontSize: getHeight(13),
    color: 'rgba(255, 255, 255, 0.5)',
    marginLeft: getHeight(16),
    letterSpacing: getHeight(1),
  },
  secondHeaderText: {
    marginLeft: getHeight(16),
    marginTop: getHeight(9),
    fontFamily: 'sf-pro',
    width: getWidth(237),
    height: getHeight(75),
    fontWeight: '600',
    fontSize: getHeight(30),
    letterSpacing: getHeight(1),
    lineHeight: getHeight(37),
    color: '#FFFFFF',
  },
  jumbotron: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  girl: {
    marginTop: -87,
    resizeMode: 'contain',
    width: getWidth(201),
    height: getHeight(208),
  },
  nature: {
    resizeMode: 'contain',
    width: getWidth(88),
    height: getHeight(151),
    marginLeft: getHeight(50),
    marginTop: -15
  },
  nature2: {
    resizeMode: 'contain',
    width: getWidth(164),
    height: getHeight(168),
    marginLeft: -25,
    marginTop: -40
  }
});

export default styles;
