import { StyleSheet, Image, ScrollView  } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, } from '../../components/Themed';
import Pin from "../../components/Pin";
import { FlatList } from 'react-native-gesture-handler';
import pins from '../../assets/data/pins';


export default function HomeScreen(): JSX.Element {
  return(
  <ScrollView> 
    <View style={styles.container}>
      <View style={styles.column}>
        {pins
          .filter((_, index) => index % 2 == 0  )
          .map((pin) => (
            <Pin pin={pin}  key={pin.id}/>
        ))}
       </View> 
      <View style={styles.column}>
         {pins
          .filter((_, index) => index % 2 == 1  )
          .map((pin) => (
            <Pin pin={pin}  key={pin.id} />
        ))}
       </View> 
     </View>
    </ScrollView >
    );
     
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row'
  },
  column: {
    flex: 1,
  }
});   