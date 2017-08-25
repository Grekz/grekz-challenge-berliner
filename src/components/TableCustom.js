import React, {PropTypes} from 'react'
import {Table} from 'react-bootstrap'

const TableCustom = ({cityInfo}) => (
	<Table className="customTable">
		<tbody>
			<tr><td>Overall:</td><td>{cityInfo.weather[0].main}</td></tr>
			<tr><td>Humidity:</td><td>{cityInfo.main.humidity} %</td></tr>
			<tr><td>Pressure:</td><td>{cityInfo.main.pressure} hpa</td></tr>
			<tr><td>Wind:</td><td>{cityInfo.wind.speed} m/s</td></tr>
			<tr><td>Cloudiness:</td><td>{cityInfo.clouds.all} %</td></tr>
			<tr><td>Geolocation:</td><td>{cityInfo.coord.lat},{cityInfo.coord.lon}</td></tr>
		</tbody>
	</Table>
)

TableCustom.propTypes = {
	cityInfo: PropTypes.object,
}

export default TableCustom