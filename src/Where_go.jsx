import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TextInput,
} from 'react-native';
import React from 'react';

import IconFeather from 'react-native-vector-icons/Feather';

const Where_go = () => {
    return (
        <ScrollView>
            <View>
                <ImageBackground
                    style={{
                        paddingHorizontal: 12,
                        paddingTop: 100,
                        paddingBottom: 30,
                        alignItems: 'center',
                    }}
                    source={{
                        uri: 'https://pos.nvncdn.com/b97fa9-149448/art/artCT/20240623_CPmgxNWx.jpg',
                    }}>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 24,
                            fontWeight: '700',
                        }}>
                        Bạn muốn đi đâu chơi?
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 30,
                            paddingHorizontal: 0,
                            backgroundColor: '#fff',
                            marginTop: 24,
                            width: '100%',
                        }}>
                        <IconFeather
                            name="search"
                            size={20}
                            style={{ marginHorizontal: 10 }}
                        />
                        <TextInput
                            style={{
                                width: 130,
                                fontSize: 15,
                                color: '#000',
                                paddingVertical: 8,
                            }}
                            placeholder="Tìm địa điểm"
                        />
                    </View>
                </ImageBackground>
                <View></View>
            </View>
            <View style={{ backgroundColor: '#fff', paddingHorizontal: 12 }}>
                <View style={{ marginRight: -12 }}>
                    <ScrollView
                        style={{ marginTop: 12 }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginRight: 12 }}>
                                <ImageBackground
                                    borderRadius={10}
                                    style={{
                                        height: 170,
                                        width: 130,
                                        justifyContent: 'flex-end',
                                    }}
                                    source={{
                                        uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gagpmpohflexp1kfy9vr.webp',
                                    }}>
                                    <View
                                        style={{
                                            paddingHorizontal: 12,
                                            paddingVertical: 16,
                                        }}>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: '700',
                                            }}>
                                            Pattaya
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ marginRight: 12 }}>
                                <ImageBackground
                                    borderRadius={10}
                                    style={{
                                        height: 170,
                                        width: 130,
                                        justifyContent: 'flex-end',
                                    }}
                                    source={{
                                        uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gagpmpohflexp1kfy9vr.webp',
                                    }}>
                                    <View
                                        style={{
                                            paddingHorizontal: 12,
                                            paddingVertical: 16,
                                        }}>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: '700',
                                            }}>
                                            Pattaya
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ marginRight: 12 }}>
                                <ImageBackground
                                    borderRadius={10}
                                    style={{
                                        height: 170,
                                        width: 130,
                                        justifyContent: 'flex-end',
                                    }}
                                    source={{
                                        uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gagpmpohflexp1kfy9vr.webp',
                                    }}>
                                    <View
                                        style={{
                                            paddingHorizontal: 12,
                                            paddingVertical: 16,
                                        }}>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: '700',
                                            }}>
                                            Pattaya
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ marginRight: 12 }}>
                                <ImageBackground
                                    borderRadius={10}
                                    style={{
                                        height: 170,
                                        width: 130,
                                        justifyContent: 'flex-end',
                                    }}
                                    source={{
                                        uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gagpmpohflexp1kfy9vr.webp',
                                    }}>
                                    <View
                                        style={{
                                            paddingHorizontal: 12,
                                            paddingVertical: 16,
                                        }}>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: '700',
                                            }}>
                                            Pattaya
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ marginTop: 36 }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '700',
                            color: '#000',
                        }}>
                        Hồng Kông & Ma Cao
                    </Text>
                    <ScrollView
                        style={{ marginTop: 12 }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row' }}>
                            {/* phần tử */}
                            <View style={{ marginRight: 12 }}>
                                <ImageBackground
                                    borderRadius={10}
                                    style={{
                                        height: 70,
                                        width: 90,
                                        justifyContent: 'flex-end',
                                    }}
                                    source={{
                                        uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gagpmpohflexp1kfy9vr.webp',
                                    }}>
                                    <View
                                        style={{
                                            paddingHorizontal: 10,
                                            paddingVertical: 8,
                                        }}>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: '700',
                                            }}>
                                            Pattaya
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ marginRight: 12 }}>
                                <ImageBackground
                                    borderRadius={10}
                                    style={{
                                        height: 70,
                                        width: 90,
                                        justifyContent: 'flex-end',
                                    }}
                                    source={{
                                        uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gagpmpohflexp1kfy9vr.webp',
                                    }}>
                                    <View
                                        style={{
                                            paddingHorizontal: 10,
                                            paddingVertical: 8,
                                        }}>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: '700',
                                            }}>
                                            Pattaya
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ marginRight: 12 }}>
                                <ImageBackground
                                    borderRadius={10}
                                    style={{
                                        height: 70,
                                        width: 90,
                                        justifyContent: 'flex-end',
                                    }}
                                    source={{
                                        uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gagpmpohflexp1kfy9vr.webp',
                                    }}>
                                    <View
                                        style={{
                                            paddingHorizontal: 10,
                                            paddingVertical: 8,
                                        }}>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: '700',
                                            }}>
                                            Pattaya
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
};

export default Where_go;
