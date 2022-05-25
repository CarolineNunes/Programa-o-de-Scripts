import {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location'

export default function App() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  
  useEffect(() => {
    getLocation()
  }, [])


  async function getLocation(){
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      setErrorMsg('permission denied')
      return;      
    } 
    let location = await Location.getCurrentPositionAsync({})
    setLocation(location) 

    console.log(JSON.stringify(location))

  }
  
  return (
    <View style={styles.container}>
      <MapView style={styles.map} /> 
      <Text>teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
map: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

});
