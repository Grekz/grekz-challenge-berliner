import React, {PropTypes} from 'react'
import {PageHeader} from 'react-bootstrap'

const HeaderCustom = ({city, country}) => (
	<PageHeader>
	The Weather in {city}, {country.toUpperCase()} is:
	</PageHeader>
)
HeaderCustom.propTypes = {
	city: PropTypes.string,
	country: PropTypes.string,
}
export default HeaderCustom