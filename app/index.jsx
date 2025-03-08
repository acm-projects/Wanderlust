import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Feather';
import fujiImage from '../assets/images/fuji.png';
import { Feather } from '@expo/vector-icons';

const popularLocations = [
  {
    id: 1,
    name: 'Mount Fuji',
    city: 'Tokyo, Japan',
    image: fujiImage,
    rating: '4.8'
  },
  {
    id: 2,
    name: 'Eiffel Tower',
    city: 'Paris, France',
    image: require('../assets/images/profile2.jpg'),
    rating: '4.9'
  },
  {
    id: 3,
    name: 'Santorini',
    city: 'Greece',
    image: require('../assets/images/profile3.jpg'),
    rating: '4.7'
  },
  {
    id: 4,
    name: 'Bali',
    city: 'Indonesia',
    image: require('../assets/images/profile4.webp'),
    rating: '4.6'
  },
  {
    id: 5,
    name: 'New York',
    city: 'USA',
    image: require('../assets/images/profile5.webp'),
    rating: '4.5'
  }
];

const Home = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push('signup');
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Wanderlust</Text>
            <Text style={styles.subtitle}>Find your next adventure</Text>
          </View>
          <TouchableOpacity style={styles.surpriseMe} onPress={handleSignUp}>
            <Text style={styles.surpriseMeText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#CFCAC0" />
          <Text style={styles.searchText}>Find things to do</Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.popularPlaces}>Popular places</Text>
        
        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.categoryContainer}
          contentContainerStyle={styles.categoryContent}
        >
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Recommended</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Most viewed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Nearby</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Latest</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Explore section */}
        <View style={styles.exploreSection}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroll}
          >
            {popularLocations.map((location) => (
              <TouchableOpacity key={location.id} style={styles.exploreCard}>
                <Image
                  source={location.image}
                  style={styles.image}
                  resizeMode="cover"
                />
                <TouchableOpacity style={styles.heartButton}>
                  <Feather name="heart" size={25} color="#FFFFFF" />
                </TouchableOpacity>
                <View style={styles.cardContent}>
                  <Text style={styles.locationText}>{location.name}</Text>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cityText}>{location.city}</Text>
                    <Text style={styles.rating}>{location.rating} ★</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 32,
    fontWeight: '600',
    color: '#000000',
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '400',
    color: '#9DB2CE',
    marginTop: 5,
  },
  surpriseMe: {
    backgroundColor: 'rgba(29, 29, 29, 0.4)',
    borderRadius: 100,
    padding: 14,
    marginLeft: 20,
  },
  surpriseMeText: {
    fontFamily: 'Actor',
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  searchBar: {
    backgroundColor: '#F3F8FE',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 20,
  },
  searchText: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '600',
    color: '#CFCAC0',
    marginLeft: 10,
  },
  content: {
    paddingHorizontal: 20,
  
  },
  popularPlaces: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    color: '#2F2F2F',
    marginBottom: 16,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryContent: {
    paddingRight: 20,
    gap: 10,
  },
  categoryButton: {
    backgroundColor: '#386BF6',
    borderRadius: 33,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  categoryText: {
    fontFamily: 'Actor',
    fontSize: 14,
    color: '#FFFFFF',
  },
  exploreSection: {
    marginBottom: 20,
  },
  horizontalScroll: {
    paddingHorizontal: 20,
    gap: 20,
  },
  exploreCard: {
    width: 350,
    height: 420,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 12,
    borderRadius: 25,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  rating: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
