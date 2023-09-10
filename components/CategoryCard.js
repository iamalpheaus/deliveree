import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function CategoryCard({ imgUrl, title }) {
    return (
        <TouchableOpacity className="relative mr-2" activeOpacity={0.48}>
            <Image
                source={{
                    uri: imgUrl
                }}
                className="h-20 w-20 rounded"
            />

            <View className="rounded" style={{width:'100%', height:'100%', backgroundColor:'#000000', position:'absolute', opacity:0.2}}>
            </View>
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    )
}