import * as React from 'react';
import { View, Text } from 'react-native';
import { 
  createStaticNavigation,
  useNavigation,
 } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements'


function HomeScreen() {  
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </View>
  );
}

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

function DetailsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button onPress={() => navigation.push('Details')}>
        Go to Details... again
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      </View>
  );
}


const RootStack = createNativeStackNavigator({
  
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
});
    
const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
