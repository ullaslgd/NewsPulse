import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {  useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import axios from 'axios'
import { NewsDataType } from '@/types'
import { useEffect } from 'react'
import BreakingNews from '@/components/BreakingNews'



type Props = {

}



const Page = () => {

    const safeTop = useSafeAreaInsets().top;

    const [news, setNews] = useState<NewsDataType[]>([]);

    useEffect(() => {
        getBreakingNews()
    }, [])

    const getBreakingNews = async () => {

       try{
            const URl = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&country=in&language=en&image=1&removeduplicate=1&size=5`
            const result= await axios.get(URl);

            if(result && result.data ){
            setNews(result.data.results)
            console.log(result.data.results)

            }
         }
        catch(e:any){
            console.log(e.message)
        }
       }

  return (
    <View style={[styles.container, {paddingTop: safeTop}]
    } >
      <Header />
      <SearchBar />
     {news.length > 0 ? <BreakingNews newsList={news} /> : null}


    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    width: '100%',

  },
})
