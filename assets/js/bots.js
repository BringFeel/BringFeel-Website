const apiURL = 'https://cors-anywhere.bringfeel.com.ar/https://api.bringfeel.com.ar/chitopanbot/getStatus?startDate=2024-01-16%2013:01:01&dataPoints=2';

	const requestOptions = {
		method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Origin': 'https://bringfeel.com.ar/',
		},
	};

	function updateBot(url, options) {
		fetch(url, options).then(response => {return response.json();
		}).then(data => {
			document.getElementById("servers-chitopanbot").innerHTML = data.charts.serverCount.data[1];;
			document.getElementById("servers-koofa").innerHTML = '???';
		})
	}

    updateBot(apiURL, requestOptions)
