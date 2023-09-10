import { View, Text, SafeAreaView, Platform, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import * as Icons from "react-native-heroicons/outline"
import { useNavigation } from '@react-navigation/native'
import CategoriesComponent from '../components/CategoriesComponent'
import FeaturedComponent from '../components/FeaturedComponent'
import {featured} from '../modules/data'


export default function HomeScreen() {
	const navigation = useNavigation()
	const [featuredCategory, setFeaturedCategory] = useState([])

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])
	

	useEffect(() => {
		setFeaturedCategory(featured)
	}, [])



	return (
		<SafeAreaView className=" bg-white " style={{ paddingTop: Platform.OS === 'android' ? 25 : 0, flex: 1 }}>
			{/* Header */}
			<View className="flex-row pb-3 mx-4 space-x-2 items-center mt-2">
				
				<Icons.TvIcon size={30} color="#485696" />
				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
					<TouchableOpacity activeOpacity={0.38}>
						<Text className="font-bold text-xl items-baseline">
							Current Location
							<Icons.ChevronDownIcon size={17} color="#485696" />
						</Text>
					</TouchableOpacity>
				</View>
				<Image
					// style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: 'gray' }}
					source={require('../assets/images/dp.jpg')}
					className="w-3 h-3 bg-gray-300 rounded-full p-5"
				/>
			</View>

			{/* Search */}
			<View className="flex-row items-center mr-4 pb-2 space-x-2">
				<View className="flex-row space-x-2 bg-gray-200 flex-1 p-3 py-2 items-center">
					<Icons.MagnifyingGlassIcon size={20} color="gray" />
					<TextInput placeholder='Restaurants and Cuisines...' keyboardType='default' style={{ width: '90%' }} />
				</View>
				<Icons.AdjustmentsVerticalIcon size={22} color="#485696" />
			</View>


			{/* Body */}
			<ScrollView
				className='bg-gray-100'
				contentContainerStyle={{ paddingBottom: 30, }}
			>
				
				{/* Categories */}
				<CategoriesComponent />

				{/* FeaturedRows */}
				{featuredCategory && Array.isArray(featuredCategory) && featuredCategory.length ? featuredCategory.map((category) => (
					<FeaturedComponent
						key={category.id}
						id={category.id}
						title={category.name}
						description={category.short_description}
						featuredCategory={category.type}
						restaurants={category.restaurants}
					/>
				)) :
					<FeaturedComponent
						id='001'
						title="Featured"
						description="Paid placement from our partners"
						featuredCategory="featured"
					/>
				}
			</ScrollView>

		</SafeAreaView>
	)
}