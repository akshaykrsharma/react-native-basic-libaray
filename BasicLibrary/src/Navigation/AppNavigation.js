import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

import Home from '../Screen/Home';
import CounterApp from '../Redux/CounterApp';

const AppNavigation = createStackNavigator(
	{
		Home: { screen: Home },
		Home2: { screen: Home }
	},
	{
		headerMode: 'none',
		initialRouteName: 'Home'
	}
);

export default AppNavigation;
