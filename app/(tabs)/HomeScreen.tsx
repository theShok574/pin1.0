import { StyleSheet, Image, ScrollView  } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, } from '../../components/Themed';
import Pin from "../../components/Pin";

export default function HomeScreen(): JSX.Element {
  return(
  <ScrollView> 
    <View style={styles.container}>
    <Pin 
  
      pin={{
        title: "1st Title",
        image: 
           "https://cdn.domdivanov89.com/files/imgs/ig1818479/zf2zhbbr-740x540.jpg"
      }}
    />
    <Pin
      pin={{
        title: "2nd Title",
        image: 
           "https://thumb.tildacdn.com/tild3239-3262-4039-a365-653931396430/-/resize/600x/-/format/webp/DSCF2130.jpg"
      }}
    />
    </View>
    </ScrollView >
    );
     
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});   