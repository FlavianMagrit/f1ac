import { Animated, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Loader = () => {
    const spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        })
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });


    return (
        <View className="h-full justify-center items-center">
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <MaterialCommunityIcons name="steering" color="black" size={100} />
            </Animated.View>
            <Text className="text-lg font-bold italic">Loading...</Text>
        </View>
    );
}