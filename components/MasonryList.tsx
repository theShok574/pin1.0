import { StyleSheet, Image, ScrollView  } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import Pin from "../components/Pin";
import { FlatList } from 'react-native-gesture-handler';
import pins from '../assets/data/pins';

interface IMasonryList{
    pins: {
        id: string;
        image: string;
        title: string;
    }[];


} 

const MasonryList = ({ pins }: IMasonryList) => {

      const numRows =2;

   return(
    <ScrollView> 
    <View style={styles.container}>
        {Array.from(Array(numRows)).map((col,colIndex )=>(
      <View style={styles.column}>
        {pins
          .filter((_, index) => index % numRows == colIndex  )
          .map((pin) => (
            <Pin pin={pin}  key={pin.id}/>
        ))}
       </View> 
        ))}
     </View>
    </ScrollView >
   ); 
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row'
    },
    column: {
      flex: 1,
    }
  });   

  export default MasonryList;