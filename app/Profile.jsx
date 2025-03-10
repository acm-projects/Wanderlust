import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import profile1 from '../assets/images/profile1.jpg'


const Profile = () => {
  return (
    <>
    {/* This hides the header */}
    <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
      {/* Profile Info Section */}

      <View style={styles.profileInfo}>
        <Image 
          source={profile1} 
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nameBioContainer}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>Paris,France</Text>
        
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>54</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>834</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>162</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      
      {/* Solid line */}
      <View style={styles.solidLine} />
      
      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-circle" size={40} color="#386BF6" />
      </TouchableOpacity>
      
    </View>
   </>
  )
}

export default Profile


const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    marginTop: 50,
    
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3.5,
    borderColor: '#C7C7CC',
    resizeMode: 'cover',
  },
  editButton: {
    width: 150,
    marginRight: 20,
    height: 29,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(60, 60, 67, 0.18)',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '600',
    color: '#262626',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#262626',
  },
  statLabel: {
    fontFamily: 'Actor',
    fontSize: 13,
    color: '#262626',
  },
  nameBioContainer: {
    padding: 10,
    marginLeft: 20,
  },name: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '600',
    color: '#262626',
    marginBottom: 5,
  },
  bio: {
    fontFamily: 'Actor',
    fontSize: 12,
    color: '#262626',
  },
  photoGrid: {
    flex: 1,
    padding: 10,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gridImage: {
    width: '48%',
    height: 200,
    borderRadius: 2,
  },
  addButton: {
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
  },
  solidLine: {
    marginTop: 25,
    height: 2,
    backgroundColor: '#C7C7CC',
    marginHorizontal: 20,
  },

})
