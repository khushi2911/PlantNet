import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'; //npx react-native link run
import plants from '../consts/plants';

class DetailsScreen extends Component {
  render() {
    const plant = this.props.route.params;
    const {
      headerStyle,
      imageContainerStyle,
      detailsStyle,
      lineStyle,
      priceTagStyle,
      borderBtnStyle,
      borderBtnTextStyle,
      buyBtnStyle,
     
    } = styles;
    return (
      
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        {/* <ScrollView> */}

       
        <View style={headerStyle}>
          <Icon
            name="arrow-back"
            size={28}
            onPress={() => this.props.navigation.goBack()}
          />
          <Icon name="shopping-cart" size={28} />
        </View>

        <View style={imageContainerStyle}>
          <Image source={plant.img} style={{resizeMode: 'contain', flex: 1}} />
        </View>

        <View style={detailsStyle}>
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={lineStyle} />
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best Choice </Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>{plant.name}</Text>
            <View style={priceTagStyle}>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 9,
                }}>
                ${plant.price}
              </Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 20, marginTop: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
                lineHeight: 22,
                marginTop: 20,
              }}>
              {plant.about}
            </Text>
            <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.borderBtnStyle}>
                <Text style={styles.borderBtnTextStyle}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={styles.borderBtnStyle}>
                <Text style={styles.borderBtnTextStyle}>+</Text>
              </View>
            </View>

            <View style={styles.buyBtnStyle}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
            
    );
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainerStyle: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsStyle: {
    flex: 1.20,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 20,
  },
  lineStyle: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTagStyle: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  borderBtnStyle: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnTextStyle: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  buyBtnStyle: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTagStyle: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});
export default DetailsScreen;
