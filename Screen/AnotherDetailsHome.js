import { View, Text } from ' react-native '
import React from ' react '
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ImageBackgroundColor: '#pink', flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AnotherDetailHome</Text>
    </View> 
    )
}