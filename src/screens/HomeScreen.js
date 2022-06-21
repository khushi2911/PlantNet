import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Touchable,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import DetailsScreen from './DetailsScreen';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'; //npx react-native link run
import plants from '../consts/plants';

//catergoryies
class HomeScreen extends Component {
  render() {
    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
    const CategoryList = () => {
      return (
        <View style={[styles.categoryContainerStyle]}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text key={index} style={[styles.categoryTextStyle]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    };

    // cards
    const Card = ({plant}) => {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('details', plant)}>
          <View style={styles.cardStyle}>
            <View style={{alignItems: 'flex-end'}}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: plant.like
                    ? 'rgba(245,42,42,0.2)'
                    : 'rgba(0,0,0,0.2)',
                }}>
                <Icon
                  name="favorite"
                  size={18}
                  color={plant.like ? COLORS.red : COLORS.dark}
                />
              </View>
            </View>
            <View style={{height: 100, alignItems: 'center'}}>
              <Image
                style={{flex: 1, resizeMode: 'contain'}}
                source={plant.img}
              />
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
              {plant.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                ${plant.price}
              </Text>
              <View
                style={{
                  backgroundColor: COLORS.green,
                  height: 25,
                  width: 25,
                  alignItems: 'center',
                  borderRadius: 5,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.white,
                    fontWeight: 'bold',
               
                  }}>
                  +
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    const {headerStyle, searchBoxStyle, inputStyle, sortBtnStyle} = styles;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingHortizontal: 20,
          backgroundColor: COLORS.white,
        }}>
        <View style={headerStyle}>
          <View>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.dark}}>
              Welcome to
            </Text>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', color: COLORS.green}}>
              Plant Shop
            </Text>
          </View>
          <Icon
            name="shopping-cart"
            size={30}
            color={COLORS.dark}
            style={{marginRight: 15, marginTop: 20}}
          />
        </View>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
          <View style={searchBoxStyle}>
            <Icon name="search" size={25} style={{marginLeft: 20}} />
            <TextInput style={inputStyle} placeholder="Search" />
          </View>
          <View style={sortBtnStyle}>
            <Icon name="sort" size={30} color={COLORS.white} />
          </View>
        </View>
        <CategoryList />
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
          numColumns={2}
          data={plants}
          renderItem={({item}) => {
            return <Card plant={item} />;
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  searchBoxStyle: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  inputStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    flex: 1,
  },
  sortBtnStyle: {
    marginLeft: 10,
    marginRight: 20,
    height: 50,
    width: 50,
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryContainerStyle: {
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  categoryTextStyle: {
    color: COLORS.green,
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardStyle: {
    height: 225,
    backgroundColor: COLORS.light,
    width: 170,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    marginRight: 5,
    marginLeft: 5,
  },
});

export default HomeScreen;
