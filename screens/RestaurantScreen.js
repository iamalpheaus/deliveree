import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
import * as IconsSolid from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      short_description,
      rating,
      long,
      dishes,
      lat,
      genre,
      address,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView key={id}>
      <StatusBar
        hideTransitionAnimation='fade'
        barStyle={"light-content"}
      />
      <View className='relative'>
        <Image
          source={{
            uri: imgUrl,
          }}
          className='h-56 w-full bg-gray-300 p-4'
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className='absolute left-5 top-14 rounded-full bg-gray-100 p-2'>
          <Icons.ArrowLeftIcon
            size={20}
            color='#00CCBB'
          />
        </TouchableOpacity>
      </View>
      <View className='bg-white'>
        <View className='px-4 pt-4'>
          <Text className='text-3xl font-bold'>{title}</Text>
          <View className='my-1 flex-row space-x-2'>
            <View className='flex-row items-center space-x-1'>
              <IconsSolid.StarIcon
                size={22}
                opacity={0.5}
                color={"green"}
              />
              <Text className='text-xs text-gray-500'>
                <Text className='text-green-700'>{rating} • </Text>
                {genre}
              </Text>
            </View>
            <View className='flex-row items-center space-x-1'>
              <IconsSolid.MapPinIcon
                size={22}
                opacity={0.4}
                color={"gray"}
              />
              <Text className='text-xs text-gray-500'>Nearby • {address}</Text>
            </View>
          </View>
          <Text className='mt-2 pb-4 text-gray-500'>{short_description}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          className='flex-row items-center space-x-2 border-y border-gray-300 p-3'>
          <Icons.QuestionMarkCircleIcon
            size={20}
            color={"gray"}
            opacity={0.6}
          />
          <Text className='text-base flex-1 pl-2 font-black'>
            Have a food allergy?
          </Text>
          <Icons.ChevronRightIcon
            size={20}
            color={"#00CCBB"}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text className='mb-3 px-4 pt-6 text-xl font-bold'>Menu</Text>
        {/* Dish Rows */}
        {dishes && Array.isArray(dishes) ? dishes.map(dish =>(
          <DishRow 
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        // console.log(dish.name)
            // <Text key={dish.id}>{dish.name}</Text>
        )) : <Text>No dishes</Text>}
      </View>
    </ScrollView>
  );
}
