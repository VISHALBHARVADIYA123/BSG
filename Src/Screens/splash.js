import React, { useEffect } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import colors from "../Utils/colors";
import metrics from "../Utils/metrics"

const Splash = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("Onboard")
        }, 2500)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
            <View style={{ height: metrics.HEIGHT * 0.4, justifyContent: 'center', alignItems: 'center', top: '5%' }}>
                <Image
                    source={require("../Assets/logo-bsg.png")}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require("../Assets/logo-bsg-for-sdg.png")}
                // style={{ height: metrics.HEIGHT * 0.3 }}
                />
            </View>
            <View style={{ top: '3%' }}>
                <Text style={{ fontSize: metrics.HEIGHT * 0.025, textAlign: 'center', color: colors.black, fontWeight: '600' }}>
                    Towards 2030
                </Text>
                <Text style={{ fontSize: metrics.HEIGHT * 0.025, textAlign: 'center', color: colors.black, fontWeight: '600' }}>
                    Achieving SDGs through
                </Text>
                <Text style={{ fontSize: metrics.HEIGHT * 0.025, textAlign: 'center', color: colors.black, fontWeight: '600' }}>
                    Sustainable Human Behaviour
                </Text>
            </View>
        </View>
    )
}

export default Splash
