import pins from '../../assets/data/pins';
import MasonryList from '../../components/MasonryList';

export default function HomeScreen(): JSX.Element {
  return(
  <MasonryList pins = {pins}/>
    );  
}
