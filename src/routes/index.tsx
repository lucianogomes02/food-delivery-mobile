import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import TabRoutes from './tab.routes';

export default function Routes() {
    return (
        <NavigationContainer independent={true}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <TabRoutes />
            </GestureHandlerRootView>
        </NavigationContainer>
    );
}
