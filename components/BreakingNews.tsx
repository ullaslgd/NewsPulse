import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { NewsDataType } from '@/types'
import SLiderItem from './SliderItem'
import { useAnimatedRef } from 'react-native-reanimated'
import Animated from 'react-native-reanimated'
import { useSharedValue } from 'react-native-reanimated'
import { useState } from 'react'
import { useAnimatedScrollHandler } from 'react-native-reanimated'
import Pagination from './Pagination'


type Props = {
    newsList :Array<NewsDataType>
}

const BreakingNews = ({newsList}: Props) => {

    const [Data,setData] = useState(newsList);
    const ref =useAnimatedRef<Animated.FlatList<any>>();
    const scrollx = useSharedValue(0);
    const[paginationIndex,setPaginationIndex] = useState(0);

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll:(event)=>{
            scrollx.value = event.contentOffset.x;
        }
    })

  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>BreakingNews</Text>
      <View style={styles.wrapper}>
        <Animated.FlatList
        ref={ref}
          data={Data}
          keyExtractor={(_,index)=>`list_item${index}`}
          renderItem={({index,item})=>(
            <SLiderItem sliderItem={item} index={index} scrollx={scrollx}/>
          )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={onScrollHandler}
            scrollEventThrottle={16}
            onEndReachedThreshold={0.5}
            onEndReached={()=>{setData([...newsList, ...Data])}}
        />


      </View>
      <Pagination />
    </View>
  )
}

export default BreakingNews

const styles = StyleSheet.create({
    conatiner:{

        justifyContent:'flex-start',
        marginBottom:20,

    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:Colors.tint,
        marginLeft:20,
    },
    wrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',


    }
})
