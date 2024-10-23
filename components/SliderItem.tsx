import { Dimensions, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { NewsDataType } from '@/types'
import { Image } from 'react-native'
import { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/constants/Colors'
import Animated from 'react-native-reanimated'


type Props = {
    sliderItem: NewsDataType
    index: number
    scrollx: SharedValue<number>
}

const { width} = Dimensions.get('screen')

const SliderItem = ({sliderItem , index, scrollx}: Props) => {

    const rnstyle = useAnimatedStyle(()=>{
        return{
            transform:[{
                translateX:interpolate(
                    scrollx.value,
                    [(index-1)*width,index*width,(index+1)*width],
                    [-width,0,width],
                    Extrapolation.CLAMP
                )
            },
        {
            scale:interpolate(
                scrollx.value,
                [(index-1)*width,index*width,(index+1)*width],
                [0.8,1,0.9],
                Extrapolation.CLAMP
            )
        }]
        }
    })
  return (
    <Animated.View style={[styles.container,rnstyle]}>
      <Image source={{uri:sliderItem.image_url}} style={styles.image} />
      <LinearGradient colors={['transparent','rgba(0,0,0,0.8)']} style={styles.background}>

        <View style={styles.srcinfo}>
            {sliderItem.source_icon && <Image source={{uri:sliderItem.source_icon}} style={styles.srcicon} />}
            <Text style={styles.name}>{sliderItem.source_name}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>{sliderItem.title}</Text>

      </LinearGradient>
    </Animated.View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
    container:{
        position:'relative',
        width:width,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },

    image:{
        width:width-30,
        height:200,
        borderRadius:20,
    },
    background:{
        position:'absolute',
        width:width-30,
        height:200,
        justifyContent:'flex-end',
        padding:10,
        borderRadius:20,
    },
    srcicon:{
        width:20,
        height:20,
        borderRadius:50,
    },
    srcinfo:{
        display:'flex',
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        marginBottom:5,
    },
    name:{
        color:Colors.white,
        fontSize:12,


    },
    title:{
        color:Colors.white,
        fontSize:14,
        fontWeight:'bold',
        lineHeight:20,
    }
})
