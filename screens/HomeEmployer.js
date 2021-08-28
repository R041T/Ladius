import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { Card, Avatar } from "react-native-elements";
const Home = ({ navigation }) => {
  // Dummy Datas

  const initialCurrentLocation = {
    streetName: "LADIUS",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };

  const categoryData = [
    {
      id: 1,
      name: "Plumbing",
      icon: icons.plumbing,
    },
    {
      id: 2,
      name: "Cleaning",
      icon: icons.cleaning,
    },
    {
      id: 3,
      name: "Senior Care",
      icon: icons.senior,
    },
    {
      id: 4,
      name: "Cooking",
      icon: icons.cooking,
    },
    {
      id: 5,
      name: "Salon",
      icon: icons.salon,
    },
    {
      id: 6,
      name: "Baby Sitting",
      icon: icons.baby,
    },
    {
      id: 7,
      name: "Gardening",
      icon: icons.gardening,
    },
    {
      id: 8,
      name: "Fitness",
      icon: icons.yoga,
    },
    {
      id: 9,
      name: "Dog walking",
      icon: icons.dog,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: "Cleaning",
      rating: 4.8,
      categories: [1, 5, 7],
      priceRating: affordable,
      photo: icons.cleaning,
      location: "chennai",
      duration: "30 - 45 min",
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Amy",
      },
      menu: [
        {
          menuId: 1,
          name: "",
          rating: 4.8,
          photo: images.location,
          description: "I like pineapples",
          calories: 200,
          location: "chennai",
          price: 10,
        },
      ],
    },
    {
      id: 2,
      name: "Plumbing",
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: icons.plumbing,
      duration: "15 - 20 min",
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: images.avatar_2,
        name: "Jackson",
      },
      menu: [
        {
          menuId: 4,
          name: "Hawaiian Pizza",
          photo: images.location,
          description: "Canadian bacon, homemade pizza crust, pizza sauce",
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: "Tomato & Basil Pizza",
          photo: images.pizza,
          description:
            "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: "Tomato Pasta",
          photo: images.tomato_pasta,
          description: "Pasta with fresh tomatoes",
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: "Mediterranean Chopped Salad ",
          photo: images.salad,
          description: "Finely chopped lettuce, tomatoes, cucumbers",
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: "Senior Care",
      rating: 4.8,
      categories: [3, 8, 1],
      priceRating: expensive,
      photo: icons.senior,
      duration: "20 - 25 min",
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: images.avatar_3,
        name: "James",
      },
      menu: [
        {
          menuId: 8,
          name: "Chicago Style Hot Dog",
          photo: images.chicago_hot_dog,
          description: "Fresh tomatoes, all beef hot dogs",
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: "Cooking",
      rating: 4.8,
      categories: [3, 5, 8],
      priceRating: expensive,
      photo: icons.cooking,
      duration: "10 - 15 min",
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Ahmad",
      },
      menu: [
        {
          menuId: 9,
          name: "Sushi sets",
          photo: images.sushi,
          description: "Fresh salmon, sushi rice, fresh juicy avocado",
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: "Salon",
      rating: 4.8,
      categories: [1, 7, 2],
      priceRating: affordable,
      photo: icons.salon,
      duration: "15 - 20 min",
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Muthu",
      },
      menu: [
        {
          menuId: 10,
          name: "Kolo Mee",
          photo: images.kolo_mee,
          description: "Noodles with char siu",
          calories: 200,
          price: 5,
        },
        {
          menuId: 11,
          name: "Sarawak Laksa",
          photo: images.sarawak_laksa,
          description: "Vermicelli noodles, cooked prawns",
          calories: 300,
          price: 8,
        },
        {
          menuId: 12,
          name: "Nasi Lemak",
          photo: images.nasi_lemak,
          description: "A traditional Malay rice dish",
          calories: 300,
          price: 8,
        },
        {
          menuId: 13,
          name: "Nasi Briyani with Mutton",
          photo: images.nasi_briyani_mutton,
          description: "A traditional Indian rice dish with mutton",
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: "Baby Sitting",
      rating: 4.9,
      categories: [6, 4],
      priceRating: affordable,
      photo: icons.baby,
      duration: "35 - 40 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Jessie",
      },
      menu: [
        {
          menuId: 12,
          name: "Teh C Peng",
          photo: images.teh_c_peng,
          description: "Three Layer Teh C Peng",
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: "ABC Ice Kacang",
          photo: images.ice_kacang,
          description: "Shaved Ice with red beans",
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: "Kek Lapis",
          photo: images.kek_lapis,
          description: "Layer cakes",
          calories: 300,
          price: 20,
        },
      ],
    },
    {
      id: 7,
      name: "Fitness ",
      rating: 4.9,
      categories: [6, 4],
      priceRating: affordable,
      photo: icons.yoga,
      duration: "35 - 40 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Jessie",
      },
      menu: [
        {
          menuId: 12,
          name: "Teh C Peng",
          photo: images.teh_c_peng,
          description: "Three Layer Teh C Peng",
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: "ABC Ice Kacang",
          photo: images.ice_kacang,
          description: "Shaved Ice with red beans",
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: "Kek Lapis",
          photo: images.kek_lapis,
          description: "Layer cakes",
          calories: 300,
          price: 20,
        },
      ],
    },
    {
      id: 8,
      name: "Dog walking",
      rating: 4.9,
      categories: [6, 4],
      priceRating: affordable,
      photo: icons.dog,
      duration: "35 - 40 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Jessie",
      },
      menu: [
        {
          menuId: 12,
          name: "Teh C Peng",
          photo: images.teh_c_peng,
          description: "Three Layer Teh C Peng",
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: "ABC Ice Kacang",
          photo: images.ice_kacang,
          description: "Shaved Ice with red beans",
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: "Kek Lapis",
          photo: images.kek_lapis,
          description: "Layer cakes",
          calories: 300,
          price: 20,
        },
      ],
    },
    {
      id: 9,
      name: "",
      rating: 4.9,
      categories: [6, 4],
      priceRating: affordable,
      photo: icons.gardening,
      duration: "35 - 40 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Jessie",
      },
      menu: [
        {
          menuId: 12,
          name: "Teh C Peng",
          photo: images.teh_c_peng,
          description: "Three Layer Teh C Peng",
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: "ABC Ice Kacang",
          photo: images.ice_kacang,
          description: "Shaved Ice with red beans",
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: "Kek Lapis",
          photo: images.kek_lapis,
          description: "Layer cakes",
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50, marginBottom: 30 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              top: 5,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h3, color: "#FFFFFF" }}>
              {currentLocation.streetName}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.chat}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <View
        style={{ marginBottom: 0 }}
        // onPress={() =>
        //   navigation.navigate("Employer", {
        //     item,
        //     currentLocation,
        //   })
        // }
      >
        {/* Image */}
        <View
          style={{
            marginBottom: -15,
            bottom: 0,
            backgroundColor: "white",
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            height: 120,
            borderRadius: SIZES.radius,
          }}
        >
          <Avatar
            size="large"
            rounded
            title="MT"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            source={item.photo}
            containerStyle={{ top: 25, left: "75%", marginRight: 40 }}
          />
          {/* <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 100,
              borderRadius: SIZES.radius,
            }}
          /> */}

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 0,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            {/* <Text style={{ ...FONTS.h4, bottom: 20 }}>{item.duration}</Text> */}
          </View>
          <TouchableOpacity
            style={{
              width: 100,
              left: 10,
              backgroundColor: "orange",
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.1,
              shadowRadius: 5,
              height: 30,
              borderRadius: SIZES.radius,
            }}
            onPress={() =>
              navigation.navigate("Employer", {
                item,
                currentLocation,
              })
            }
          >
            <Text style={{ left: 17, top: 4 }}>Book Now</Text>
          </TouchableOpacity>
        </View>

        {/* Restaurant Info */}
        <Text style={{ ...FONTS.body1, elevation: 5, bottom: 80, left: 20 }}>
          {item.name}
        </Text>

        <View
          style={{
            marginTop: 0,
            flexDirection: "row",
          }}
        >
          {/* Rating */}
          {/* <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
              bottom: 220,
              left: 20,
            }}
          />
          <Text style={{ ...FONTS.body3, elevation: 5, bottom: 220, left: 20 }}>
            {item.rating}
          </Text> */}

          {/* Categories */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              elevation: 5,
              bottom: 220,
              left: 20,
            }}
          >
            {/* {item.categories.map((categoryId) => {
              return (
                <View style={{ flexDirection: "row" }} key={categoryId}>
                  <Text style={{ ...FONTS.body3 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
                    {" "}
                    .{" "}
                  </Text>
                </View>
              );
            })} */}

            {/* Price
            {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  elevation: 5,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}
              >
                $
              </Text>
            ))} */}
          </View>
        </View>
      </View>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {/* {renderMainCategories()} */}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
