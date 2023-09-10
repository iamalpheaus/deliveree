import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';


export default function FeaturedComponent({ title, description, featuredCategory, restaurants }) {
    return (
        <View>
            <View className="mt-5 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg text-black">{title}</Text>
                <Icons.ArrowRightIcon size={18} color="#485696" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 10
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4 px-2"
            >
                {/* Restaurant Card */}
                {restaurants && Array.isArray(restaurants) && restaurants.length && restaurants.map((restaurant) => (
					
                        <RestaurantCard key={restaurant._id} id={903} imgUrl={restaurant.imgUrl} title={restaurant.name} short_description="Best desserts this side of town" rating={restaurant.rating} long={restaurant.long} lat={restaurant.lat} genre={restaurant.type_of_food} address={restaurant.address} dishes={restaurant.dishes}/>
				)) 
				}
            </ScrollView>
        </View>
    )
}