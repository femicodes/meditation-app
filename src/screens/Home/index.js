import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Day 7</Text>
        <View style={styles.jumbotron}>
          <Text style={styles.secondHeaderText}>Love and Accept{"\n"}Yourself</Text>
          <Image style={styles.nature} source={require('../../../assets/Illustration-nature.png')} />
        </View>
        <View style={styles.jumbotron}>
          <Image style={styles.nature2} source={require('../../../assets/Illustration-nature2.png')} />
          <Image style={styles.girl} source={require('../../../assets/Illustration-girl.png')} />
        </View>
      </View>

      <View>
        <Text>Popular</Text>
      </View>
    </View>
  );
};

export default Home;
