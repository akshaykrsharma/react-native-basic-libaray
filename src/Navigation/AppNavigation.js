import { createStackNavigator } from 'react-navigation';
import Home from '../Screen/Home';
import CounterApp from '../Redux/CounterApp';
import App from '../App';

const stackNavigator = createStackNavigator(
	{
		App: {
			screen: App
		},
		Home: {
			screen: Home
		}
	},
	{
		headerMode: 'none'
	}
);

export default stackNavigator;
