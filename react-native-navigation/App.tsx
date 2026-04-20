import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

function HomeScreen({ route }: any) {
  const navigation = useNavigation<any>();

  React.useEffect(() => {
    if (route.params?.post) {
      alert('New post: ' + route.params?.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('CreatePost')}>Create post</Button>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ route }: any) {
  const navigation = useNavigation<any>();
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button onPress={() => navigation.popTo('Home', { post: postText })}>Done</Button>
    </>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    CreatePost: CreatePostScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
