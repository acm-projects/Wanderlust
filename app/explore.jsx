import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { Image } from 'expo-image';
import { Stack } from 'expo-router';

const Explore = () => {
  return (
    <>
    {/* This hides the header */}
   <Stack.Screen options={{ headerShown: false }} />
    <View style={styles.container}>
        
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/696/3000/2000"
          contentFit="cover"
          transition={1000}
          
        />
      </View>
   </>
    
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});