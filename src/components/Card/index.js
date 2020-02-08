import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Card = ({ data }) => {
  return (
    <View style={[styles.container, { backgroundColor: data.color }]}>
      <View style={styles.innerContainer}>
        <View style={styles.texts}>
          <Text style={styles.heading}>{data.heading}</Text>
          <Text style={styles.main}>{data.main}</Text>
          <Text style={styles.time}>
            {data.steps} <Text style={styles.line}>|</Text> {data.time}
          </Text>
        </View>
        <View>
          <Image style={styles.illustration} source={require('../../../assets/Illustration-tree.png')} />
        </View>
      </View>
    </View>
  );
};

export default Card;
