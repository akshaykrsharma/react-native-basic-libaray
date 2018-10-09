import React from 'react';

export function DisableBack(Comp) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = { fromHoc2: 'akshay' };
		}
		render() {
			return <Comp {...this.props} {...this.state} />;
		}
	};
}
