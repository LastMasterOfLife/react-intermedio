import { Button, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import { settingsStyles } from './settings.styles';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Settings>;
}

const SettingsScreen = ({ navigation }: Props) => {
  return (
    <View style={settingsStyles.container}>
      <Text style={settingsStyles.title}>Settings</Text>

      <TouchableOpacity
        style={settingsStyles.optionContainer}
        onPress={() => console.log('Naviga a Generali')}
      >
        <Text style={settingsStyles.optionText}>Generali</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={settingsStyles.optionContainer}
        onPress={() => console.log('Naviga a Notifiche')}
      >
        <Text style={settingsStyles.optionText}>Notifiche</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={settingsStyles.optionContainer}
        onPress={() => console.log('Naviga ad Account')}
      >
        <Text style={settingsStyles.optionText}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={settingsStyles.logoutButton}
        onPress={() => console.log('Logout')}
      >
        <Text style={settingsStyles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
