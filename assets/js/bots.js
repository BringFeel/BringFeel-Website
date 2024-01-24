				const urlCH = 'https://cors.unmutedte.ch/https://disstat-api.tomatenkuchen.com/api/bots/chitopanbot?timezone=America/Buenos_Aires&locale=es-419&start=2023-07-17T0000&dataPoints=90';
				const urlKF = 'https://cors.unmutedte.ch/https://disstat-api.tomatenkuchen.com/api/bots/koofa?timezone=America/Buenos_Aires&locale=es-419&start=2023-07-17T0000&dataPoints=90';

				const requestOptions = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Origin': 'https://bringfeel.com.ar/',
					},
				};

				function ChitoPanBOT() {
  				  fetch(urlCH, requestOptions).then(response => {
					return response.json();
				}).then(data => {
					var servers_chitopanbot = document.getElementById("servers-chitopanbot");
	                                servers_chitopanbot.innerHTML = data.charts[0].data[data.charts[0].data.length - 1];
					
				})
			    }
                ChitoPanBOT()

				function Koofa() {
  				  fetch(urlKF, requestOptions).then(response => {
					return response.json();
				}).then(data => {
					var servers_koofa = document.getElementById("servers-koofa");
	                                servers_koofa.innerHTML = data.charts[0].data[data.charts[0].data.length - 1];
					
				})
			    }
                Koofa()
