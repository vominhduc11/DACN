import {
    Alert,
    Image,
    ImageBackground,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    View,
    Animated,
} from 'react-native';
import React, { useRef, useState } from 'react';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableWithoutFeedback } from 'react-native';

const Home = ({ navigation }) => {
    const [active, setActive] = useState(true);
    const [activeMenu, setActiveMenu] = useState(2);
    const [opacity, setOpacity] = useState(0);

    const marginLeft = useRef(new Animated.Value(0)).current;

    function handleChange(param) {
        setActive(param);
        if (param) {
            Animated.parallel([
                Animated.timing(marginLeft, {
                    toValue: 0, // opacity chuyển đến 1 (hoàn toàn hiện)
                    duration: 300, // thời gian hiệu ứng là 1 giây
                    useNativeDriver: false,
                }),
            ]).start(); // Kích hoạt animation
        } else {
            Animated.parallel([
                Animated.timing(marginLeft, {
                    toValue: 97, // opacity chuyển đến 1 (hoàn toàn hiện)
                    duration: 300, // thời gian hiệu ứng là 1 giây
                    useNativeDriver: false,
                }),
            ]).start(); // Kích hoạt animation
        }
    }

    function handleScrollScreen(event) {
        const contentOffset = event.nativeEvent.contentOffset;
        setOpacity(contentOffset.y / 123);
    }

    return (
        <>
            <StatusBar hidden></StatusBar>

            <View style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                {/* thanh tiềm kiếm , giỏ hàng, thông báo*/}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 30,
                        paddingVertical: 18,
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        zIndex: 2,
                        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                        borderBottomWidth: 1,
                        borderBottomColor: `rgba(238, 238, 238, ${opacity})`,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 2,
                            borderColor: '#00FFFF',
                            borderRadius: 30,
                            paddingHorizontal: 0,
                        }}>
                        <IconFeather
                            name="search"
                            size={20}
                            color="#000"
                            style={{ marginHorizontal: 10 }}
                        />
                        <TextInput
                            style={{
                                width: 130,
                                fontSize: 15,
                                color: '#000',
                                paddingVertical: 5,
                            }}
                            placeholder="Tìm kiếm ..."
                        />
                    </View>
                    <Text>
                        <IconFeather
                            name="shopping-cart"
                            size={20}
                            color="#000"
                        />
                    </Text>
                    <Text>
                        <IconAntDesign name="message1" size={20} color="#000" />
                    </Text>
                </View>

                <ScrollView
                    onScroll={handleScrollScreen}
                    showsVerticalScrollIndicator={false}>
                    {/* background */}
                    <ImageBackground
                        blurRadius={5}
                        style={{
                            height: 200,
                        }}
                        source={{
                            uri: 'https://img.freepik.com/free-photo/pouch-map-toy-airplane-blue-background-with-space-writing-text_23-2147958180.jpg',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 100,
                            }}>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                <IconMaterialIcons
                                    name="local-play"
                                    size={24}
                                    color="#663366"
                                />
                                <Text style={{ maxWidth: 50, fontSize: 10 }}>
                                    Vui chơi & Trải nghiệm
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                <IconFontAwesome5
                                    name="hotel"
                                    size={24}
                                    color="#FFCC66"
                                />
                                <Text style={{ maxWidth: 50, fontSize: 10 }}>
                                    Khách sạn
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                <IconMaterialIcons
                                    name="tour"
                                    size={24}
                                    color="#990000"
                                />
                                <Text style={{ maxWidth: 50, fontSize: 10 }}>
                                    Tour
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                <IconMaterialIcons
                                    name="directions-boat"
                                    size={24}
                                    color="#33FFFF"
                                />
                                <Text style={{ maxWidth: 50, fontSize: 10 }}>
                                    Du thuyền
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                <IconFontAwesome5
                                    name="hot-tub"
                                    size={24}
                                    color="#FF9999"
                                />
                                <Text style={{ maxWidth: 50, fontSize: 10 }}>
                                    Massage & Suối nước nóng
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                <IconFoundation
                                    name="trees"
                                    size={24}
                                    color="#009933"
                                />
                                <Text style={{ maxWidth: 50, fontSize: 10 }}>
                                    Phiêu lưu & khám phá thiên nhiên
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View
                        style={{
                            backgroundColor: '#fff',
                        }}>
                        {/* Tiếp tục lên ... */}
                        <View style={{ marginTop: 18, paddingLeft: 16 }}>
                            <Text
                                style={{
                                    fontSize: 17,
                                    fontWeight: '700',
                                    color: '#000',
                                }}>
                                Tiếp tục lên lịch Sydney
                                <IconEntypo
                                    name="chevron-thin-right"
                                    size={16}
                                    color="#000"
                                />
                            </Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{ marginTop: 12 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    {/* element */}
                                    <TouchableWithoutFeedback
                                        onPress={() =>
                                            navigation.navigate('Product')
                                        }>
                                        <View style={{ marginRight: 12 }}>
                                            <Image
                                                borderRadius={12}
                                                height={100}
                                                width={130}
                                                source={{
                                                    uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/fdbxep6vcao6inbj611w',
                                                }}
                                            />
                                            <Text
                                                numberOfLines={2}
                                                style={{
                                                    color: '#000',
                                                    marginTop: 8,
                                                    maxWidth: 130,
                                                }}>
                                                Du thuyền ăn tối sang trọng
                                                Opulence trên sông Chao Phraya
                                            </Text>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                    marginTop: 12,
                                                }}>
                                                đ 765,095
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </ScrollView>
                        </View>
                        {/* Xem gần đây */}
                        <View style={{ marginTop: 40, paddingLeft: 16 }}>
                            <Text
                                style={{
                                    fontSize: 17,
                                    fontWeight: '700',
                                    color: '#000',
                                }}>
                                Xem gần đây
                                <IconEntypo
                                    name="chevron-thin-right"
                                    size={16}
                                    color="#000"
                                />
                            </Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{ marginTop: 12 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    {/* element */}
                                    <TouchableWithoutFeedback
                                        onPress={() =>
                                            navigation.navigate('Product')
                                        }>
                                        <View style={{ marginRight: 12 }}>
                                            <Image
                                                borderRadius={6}
                                                height={50}
                                                width={75}
                                                source={{
                                                    uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/fdbxep6vcao6inbj611w',
                                                }}
                                            />
                                            <Text
                                                numberOfLines={2}
                                                style={{
                                                    color: '#000',
                                                    marginTop: 8,
                                                    maxWidth: 75,
                                                }}>
                                                Du thuyền ăn tối sang trọng
                                                Opulence trên sông Chao Phraya
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </ScrollView>
                        </View>
                        {/* Bạn muốn đi đâu chơi */}
                        <View style={{ marginTop: 28, paddingLeft: 16 }}>
                            <Text
                                style={{
                                    fontSize: 17,
                                    fontWeight: '700',
                                    color: '#000',
                                }}>
                                Bạn muốn đi đâu chơi
                                <IconEntypo
                                    name="chevron-thin-right"
                                    size={16}
                                    color="#000"
                                />
                            </Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{ marginTop: 12 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    {/* element */}
                                    <View
                                        style={{
                                            marginRight: 12,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            backgroundColor: '#F5F5F5',
                                            borderRadius: 30,
                                        }}>
                                        <Image
                                            borderRadius={30}
                                            height={50}
                                            width={50}
                                            source={{
                                                uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/fdbxep6vcao6inbj611w',
                                            }}
                                        />
                                        <View style={{ marginHorizontal: 15 }}>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                    fontSize: 12,
                                                }}>
                                                Tiếp tục khám phá
                                            </Text>
                                            <Text
                                                style={{
                                                    color: '#000',
                                                }}>
                                                TP Hồ Chí Minh
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        {/* Đề xuất và gần đây */}
                        <View style={{ marginTop: 28, paddingHorizontal: 16 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                }}>
                                <Text
                                    onPress={() => handleChange(true)}
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                        color: active ? '#FF9933' : '#000',
                                    }}>
                                    Đề xuất
                                </Text>
                                <Text
                                    onPress={() => handleChange(false)}
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                        marginLeft: 30,
                                        color: active ? '#000' : '#FF9933',
                                    }}>
                                    Gần đây
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: 187,
                                    height: 4,
                                    marginTop: 12,
                                }}>
                                <Animated.View
                                    style={{
                                        height: 4,
                                        backgroundColor: '#FF9933',
                                        width: 75,
                                        marginLeft: marginLeft,
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    marginTop: 24,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                }}>
                                <TouchableWithoutFeedback
                                    onPress={() =>
                                        navigation.navigate('Product')
                                    }>
                                    <View
                                        style={{
                                            borderWidth: 0.5,
                                            borderColor: '#DDDDDD',
                                            borderRadius: 12,
                                            width: 140,
                                            marginBottom: 8,
                                        }}>
                                        <Image
                                            height={100}
                                            borderTopLeftRadius={12}
                                            borderTopRightRadius={12}
                                            source={{
                                                uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/fdbxep6vcao6inbj611w',
                                            }}
                                        />
                                        <View
                                            style={{
                                                padding: 5,
                                            }}>
                                            <Text
                                                numberOfLines={3}
                                                style={{
                                                    fontWeight: 700,
                                                    color: '#000',
                                                    width: 140,
                                                }}>
                                                Du thuyền ăn tối sang trọng
                                                Opulence trên sông Chao Phraya
                                            </Text>
                                            <Text style={{ marginTop: 6 }}>
                                                <IconAntDesign
                                                    name="star"
                                                    size={16}
                                                    color="#FFCC33"
                                                />
                                                <Text
                                                    style={{
                                                        color: '#FFCC33',
                                                    }}>
                                                    4.8
                                                </Text>
                                                (362)
                                            </Text>
                                            <Text
                                                style={{
                                                    fontWeight: '700',
                                                    marginTop: 6,
                                                    color: '#000',
                                                }}>
                                                đ 61,777
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 12,
                        borderTopWidth: 1,
                        borderTopColor: '#ccc',
                        elevation: 0.5,
                    }}>
                    <TouchableWithoutFeedback onPress={() => setActiveMenu(1)}>
                        <View
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            {activeMenu !== 1 && (
                                <IconIonicons
                                    name="home-outline"
                                    size={20}
                                    color="#517fa4"
                                />
                            )}
                            {activeMenu === 1 && (
                                <IconIonicons
                                    name="home"
                                    size={20}
                                    color="#FF9900"
                                />
                            )}
                            <Text
                                style={{
                                    fontSize: 10,
                                    color:
                                        activeMenu === 1
                                            ? '#FF9900'
                                            : '#517fa4',
                                }}>
                                Trang chủ
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => setActiveMenu(2)}>
                        <View
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            {activeMenu !== 2 && (
                                <IconMaterialAntDesign
                                    name="tagso"
                                    size={20}
                                    color="#517fa4"
                                />
                            )}
                            {activeMenu === 2 && (
                                <IconMaterialAntDesign
                                    name="tags"
                                    size={20}
                                    color="#FF9900"
                                />
                            )}
                            <Text
                                style={{
                                    fontSize: 10,
                                    color:
                                        activeMenu === 2
                                            ? '#FF9900'
                                            : '#517fa4',
                                }}>
                                Ưu đãi
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => setActiveMenu(3)}>
                        <View
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            {activeMenu !== 3 && (
                                <IconMaterialIcons
                                    name="favorite-outline"
                                    size={20}
                                    color="#517fa4"
                                />
                            )}
                            {activeMenu === 3 && (
                                <IconMaterialIcons
                                    name="favorite"
                                    size={20}
                                    color="#FF9900"
                                />
                            )}
                            <Text
                                style={{
                                    fontSize: 10,
                                    color:
                                        activeMenu === 3
                                            ? '#FF9900'
                                            : '#517fa4',
                                }}>
                                Yêu thích
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => setActiveMenu(4)}>
                        <View
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            {activeMenu !== 4 && (
                                <IconMaterialCommunityIcons
                                    name="wallet-travel"
                                    size={20}
                                    color="#517fa4"
                                />
                            )}
                            {activeMenu === 4 && (
                                <IconMaterialCommunityIcons
                                    name="wallet"
                                    size={20}
                                    color="#FF9900"
                                />
                            )}
                            <Text
                                style={{
                                    fontSize: 10,
                                    color:
                                        activeMenu === 4
                                            ? '#FF9900'
                                            : '#517fa4',
                                }}>
                                Chuyến đi
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => setActiveMenu(5)}>
                        <View
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            {activeMenu !== 5 && (
                                <IconMaterialCommunityIcons
                                    name="account-box-outline"
                                    size={20}
                                    color="#517fa4"
                                />
                            )}
                            {activeMenu === 5 && (
                                <IconMaterialCommunityIcons
                                    name="account-box"
                                    size={20}
                                    color="#FF9900"
                                />
                            )}
                            <Text
                                style={{
                                    fontSize: 10,
                                    color:
                                        activeMenu === 5
                                            ? '#FF9900'
                                            : '#517fa4',
                                }}>
                                Tài khoản
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </>
    );
};

export default Home;
