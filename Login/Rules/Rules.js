import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Backgound from '../../Greeting/Backgound';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
import Images from '../../Images/Images';

const Rules = ({navigation}) => {
  return (
    <View>
      <Backgound />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          marginTop: 80 * px,
          alignItems: 'center',
          paddingHorizontal: 16 * px,
        }}>
        <Image
          source={Images.Babukids}
          style={{width: 148 * px, height: 128 * px}}
        />
        <Text
          style={{
            fontSize: 15 * px,
            fontWeight: '700',
            color: '#01B2FF',
            marginTop: 16 * px,
          }}>
          Điều khoản
        </Text>
        <View style={{flex: 1, height: 500}}>
          <ScrollView>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 15 * px,
                color: '#333333',
                marginVertical: 20 * px,
                textAlign: 'justify',
                lineHeight: 25 * px,
                marginBottom: 30 * px,
              }}>
              Trước khi đăng ký tài khoản để sử dụng dịch vụ trên Mạng xã hội
              Bambookids (“Dịch vụ”), bạn xác nhận đã đọc, hiểu và đồng ý với
              tất cả các quy định trong Thỏa Thuận Cung Cấp Và Sử Dụng Dịch Vụ
              Mạng Xã Hội Bambookids này (sau đây gọi tắt là “Thỏa thuận”) thông
              qua việc hoàn thành việc đăng ký tài khoản Mạng xã hội Bambookids.
              Bạn chấp nhậ không có bất kỳ giới hạn nào về và/hoặc liên quan tới
              tất cả các điều khoản và điều kiện dưới đây ,kể từ thời điểm bạn
              sử dụng Dịch vụ lần đầu tiên
            </Text>

            <Text
              style={{
                fontWeight: '400',
                fontSize: 15 * px,
                color: '#333333',
                marginVertical: 20 * px,
                textAlign: 'justify',
                lineHeight: 25 * px,
                marginBottom: 50 * px,
              }}>
              Khi xem xét việc sử dụng Dịch vụ cung cấp bởi Công ty Có phần Công
              nghệ Gapo (sau đây gọi tắt là "chúng tôi" hoặc "Bambookids"), bạn
              cam kết rằng bạn có đủ tuổi theo luật định để xác lập thỏa thuật
              có tính rằng buộc , và không phải là người bị ngăn cấm tiếp nhận
              Dịch vụ theo pháp luật Việt Nam ,hoặc bạn đã có sự chấp thuận
              trước của cha mẹ hoặc người giám hộ hợp pháp của bạn để sử dụng
              Dịch vụ theo quy định và phù hợp Thỏa thuận này
            </Text>
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          marginLeft: 34 * px,
          marginTop: 40 * px,
          width: 30,
          height: 30,
        }}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Image
          source={Images.muiten}
          style={{
            width: 8 * px,
            height: 16 * px,
            resizeMode: 'stretch',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Rules;

const styles = StyleSheet.create({});
