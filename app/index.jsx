import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <View className="flex-1 justify-center  bg-[#ff1500]">
      <StatusBar style="light" />

      <View className="ml-10 mt-20">
        <Image
          className="w-[73px] h-[73px]"
          source={require("../assets/images/logo.png")}
        />
        <Text
          style={{ fontSize: hp(6) }}
          className=" text-start text-white font-bold   "
        >
          Food for
        </Text>
        <Text
          style={{ fontSize: hp(6) }}
          className="text-start text-white font-bold  "
        >
          Everyone
        </Text>
      </View>

      <Image
        className="w-[416px] h-[420px] mt-20"
        source={require("../assets/images/welcame.png")}
      />
      <LinearGradient
        colors={["transparent", "#FF470B1A"]}
        style={{ width: wp(100), height: hp(15) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        className="flex justify-end pb-12 space-y-2"
      >
        <TouchableOpacity className="flex items-center justify-center  rounded-full  bg-white  mx-20 py-4">
          <Text className="text-[#FF460A]">Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
