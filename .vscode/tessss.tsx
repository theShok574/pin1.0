import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}): JSX.Element {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIcon(props) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  }
  
  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  
  function CreatePin() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Create Pin Screen</Text>
      </View>
    );
  }
  
  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
  
  export default function TabLayout() {
    const colorScheme = useColorScheme();
  
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="home" color={color} />
            ),
            headerRight: () => (
              <Pressable onPress={() => console.log('Button pressed')}>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                  />
                )}
              </Pressable>
            ),
          }}
        />
       
        <Tab.Screen
          name="CreatePin"
          component={CreatePin}
          options={{
            title: 'CreatePin',
            headerTitleAlign: 'center',
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="plus" color={color} />
            ),
          }}
        />
         
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerTitleAlign: 'center',
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="user" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }