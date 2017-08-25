import React, {Component} from 'react'
import axios from 'axios'
import NavbarCustom from '../components/NavbarCustom'
import HeaderCustom from '../components/HeaderCustom'
import TableCustom from '../components/TableCustom'
import WelcomeMessage from '../components/WelcomeMessage'
import Forecast from './Forecast'
import {Well, Tabs, Tab} from 'react-bootstrap'

const getInitialState = () =>({
		cityName:'',
		newCityName:'',
		cityInfo:{},
		cityForecast:{},
	})
export default class Weather extends Component{
	constructor(props){
		super(props)
		this.state = getInitialState()
		this.changeCity = this.changeCity.bind(this)
		this.onChangeName = this.onChangeName.bind(this)
	}
	onChangeName(e){
		const newCityName = e.target.value
		this.setState({...this.state, newCityName})
	}
	changeCity(cityName){
		if (typeof cityName === 'object') 
			cityName = this.state.newCityName
		const apiKey = '2eea1197c05044c9af16fff608cdc1eb'
	    const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
	    const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='
	    const wUrl = `${weatherUrl}${cityName}&units=metric&appid=${apiKey}`
	    const fUrl = `${forecastUrl}${cityName}&units=metric&appid=${apiKey}`
	    axios
			.get(wUrl)
			.then(res => {
				this.setState({...this.state, cityName: cityName, cityInfo: res.data})
	        })

	    axios.get(fUrl)
	    	.then( res => {
	    		console.log(res.data)
	    		this.setState({...this.state, cityForecast: res.data})
	    	})
	}

	render(){
		const {cityName, cityInfo, cityForecast} = this.state
		return (
			<div className="Weather-container">
				<NavbarCustom 
					onHomeClick={()=> this.setState(getInitialState())}
					onBerlinClick={() => this.changeCity('Berlin')} 
					onWalthamClick={() => this.changeCity('Waltham')} 
					onSearchClick={this.changeCity} 
					onInputChange={this.onChangeName} 
					/>
				{
					!!cityName ? (
						<div className="weather-info">
							<HeaderCustom city={cityName} country={cityInfo.sys.country} />
							<Well bsSize="large">
								<h2>
									<img 
										src={"http://openweathermap.org/img/w/"+cityInfo.weather[0].icon+".png"} 
										alt="Weather" 
										width="50" 
										height="50"/>
									{cityInfo.main.temp} °C
								</h2>
							</Well>
							<Tabs id="main-tabs" className="weather-tabs">
							    <Tab eventKey={1} title="Current Weather">
							    	<TableCustom cityInfo={cityInfo} />
							    </Tab>
							    <Tab eventKey={2} title="Forecast">
							    	<Forecast cityForecast={cityForecast} />
							    </Tab>
							  </Tabs>
						</div>
					) : (
						<WelcomeMessage />
					) 
				}
			</div>
		)
	}
}