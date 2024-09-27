import { View, Text } from ' react-native '
import React from ' react '

import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ImageBackgroundColor: '#1b2', flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Botton title= 'Go Deatails' onPress= {()=>navigation.navigate("DetailHome")}></Botton>
    </View> 
    )
}