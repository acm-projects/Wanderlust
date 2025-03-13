import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import GoogleIcon from '../assets/images/Google logo.png';


const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const router = useRouter();

  const handleSignUp = () => {
    // Placeholder signup logic
    alert('Account created successfully!');
    router.replace('/(tabs)');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or Register with</Text>
      <View style={styles.divider} />

      <TouchableOpacity style={styles.googleButton}>
      <Image 
          source={GoogleIcon}
          style={styles.googleIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
  },
  inputField: {
    width: '100%',
    padding: 18,
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  signUpButton: {
    width: '100%',
    padding: 17,
    backgroundColor: '#000000',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  orText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
    marginTop: 30,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#D8DADC',
    marginVertical: 10,
  },
  googleButton: {
    width: '100%',
    padding: 18,
    borderWidth: 1,
    borderColor: '#D8DADC',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 60,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  loginText: {
    fontSize: 14,
    color: '#386BF6',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SignUpScreen; 