import { SafeAreaProvider } from 'react-native-safe-area-context';
import CoreComponentScreen from './src/components/CoreComponentScreen';
import { StatusBar } from 'react-native';
import ListViewScreen from './src/components/ListViewScreen';
import OptimiseFlatListScreen from './src/components/OptimiseFlatListScreen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <OptimiseFlatListScreen />
      {/* <ListViewScreen /> */}
      {/* <CoreComponentScreen /> */}
    </SafeAreaProvider>
  );
}

export default App;
