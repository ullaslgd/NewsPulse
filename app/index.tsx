import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "../constants/Colors";
import Animated, { FadeIn, FadeInDown, FadeInRight } from 'react-native-reanimated';
import { StatusBar } from "expo-status-bar";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground source={require('../assets/images/getting-started.jpg')} style={{width: '100%', height: '100%'}} >
        <View style={styles.wrapper}>
      <Animated.Text style={styles.heading} entering={FadeInRight.delay(300).duration(400)}>Welcome to NewsPulse !</Animated.Text>
        <Animated.Text style={styles.description} entering={FadeInRight.delay(600).duration(400)}>Get the latest news from around the world</Animated.Text>
        <Animated.View entering={FadeIn.delay(1200).duration(400)} >
      <TouchableOpacity style={styles.button}onPress={() => router.replace("/(tabs)")}>
        <Text style={styles.btntext}>Get Started</Text>
      </TouchableOpacity>
      </Animated.View>
      </View>
      </ImageBackground>

    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical:120,
    gap:20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heading:{
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    lineHeight: 30,
    alignSelf: 'center',
  },
    description:{
        color: Colors.white,
        fontSize: 13,
        fontWeight: 'thin',
        alignSelf: 'center',
    },
    button:{
        backgroundColor: Colors.tint,
        paddingHorizontal: 38,
        paddingVertical: 14,
        borderRadius: 10,
      },
      btntext:{
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    }
});
