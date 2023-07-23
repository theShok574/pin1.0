import { Image, StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import MasonryList from '../../components/MasonryList';
import pins from '../../assets/data/pins';
import { Entypo, Feather } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style ={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Feather name='share' size={24} color="black" style={styles.icon}   />
          <Entypo
          name='dots-three-horizontal'
          size={24}
          color="black"
          style={styles.icon}
          />

        </View>

        <Image  
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715"
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Alirizo Yuldashev</Text>
        <Text style={styles.subtitle}>228 Followers  |  699 Followings</Text>
      </View>


      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  window: {
    flex: 1,
    backgroundColor: 'white', // Change the background color of the window here
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
   
  },
  subtitle: {
    color: '#181818',
    fontWeight: '600',
    margin: 10,

  },

  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
    marginVertical:10,
  },
  header: {
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },

  icon: {
    paddingHorizontal: 10,
  }
});
