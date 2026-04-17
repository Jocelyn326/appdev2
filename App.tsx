import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements'


// ---------------- SCREENS ----------------
function SettingsScreen({ route }: any) {
  const { userId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>User ID: {userId}</Text>
    </View>
  );
}


function HomeScreen() {
  const navigation = useNavigation<any>();
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>

      <Button
        onPress={() =>
          navigation.navigate('More', {
            screen: 'Settings',
            params: { userId: 'jane' },
          })
        }
      >

        Go to Setting
      </Button>
      </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

// ---------------- NAVIGATORS ----------------
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MoreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="More" component={MoreStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
