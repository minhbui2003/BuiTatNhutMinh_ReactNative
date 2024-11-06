import {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Image, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={styles.body}>
        <Image 
          source={require('./assets/1.png')}
          style={styles.image}
        />
        <Text style={styles.textBody}>POWER BIKE SHOP</Text>
      </View>
      <View>
        <Button title="Get Started" color="red" onPress={() => navigation.navigate('ListXeDap')}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:30,
  },
  header: {
    borderBlockColor:"gray",
    marginTop: 20,
    padding:10
  },
  textHeader:{
    textAlign:"center",
    fontWeight:"bold",
  },
  image:{
    width:300,
    height:300,
    borderRadius:15,
    borderWidth:2,
    borderColor:"#pink"
  },
  body:{
    justifyContent: "center",
    alignItems:"center",
    marginTop:20,
  },
  textBody:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:20,
    paddingHorizontal:50,
    marginBottom:20,

  }
});


export default Home;