import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Stack } from 'expo-router';

const Create = () => {
  return (
   <>
    <Stack.Screen options={{ headerShown: false }} />
    <View style ={styles.container}>
        <View style={styles.div}>
          <Text style={styles.text}>Create </Text>
        </View>   
    </View>

   </>
  )
}

export default Create


const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f2ed',
    alignItems: 'center',
    padding: 20,
  },
  div:{
    //alignItems: 'center',
    marginTop: 60,
  },
  text:{
    fontSize: 23,
    fontWeight: 'bold',
    padding: 20,
  },

})
