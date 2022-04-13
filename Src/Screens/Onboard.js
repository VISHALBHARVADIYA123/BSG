import React, { useState } from "react";
import { View, Text, StatusBar, Image, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import Swiper from "react-native-swiper";
import colors from "../Utils/colors";
import metrics from "../Utils/metrics";

const slides = [
    {
        id: 1,
        title: 'PLEDGE TO THE SDGs',
        titleBg: require('../Assets/heading-bg.png'),
        description: 'Towards 2030, I pledge to achieve the SDGs through my Sustainable Human Behaviour  ',
        image: require('../Assets/login_bg.png'),
        btn: 'PLEDGE',
        icon: require('../Assets/icons/icon-pledge.png'),
    },
    {
        id: 2,
        title: 'Learn about Sustainable Development Goals ',
        titleBg: require('../Assets/heading-bg.png'),
        description: 'Learn about the 17 SDGs and how you can contribute to each one of them in your daily actions ',
        image: require('../Assets/login_bg2.png'),
        btn: 'Login to Learn about SDGs',
    },
    {
        id: 3,
        title: 'Upload Actions on SDGs',
        titleBg: require('../Assets/heading-bg.png'),
        description: 'Upload your photos/videos working on the various SDGs and empower all others through your sustainable actions',
        image: require('../Assets/login_bg3.png'),
        btn: 'Login to Upload Your SDG Actions',
    },
    {
        id: 4,
        title: 'Participate in SDG Campaigns',
        titleBg: require('../Assets/heading-bg.png'),
        description: 'Participate in various SDG Campaigns and take small steps every day to make "Sustainable Human Behaviour" as a basic way of life',
        image: require('../Assets/login_bg4.png'),
        btn: 'Login to Participate in SDG Campaigns',
    }
]

const DATA1 = [{ id: 'a' }, { id: 'b' }, { id: 'c' },]

const Onboard = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
            <Swiper
                showsButtons={false}
                scrollEnabled={true}

                loop={false}
                index={selectedIndex}
                activeDot={<View style={{ backgroundColor: '#007aff', width: "10%", height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, }} />}
                dot={<View style={{ backgroundColor: '#9182AE', width: "5%", height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, }} />}
            >


                {slides.map((item, index) => {
                    return (



                        <View style={{ flex: 1 }} >
                            <View style={{ backgroundColor: colors.white, flex: 1, marginTop: metrics.HEIGHT * 0.45, width: '100%', padding: '10%', }}>
                                <Text style={{ color: colors.black, fontSize: metrics.HEIGHT * 0.03, fontWeight: '700', textAlign: 'center' }}>
                                    {item.title}  </Text>
                                <View style={{ top: '5%', alignItems: 'center' }}>
                                    <Image source={item.titleBg} />
                                    <Text style={{ top: metrics.HEIGHT * 0.03, color: colors.black, fontSize: 16, fontWeight: '600' }}>
                                        {item.description}
                                    </Text>

                                </View>
                                {index === 0 ?
                                    <View style={{ marginTop: metrics.HEIGHT * 0.09, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '12%' }}>
                                        <View style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: "#D7EBD8", justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={item.icon} />
                                        </View>
                                        <View>
                                            <Text style={{ color: colors.black, fontWeight: '800', fontSize: 18 }}>
                                                4110546
                                            </Text>
                                            <Text style={{ color: colors.black }}>
                                                Global pledges
                                            </Text>
                                        </View>
                                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 30, width: 80, backgroundColor: colors.bgBlue, borderRadius: 20 }}>
                                            <Text style={{ color: colors.white }}>
                                                {item.btn}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 30, backgroundColor: colors.bgBlue, borderRadius: 20, marginTop: metrics.HEIGHT * 0.08, marginHorizontal: '10%' }}>
                                        <Text style={{ color: colors.white }}>
                                            {item.btn}
                                        </Text>
                                    </TouchableOpacity>
                                }
                            </View>


                            <ImageBackground
                                source={item.image}
                                style={{ height: metrics.HEIGHT * 0.45, width: '100%', position: 'absolute', top: 0, borderTopRightRadius: 60, borderTopLeftRadius: 60 }}
                                resizeMode="stretch"
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '80%', padding: '10%' }}>

                                    </View>
                                    <View style={{ top: '5%', }}>
                                        <TouchableOpacity
                                            // onPress={() => props.navigation.replace('BecomeMember')}
                                            style={{ justifyContent: 'center', alignItems: 'center', height: 30, width: 70, backgroundColor: colors.bgBlue, borderRadius: 20 }}
                                        >
                                            <Text style={{ color: colors.white }}>
                                                SKIP
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        //  </View>
                    )
                })}
            </Swiper>

        </View>
    )
}

export default Onboard