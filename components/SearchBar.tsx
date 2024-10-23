import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { TextInput } from 'react-native'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <View style={styles.container}>
   <View style={styles.searchbar}>
    <Ionicons name='search' size={24} color={Colors.lightGrey} />
    <TextInput placeholder='Search for news' placeholderTextColor={Colors.lightGrey} style={styles.searchtxt} autoCapitalize='none'  />
   </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginBottom: 20,

    },
    searchbar:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    searchtxt:{
        color: Colors.darkGrey,
        fontSize: 16,
        marginLeft: 10,
        overflow: 'hidden',
    }
})
