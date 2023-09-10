import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as IconsSolid from "react-native-heroicons/solid";

export default function RestaurantCard({
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
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
      className='mr-3 bg-white shadow-md'>
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-36 w-64 rounded-sm'
      />

      <View className='px-3 pb-4'>
        <Text className='pt-2 text-lg font-bold'>{title}</Text>
        <View className='flex-row items-center space-x-1 pb-1'>
          <IconsSolid.StarIcon
            color='green'
            size={20}
            opacity={0.5}
          />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-700'>{rating} • </Text>
            {genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1'>
          <IconsSolid.MapPinIcon
            color='gray'
            opacity={0.4}
            size={20}
          />
          <Text className='text-xs text-gray-500'>Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
