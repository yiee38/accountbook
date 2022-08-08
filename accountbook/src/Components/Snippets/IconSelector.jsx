import * as React from 'react';
import { categories } from '../../utils/costCategories';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function IconSelector (props) {

	return (
		<React.Fragment>
			<ToggleButtonGroup
				value={props.selection}
				exclusive
				onChange={props.handleClick}
				aria-label="text alignment"
				sx={{...props.sx, width: "100%", justifyContent: "center", alignItems: "center"}}
			>
				{categories.map((category, index) => (
					<ToggleButton value={index} aria-label="left aligned" key={index}>
						{categories[index].icon}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		</React.Fragment>
	)
}