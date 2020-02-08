import React from 'react';
import { View, Text, Image, ScrollView, FlatList, YellowBox } from 'react-native';
import styles from './styles';
import data from '../../utils/data';
import Card from '../../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
  YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])

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

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sectionOne}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>Popular</Text>
            <TouchableOpacity activeOpacity={0.6} >
              <Text style={styles.sectionLink}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardScroll}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <FlatList
                data={data.popular}
                keyExtractor={(i, t) => t.toString()}
                removeClippedSubviews
                horizontal={true}
                renderItem={({ item }) => (
                  <Card data={item} />
                )}
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.sectionOne}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>New</Text>
            <TouchableOpacity activeOpacity={0.6} >
              <Text style={styles.sectionLink}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardScroll}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <FlatList
                data={data.new}
                keyExtractor={(i, t) => t.toString()}
                removeClippedSubviews
                horizontal={true}
                renderItem={({ item }) => (
                  <Card data={item} />
                )}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>

    </View>
  );
};

export default Home;
