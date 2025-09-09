import { SafeAreaProvider } from 'react-native-safe-area-context';
import CoreComponentScreen from './src/components/CoreComponentScreen';
import { StatusBar } from 'react-native';
import ListViewScreen from './src/components/ListViewScreen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <ListViewScreen />
      {/* <CoreComponentScreen /> */}
    </SafeAreaProvider>
  );
}

export default App;
