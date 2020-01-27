const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const units = 'si'
	const lang = 'fr'
	const url = 'https://api.darksky.net/forecast/488d6703fa55130c970b443564c77fc7/' + latitude + ',' + longitude + '?units=' + units + '&lang=' + lang

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service.', undefined)
		} else if (body.error) {
			callback('Unable to find location.', undefined)
		} else {
			// callback(undefined, {
			// 	temperature: response.body.currently.temperature,
			// 	precipitation: response.body.currently.precipProbability
			// })
			callback(undefined, body.daily.data[0].summary + ' La maximale est de ' + body.daily.data[0].temperatureMax + '°C pour une minimale de ' + body.daily.data[0].temperatureMin + '°C. Il fait actuellement ' + body.currently.temperature + '°C. Il y a ' + body.currently.precipProbability + '% de chance de précipitation.')
		}
	})
}

module.exports = forecast