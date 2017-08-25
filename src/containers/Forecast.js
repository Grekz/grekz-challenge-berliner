import React, {PropTypes} from 'react'
import {Table} from 'react-bootstrap'

const Forecast= ({cityForecast}) => (
	<Table>
		<thead>
			<th>Hour</th>
			<th>Temperature</th>
		</thead>
		<tbody>
		{!!cityForecast.list && cityForecast.list.map(
			(x,i)=> {
				const date = new Date(x.dt * 1000)
				return (
					<tr key={i}>
						<td>{date.getHours() + ':' + ('0' + date.getMinutes()).substr(-2)}</td>
						<td>
							{x.main.temp} °C 
							<img src={"http://openweathermap.org/img/w/"+x.weather[0].icon+".png"} 
								alt="Weather" 
								width="25" 
								height="25"/>
						</td>
					</tr>)
			}
		)}
		</tbody>
	</Table>
)

Forecast.propTypes = {
	cityForecast: PropTypes.object,
}

export default Forecast