import {
    View,
    Text,
    StatusBar,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
    Alert,
} from 'react-native';
import React, { useState } from 'react';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';

const Product = () => {
    const [contentHeight, setContentHeight] = useState(0);

    // Hàm xử lý khi nhận dữ liệu từ WebView
    const handleMessage = (event) => {
        const webData = event.nativeEvent.data; // Dữ liệu từ WebView
        setContentHeight(Number(webData));
    };
    return (
        <>
            <StatusBar hidden />
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image
                        height={290}
                        style={{ zIndex: 1 }}
                        source={{
                            uri: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/fdbxep6vcao6inbj611w',
                        }}
                    />
                    <View
                        style={{
                            paddingHorizontal: 12,
                            paddingTop: 16,
                            zIndex: 2,
                        }}>
                        {/* ten */}
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '700',
                                color: '#000',
                            }}>
                            Du thuyền ăn tối sang trọng Opulence trên sông Chao
                            Phraya
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
                                    4.7
                                </Text>
                            </View>
                            <Text style={{ color: '#000', marginLeft: 12 }}>
                                (243 Đánh giá)
                            </Text>
                            <Text style={{ marginLeft: 18 }}>10K+ Đã đặt</Text>
                        </View>
                        <TouchableWithoutFeedback>
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
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
                                        ICONSIAM, 299 Charoen Nakhon Rd, Khwaeng
                                        Khlong Ton Sai, Khet Khlong San, Krung
                                        Thep Maha Nakhon 10600, Thái Lan
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 6,
                                    }}>
                                    <IconIonicons
                                        name="location-sharp"
                                        size={20}></IconIonicons>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            width: 256,
                                            color: '#000',
                                            marginLeft: 5,
                                        }}>
                                        ICONSIAM, 299 Charoen Nakhon Rd, Khwaeng
                                        Khlong Ton Sai, Khet Khlong San, Krung
                                        Thep Maha Nakhon 10600, Thái Lan
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
                                        color="#000"></IconEntypo>
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <WebView
                            source={{
                                html: `
                                    <head>
                                        <meta name="viewport" content="user-scalable=no">
                                    </head>                                  
                                    <head>
                                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                                        <style>
                                            ul {height: 250; font-size: 50; border-radius: 12px;padding-right: 200;padding-left: 80;overflow: hidden;background-color: #FCF6F2}
                                            div {position: relative}
                                            p {border-radius: 12px; position: absolute; bottom:-45 ; right:0; left:0 ; font-size: 48;padding-left: 45;background-color:#FCF6F2;box-shadow: #FCF6F2 0px -5px 20px 20px;font-weight: bold">Xem thêm<i style="margin-left:10" class="fas fa-chevron-right chevron}
                                            i {margin-left:10}
                                        </style>
                                    </head>
                                    <div>
                                        <ul>
                                            <li>Tàu du ngoạn 3 tầng mới nhất và lớn nhất trên sông Chao Phraya hiện nay.</li>
                                            <li>3 tầng bao gồm tầng thượng, tầng trên và tầng dưới.</li>
                                            <li>Tầng trước ở tầng 2 (tầng trên) không có bàn, điều này có nghĩa là tất cả khách hàng có thể đi bộ, chụp
                                                ảnh và ngắm sông Chao Phraya. Nếu khách hàng muốn ngắm nhìn 360 độ, vui lòng chỉ định tầng thượng khi
                                                yêu cầu để ngắm nhìn 360 độ.</li>
                                        </ul>
                                        <p>Xem thêm<i class="fas fa-chevron-right chevron"></i></p>
                                    </div>
                             `,
                            }}
                            style={{
                                height: 80,
                                marginTop: 12,
                                backgroundColor: 'transparent',
                            }}
                        />
                        {/* Cac goi dich vu */}
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
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    </head>
                                    <style>
                                         img {width:100%}
                                         p {font-size: 15}
                                    </style>
                                    <div class="dynamic-image">
                                        <p>
                                        <strong>Những tuyến đường nào được bao gồm trong hoạt động này và liệu có thể tùy chỉnh các tuyến đường đó không?</strong>
                                        Hoạt động này bao gồm các tuyến từ Bangkok đến nhiều địa điểm du lịch khác nhau như Chon Buri, Rayong, Ratchaburi, Nonthaburi, Chanthaburi, Samut Songkhram, Samut Sakhon, Chachoengsao, Nakhon Pathom, Nakhon Nayok, Pathum Thani, Khao Kho, Khao Yai, Kanchanaburi, Hua Hin , Pattaya và Ayutthaya cũng như các tuyến khứ hồi từ những điểm đến này về Bangkok
                                        <strong>Có những mẫu xe nào?</strong>
                                        Chúng tôi có 3 lựa chọn tuyệt vời cho bạn! Hãy chọn Xe Sedan Cao cấp cho tối đa 3 hành khách, MPV Tiêu chuẩn cho 4 hành khách hoặc Xe Van Tiêu chuẩn cho nhóm lớn hơn lên đến 9 hành khách. Chọn một chiếc phù hợp nhất với nhóm của bạn và tận hưởng chuyến đi của bạn!
                                        <strong>Phí này bao gồm những mục nào và các khoản phí bổ sung là gì?</strong>
                                        Hoạt động này bao gồm đưa đón một chiều, tài xế nói tiếng Thái, nhiên liệu và phí cầu đường, hành lý miễn cước và bảo hiểm. Phụ phí áp dụng cho hành lý quá cân (300 THB), chi phí cá nhân, tiền boa, ghế trẻ em (200 THB), chỗ ngồi cho người khuyết tật và các điểm dừng bổ sung (250 THB). Bạn có thể thanh toán các khoản phụ phí này trực tiếp cho tài xế
                                        <strong>Kích thước tiêu chuẩn của hành lý mà xe có thể chứa là bao nhiêu?</strong>
                                        Kích thước hành lý tiêu chuẩn của chúng tôi là 24 inch: Cao 24" (60 cm), Rộng 16,4" (41 cm) và Sâu 9,2" (23 cm)
                                        <strong>Khi nào người bán sẽ cung cấp thông tin về tài xế và biển số xe sau khi việc đặt chỗ được xác nhận?</strong>
                                        Người bán sẽ gửi email cho bạn thông tin chi tiết về tài xế và địa điểm đón trước 09:00 tối (GMT +7:00). Vui lòng kiểm tra hộp thư của bạn để đảm bảo bạn nhận được những thông tin quan trọng này</p>
                                                <div>
                                                    <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/y8crarmureulfedljrbo/DuthuyềnăntốisangtrọngOpulencetrênsôngChaoPhraya.webp"
                                                        alt="">
                                                    <p>Đi thuyền cùng chúng tôi để trải nghiệm lịch sử và di sản Thái Lan được in dấu trên cả hai bên bờ sông
                                                    </p>
                                                </div>
                                                <div>
                                                    <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/y8crarmureulfedljrbo/DuthuyềnăntốisangtrọngOpulencetrênsôngChaoPhraya.webp"
                                                        alt="">
                                                    <p>Đi thuyền cùng chúng tôi để trải nghiệm lịch sử và di sản Thái Lan được in dấu trên cả hai bên bờ sông
                                                    </p>
                                                </div>
                                                <div>
                                                    <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/y8crarmureulfedljrbo/DuthuyềnăntốisangtrọngOpulencetrênsôngChaoPhraya.webp"
                                                        alt="">
                                                    <p>Đi thuyền cùng chúng tôi để trải nghiệm lịch sử và di sản Thái Lan được in dấu trên cả hai bên bờ sông
                                                    </p>
                                                </div>
                                                <div>
                                                    <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/y8crarmureulfedljrbo/DuthuyềnăntốisangtrọngOpulencetrênsôngChaoPhraya.webp"
                                                        alt="">
                                                    <p>Đi thuyền cùng chúng tôi để trải nghiệm lịch sử và di sản Thái Lan được in dấu trên cả hai bên bờ sông
                                                    </p>
                                                </div>
                                            </div>
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
                        // borderTopWidth: 1,
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
