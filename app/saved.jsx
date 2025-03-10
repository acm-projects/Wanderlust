import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Saved = () => {
  return (
    <>
     {/* This hides the header */}
     <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.wanderlustText}>Wanderlust</Text>
          <Text style={styles.savedText}>Saved</Text>
        </View>

        {/* Category Tabs */}
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={[styles.categoryTab, styles.activeTab]}>
            <Text style={[styles.categoryText, styles.activeCategoryText]}>Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Text style={styles.categoryText}>Hotels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Text style={styles.categoryText}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Text style={styles.categoryText}>Adventure</Text>
          </TouchableOpacity>
        </View>

        {/* Saved Items */}
        <ScrollView style={styles.savedItemsContainer}>
          <View style={styles.savedItem}>
            <Image 
              source={require('../assets/images/profile1.jpg')} 
              style={styles.itemImage}
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>Tanah Lot</Text>
              <Text style={styles.itemDate}>11 April - 17 April, 2022</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#425884" />
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default Saved

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 30,
    paddingTop: 100,
    marginBottom: 5,
  },
  wanderlustText: {
    fontFamily: 'Poppins',
    fontSize: 32,
    fontWeight: '400',
    color: '#000000',
    letterSpacing: -0.01,
  },
  savedText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '700',
    color: '#5E6A81',
    marginTop: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 28,
    marginTop: 20,
  },
  categoryTab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 33,
  },
  activeTab: {
    backgroundColor: 'rgba(23, 111, 242, 0.05)',
  },
  categoryText: {
    fontFamily: 'Actor',
    fontSize: 14,
    color: '#CFCAC0',
  },
  activeCategoryText: {
    color: '#43778D',
  },
  savedItemsContainer: {
    flex: 1,
    padding: 20,
  },
  savedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    shadowColor: 'rgba(66, 88, 132, 0.1)',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 5,
  },
  itemImage: {
    width: 51,
    height: 56,
    borderRadius: 7,
    backgroundColor: '#E6E6E6',
  },
  itemInfo: {
    flex: 1,
    marginLeft: 14,
  },
  itemTitle: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    color: '#767676',
  },
  itemDate: {
    fontFamily: 'Actor',
    fontSize: 8,
    color: 'rgba(66, 88, 132, 0.5)',
    marginTop: 2,
  },
})
