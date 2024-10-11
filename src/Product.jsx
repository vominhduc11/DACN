import {
    View,
    Text,
    StatusBar,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview';
import Stars from 'react-native-stars';
import axios from 'axios';

const Product = ({ navigation }) => {
    const [product, setProduct] = useState({});
    const [opacity, setOpacity] = useState(0);
    const [backgroundBtn, setBackgroundBtn] = useState('#fff');
    const [colorBtn, setColorBtn] = useState('');
    const [contentHeight, setContentHeight] = useState(0);
    const [contentHeight1, setContentHeight1] = useState(0);

    // Hàm xử lý khi nhận dữ liệu từ WebView
    const handleMessage = (event) => {
        const webData = event.nativeEvent.data; // Dữ liệu từ WebView
        setContentHeight(Number(webData));
    };
    // Hàm xử lý khi nhận dữ liệu từ WebView
    const handleMessage1 = (event) => {
        const webData = event.nativeEvent.data; // Dữ liệu từ WebView
        setContentHeight1(Number(webData));
    };
    // Thực hiện sự kiện khi scroll
    function handleScrollScreen(event) {
        const contentOffset = event.nativeEvent.contentOffset;
        setOpacity(contentOffset.y / 226);

        if (contentOffset.y >= 120) {
            setBackgroundBtn('transparent');
            setColorBtn('#000');
        } else {
            setBackgroundBtn('#fff');
            setColorBtn('#808080');
        }
    }
    // Gọi api sản phẩm
    useEffect(() => {
        axios
            .get('http://192.168.0.113:8080/api/getProduct/1')
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <StatusBar hidden />

            <View style={{ flex: 1, position: 'relative' }}>
                <View
                    style={{
                        padding: 12,
                        position: 'absolute',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        top: 0,
                        right: 0,
                        left: 0,
                        zIndex: 1,
                        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                    }}>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('Home')}>
                        <View
                            style={{
                                backgroundColor: backgroundBtn,
                                padding: 10,
                                borderRadius: 30,
                            }}>
                            <IconEntypo
                                name="chevron-left"
                                size={20}
                                color={colorBtn}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableWithoutFeedback>
                            <View
                                style={{
                                    backgroundColor: backgroundBtn,
                                    padding: 10,
                                    borderRadius: 30,
                                    marginRight: 12,
                                }}>
                                <IconMaterialIcons
                                    name="favorite-border"
                                    size={20}
                                    color={colorBtn}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View
                                style={{
                                    backgroundColor: backgroundBtn,
                                    padding: 10,
                                    borderRadius: 30,
                                }}>
                                <IconFeather
                                    name="shopping-cart"
                                    size={20}
                                    color={colorBtn}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                <ScrollView
                    onScroll={handleScrollScreen}
                    showsVerticalScrollIndicator={false}>
                    <Image
                        height={290}
                        style={{ zIndex: 1 }}
                        source={{
                            uri: `${product.image}`,
                        }}
                        alt=""
                    />
                    <View
                        style={{
                            paddingHorizontal: 12,
                            paddingTop: 16,
                            zIndex: 2,
                            backgroundColor: '#fff',
                        }}>
                        {/* ten */}
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '700',
                                color: '#000',
                            }}>
                            {product.name}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 6,
                                marginBottom: 12,
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <IconAntDesign
                                    name="star"
                                    size={20}
                                    color="#FFCC00"></IconAntDesign>
                                <Text
                                    style={{
                                        color: '#FFCC00',
                                        fontSize: 16,
                                        fontWeight: '800',
                                    }}>
                                    {product.evaluate}
                                </Text>
                            </View>
                            <Text style={{ color: '#000', marginLeft: 12 }}>
                                ({product.evaluate} Đánh giá)
                            </Text>
                            <Text style={{ marginLeft: 18 }}>
                                {product.booked} Đã đặt
                            </Text>
                        </View>
                        <TouchableWithoutFeedback>
                            <View>
                                {product.notify !== '' && (
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginBottom: 6,
                                        }}>
                                        <IconIonicons
                                            name="notifications"
                                            size={20}
                                        />
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                width: 256,
                                                color: '#000',
                                                marginLeft: 5,
                                            }}>
                                            {product.notify}
                                        </Text>
                                    </View>
                                )}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <IconIonicons
                                        name="location-sharp"
                                        size={20}
                                    />
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            width: 256,
                                            color: '#000',
                                            marginLeft: 5,
                                        }}>
                                        {product.place}
                                    </Text>
                                </View>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                        top: 3,
                                    }}>
                                    <IconEntypo
                                        name="chevron-thin-right"
                                        size={14}
                                        color="#000"
                                    />
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <WebView
                            source={{
                                html: `                              
                                    <head>
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
                                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                                        <style>
                                            .listHighlight {font-size: 16; border-radius: 12px;padding-right: 50;padding-left: 30;background-color: #FCF6F2;padding-top: 14;padding-bottom: 14}
                                            i {margin-left:10}
                                        </style>
                                    </head>
                                    <body>
                                            ${product.highlight}
                                    </body>
                             `,
                            }}
                            injectedJavaScript={`
                                const height = document.querySelector(".listHighlight").offsetHeight;
                                (function sendMessageToReactNative() {
                                        window.ReactNativeWebView.postMessage(height);
                                })()
                            `}
                            onMessage={handleMessage1}
                            style={{
                                height: contentHeight1 + 10,
                                marginTop: 12,
                                backgroundColor: 'transparent',
                            }}
                        />
                        {/* Cac goi dich vu */}
                        {/* <View style={{ marginTop: 24 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Text
                                    style={{
                                        backgroundColor: '#FF5B00',
                                        width: 7,
                                        borderRadius: 12,
                                        height: 24,
                                        marginRight: 10,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: 18,
                                        fontWeight: '700',
                                    }}>
                                    Các gói dịch vụ
                                </Text>
                            </View>
                            <WebView
                                style={{
                                    marginTop: 5,
                                    height: 160,
                                    backgroundColor: 'transparent',
                                }}
                                javaScriptEnabled={true}
                                injectedJavaScript={`
                                        let parentElement = document.querySelector("ul"); // Lấy phần tử cha
                                        let childCount = parentElement.children.length; // Đếm số lượng thẻ con
                                        parentElement.style.width = 600 * childCount
                                `}
                                source={{
                                    html: `
                                    <head>
                                        <meta name="viewport" content="user-scalable=no">
                                        <style>
                                              ul {list-style: none;display: flex;padding-left: 0;width: 0}
                                              div {width: 964px; overflow-x: scroll;}
                                              li {width:500;font-size: 44;font-weight: 700;border: 6px #FF5B00 solid; padding: 0px 48px; background-color: #FCF6F2; border-radius: 28px; margin-right: 28}
                                        </style>
                                    </head>
                                    <div>
                                        <ul>
                                            <li>
                                                <p>Du thuyền ăn tối cho khách nước ngoài tại bến tàu ICONSIAM (Thời gian du thuyền: 20:00 - 22:15)</p>
                                                <p>đ 1,339,156</p>
                                            </li>
                                            <li>
                                                <p>Du thuyền ăn tối cho khách nước ngoài tại bến tàu ICONSIAM (Thời gian du thuyền: 20:00 - 22:15)</p>
                                                <p>đ 1,339,156</p>
                                            </li>
                                            <li>
                                                <p>Du thuyền ăn tối cho khách nước ngoài tại bến tàu ICONSIAM (Thời gian du thuyền: 20:00 - 22:15)</p>
                                                <p>đ 1,339,156</p>
                                            </li>
                                            <li>
                                                <p>Du thuyền ăn tối cho khách nước ngoài tại bến tàu ICONSIAM (Thời gian du thuyền: 20:00 - 22:15)</p>
                                                <p>đ 1,339,156</p>
                                            </li>
                                        </ul>
                                    </div>
                                    `,
                                }}
                            />
                        </View> */}
                        {/* Đánh giá */}
                        <View style={{ marginTop: 24 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Text
                                    style={{
                                        backgroundColor: '#FF5B00',
                                        width: 7,
                                        borderRadius: 12,
                                        height: 24,
                                        marginRight: 10,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: 18,
                                        fontWeight: '700',
                                    }}>
                                    Đánh giá
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 14,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <Text>
                                    <Text
                                        style={{
                                            fontSize: 40,
                                            fontWeight: '700',
                                            color: '#000',
                                        }}>
                                        {product.star}
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: '700',
                                            fontSize: 20,
                                        }}>
                                        /
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: '700',
                                            fontSize: 20,
                                        }}>
                                        5
                                    </Text>
                                </Text>
                                <Text>
                                    <Stars
                                        default={product.star} // Giá trị mặc định
                                        count={5} // Tổng số sao
                                        half={true} // Hỗ trợ nửa sao
                                        starSize={50} // Kích thước sao
                                        disabled={true}
                                        fullStar={
                                            <IconAntDesign
                                                name="star"
                                                size={35}
                                                color="gold"
                                            />
                                        }
                                        emptyStar={
                                            <IconAntDesign
                                                name="staro"
                                                size={35}
                                                color="gold"
                                            />
                                        }
                                        halfStar={
                                            <IconFontAwesome5
                                                name="star-half-alt"
                                                size={32}
                                                color="gold"
                                            />
                                        }
                                        update={(rating) => console.log(rating)} // Callback khi cập nhật
                                    />
                                </Text>
                            </View>
                            {/* Danh sách các bình luận */}
                            <View>
                                {product.comments !== undefined &&
                                    product.comments.map((ele) => (
                                        <View
                                            key={ele.id}
                                            style={{
                                                backgroundColor: '#F5F5F5',
                                                padding: 15,
                                                borderRadius: 12,
                                                marginTop: 18,
                                            }}>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent:
                                                        'space-between',
                                                }}>
                                                <Text style={{ color: '#000' }}>
                                                    {ele.name}
                                                </Text>
                                                <Text>{ele.time}</Text>
                                            </View>
                                            <Text>
                                                <Stars
                                                    default={ele.evaluate} // Giá trị mặc định
                                                    count={5} // Tổng số sao
                                                    half={true} // Hỗ trợ nửa sao
                                                    // starSize={50} // Kích thước sao
                                                    disabled={true}
                                                    fullStar={
                                                        <IconAntDesign
                                                            name="star"
                                                            size={14}
                                                            color="gold"
                                                        />
                                                    }
                                                    emptyStar={
                                                        <IconAntDesign
                                                            name="staro"
                                                            size={14}
                                                            color="gold"
                                                        />
                                                    }
                                                    halfStar={
                                                        <IconFontAwesome5
                                                            name="star-half-alt"
                                                            size={14}
                                                            color="gold"
                                                        />
                                                    }
                                                    update={(rating) =>
                                                        console.log(rating)
                                                    } // Callback khi cập nhật
                                                />
                                            </Text>
                                            <Text
                                                numberOfLines={5}
                                                style={{
                                                    color: '#000',
                                                    marginTop: 8,
                                                }}>
                                                {ele.content}
                                            </Text>
                                        </View>
                                    ))}

                                <View
                                    style={{
                                        backgroundColor: '#F5F5F5',
                                        padding: 15,
                                        borderRadius: 12,
                                        marginTop: 18,
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}>
                                        <Text style={{ color: '#000' }}>
                                            Võ Minh Đức
                                        </Text>
                                        <Text>2/9</Text>
                                    </View>
                                    <Text>
                                        <Stars
                                            default={4} // Giá trị mặc định
                                            count={5} // Tổng số sao
                                            half={true} // Hỗ trợ nửa sao
                                            fullStar={
                                                <IconAntDesign
                                                    name="star"
                                                    size={14}
                                                    color="gold"
                                                />
                                            }
                                            emptyStar={
                                                <IconAntDesign
                                                    name="staro"
                                                    size={14}
                                                    color="gold"
                                                />
                                            }
                                            halfStar={
                                                <IconFontAwesome5
                                                    name="star-half-alt"
                                                    size={14}
                                                    color="gold"
                                                />
                                            }
                                            update={(rating) =>
                                                console.log(rating)
                                            } // Callback khi cập nhật
                                        />
                                    </Text>
                                    <TextInput
                                        multiline={true}
                                        numberOfLines={4}
                                        textAlignVertical="top"
                                        style={{
                                            borderWidth: 1,
                                            borderColor: '#C0C0C0',
                                            marginTop: 12,
                                            paddingHorizontal: 12,
                                            borderRadius: 12,
                                        }}
                                        placeholder="Nhập bình luận..."
                                    />
                                    <TouchableWithoutFeedback>
                                        <Text
                                            style={{
                                                backgroundColor: '#99FF99',
                                                textAlign: 'center',
                                                alignItems: 'center',
                                                color: '#fff',
                                                paddingVertical: 12,
                                                marginTop: 12,
                                                borderRadius: 12,
                                            }}>
                                            Gửi
                                        </Text>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                        {/* Ve dich vu nay */}
                        <View style={{ marginTop: 24 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Text
                                    style={{
                                        backgroundColor: '#FF5B00',
                                        width: 7,
                                        borderRadius: 12,
                                        height: 24,
                                        marginRight: 10,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: 18,
                                        fontWeight: '700',
                                    }}>
                                    Về dịch vụ này
                                </Text>
                            </View>
                            <WebView
                                style={{
                                    marginTop: 5,
                                    height: contentHeight + 10,
                                    backgroundColor: 'transparent',
                                }} // Chiều rộng WebView
                                javaScriptEnabled={true}
                                injectedJavaScript={`
                                    const height = document.querySelector(".dynamic-image").offsetHeight;
                                    (function sendMessageToReactNative() {
                                            window.ReactNativeWebView.postMessage(height);
                                    })()
                                    `}
                                source={{
                                    html: `
                                    <head>
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
                                        <style>
                                            img {width:100%}
                                            p {font-size: 15}
                                        </style>
                                    </head>
                                    <body>
                                        ${product.information}
                                    </body>
                                    `,
                                }}
                                onMessage={handleMessage}
                            />
                        </View>
                    </View>
                </ScrollView>

                <View
                    style={{
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        elevation: 1,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 8,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                đ 690,000
                            </Text>
                            <Text
                                style={{
                                    textDecorationLine: 'line-through',
                                    color: '#AAAAAA',
                                    marginLeft: 8,
                                    fontSize: 12,
                                }}>
                                đ 700,000
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#FFFFCC',
                                paddingHorizontal: 5,
                                borderRadius: 8,
                            }}>
                            <Text
                                style={{ color: '#2E8B57', fontWeight: '700' }}>
                                Credit +28
                            </Text>
                            <Text>
                                <IconEntypo
                                    name="chevron-right"
                                    size={22}
                                    color="#2E8B57"
                                />
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <TouchableWithoutFeedback>
                            <View
                                style={{
                                    width: 140,
                                    backgroundColor: '#FFCC00',
                                    alignItems: 'center',
                                    paddingVertical: 12,
                                    borderRadius: 12,
                                }}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontWeight: '700',
                                        fontSize: 12,
                                    }}>
                                    Thêm vào giỏ hàng
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback>
                            <View
                                style={{
                                    width: 140,
                                    backgroundColor: '#FF3300',
                                    alignItems: 'center',
                                    paddingVertical: 12,
                                    borderRadius: 12,
                                }}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontWeight: '700',
                                    }}>
                                    Đặt ngay
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Product;
