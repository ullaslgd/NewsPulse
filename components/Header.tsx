import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>

 <View style={styles.wrapper} >
     <Image source={{uri :"https://xsgames.co/randomusers/avatar.php?g=female"}} style={styles.imgbox} />
     <View style={{gap:2}}>
            <Text style={styles.greeting}>Welcome user!</Text>
            <Text style={styles.greet}>Good Morning</Text>
     </View>
     </View>
    <TouchableOpacity>

       <Ionicons name='notifications-outline' size={24} color="black" />
    </TouchableOpacity>

    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
    container: {  // Corrected 'conatiner' to 'container'
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    imgbox: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    wrapper:{
        display:'flex',
        flexDirection:'row' ,
        gap:14 ,
        justifyContent:'center',
        alignItems:'center'
    },
    greeting:{
        fontSize:12,
        color:Colors.darkGrey,
    },
    greet:{
        fontSize:14,
        color:Colors.black,
        fontWeight:'bold',
    }
});
