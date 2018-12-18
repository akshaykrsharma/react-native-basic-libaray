import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Utils from '../Utils';

export default class InputTextImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			secureTextEntry: true
		};
	}

	onAccessoryPress = () => {
		this.props.isPassword && this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
	};

	renderPasswordAccessory = () => {
		return (
			this.props.isPassword && (
				<Text color={TextField.defaultProps.baseColor} onPress={this.onAccessoryPress}>
					{this.state.secureTextEntry ? 'Show' : 'Hide'}
				</Text>
			)
		);
	};

	// render() {
	// 	return (
	// 		<TextField
	// 			{...this.props}
	// 			labelHeight={50}
	// 			//tintColor={'rgba(0, 0, 0, 1)'} //seperator color and Upper Label color
	// 			containerStyle={Utils.styleMerger(styles.containerStyle, this.props.containerStyle)}
	// 			affixTextStyle={styles.affixTextStyle}
	// 			multiline={false}
	// 			labelTextStyle={styles.labelTextStyle}
	// 			//baseColor={'rgba(0, 0, 255, 1)} // Top Lable when is not focus and color of title
	// 			inputContainerStyle={Utils.styleMerger(styles.inputContainerStyle, this.props.inputContainerStyle)}
	// 			secureTextEntry={this.props.isPassword && this.state.secureTextEntry}
	// 			onTextChange={this.props.onTextChange}
	// 			renderAccessory={this.renderPasswordAccessory}
	// 		/>
	// 	);
	// }

	render() {
		const { labelTextStyle, containerStyle, titleTextStyle, inputContainerStyle } = styles;
		return (
			<View style={containerStyle}>
				<Text style={labelTextStyle}>{this.props.label}</Text>
				<View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
					{this.props.image && <Image source={this.props.image.source} style={this.props.image.style} />}
					{this.props.image && <View style={{ height: '50%', margin: 5, width: 1, backgroundColor: '#d0d0d0' }} />}
					<TextInput
						{...this.props}
						placeholder={this.props.placeholder}
						placeholderTextColor={labelTextStyle}
						onChangeText={this.props.onChangeText}
						secureTextEntry={this.props.isPassword && this.state.secureTextEntry}
						//keyboardType={this.state.secureTextEntry ? 'visible-password' : undefined}
						style={Utils.styleMerger(inputContainerStyle, this.props.inputContainerStyle)}
					/>
					<View
						style={{
							position: 'absolute',
							alignSelf: 'flex-end',
							right: 0,
							marginBottom: 3
						}}
					>
						{this.renderPasswordAccessory()}
					</View>
				</View>
				<View style={{ height: 1, width: '100%', backgroundColor: '#d0d0d0' }} />
				<Text style={titleTextStyle}>{this.props.title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		marginHorizontal: 30,
		marginVertical: 0
	},
	inputContainerStyle: {
		width: '100%'
	},
	labelTextStyle: {},
	titleTextStyle: {},
	affixTextStyle: {}
});
