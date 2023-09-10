import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

export default function CategoriesComponent() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingVertical: 10,
                marginLeft:16
            }}

        >
            <CategoryCard imgUrl="https://img.freepik.com/free-photo/breakfast-platter-with-mixed-combination-foods_114579-2109.jpg?w=1060&t=st=1693462801~exp=1693463401~hmac=9bebaea7ea7646f58a444bf3e23683450694249ca4110fc5101cd76fb79e32f5" title="English" />
            <CategoryCard imgUrl="https://img.freepik.com/free-photo/pieces-chicken-fillet-with-mushrooms-stewed-tomato-sauce-with-boiled-broccoli-rice-proper-nutrition-healthy-lifestyle-dietetic-menu-top-view_2829-20020.jpg?w=1060&t=st=1693462849~exp=1693463449~hmac=5ffa0beceb2dae7c98131128ee9970cf95f05d68e04ccbaed5054cee625ff4cd" title="Chinese" />
            <CategoryCard imgUrl="https://img.freepik.com/premium-photo/fufu-foofoo-foufou-fufuo-one-most-popular-food-native-ghanaian_101709-1146.jpg?w=740" title="African" />
            <CategoryCard imgUrl="https://img.freepik.com/free-photo/thai-food-tom-yum-kung-river-prawn-spicy-soup_1150-35451.jpg?size=626&ext=jpg&ga=GA1.2.1924136682.1692927585&semt=ais" title="Thai" />
            <CategoryCard imgUrl="https://randommer.io/images/foods/Ice%20Cream.webp" title="Desserts" />
            <CategoryCard imgUrl="https://randommer.io/images/foods/Chicken%20Tortilla%20Soup.webp" title="Japanese" />
            <CategoryCard imgUrl="https://randommer.io/images/foods/Green%20Bean%20Casserole%20With%20Fried%20Onions.webp" title="Italian" />
            <CategoryCard imgUrl="https://randommer.io/images/foods/Cookies.webp" title="American" />
        </ScrollView>
    )
}