import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../../App'

export const Profile: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>()

  return (
    <View>
      <Text>profile screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>settings</Text>
      </TouchableOpacity>
    </View>
  );
};
