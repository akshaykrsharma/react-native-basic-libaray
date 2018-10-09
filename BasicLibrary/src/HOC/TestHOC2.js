import React from 'react';

export function DisableBack(Comp, prop) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = { name: 'akshay' };
		}
		render() {
			return <Comp {...prop} {...this.state} />;
		}
	};
}
