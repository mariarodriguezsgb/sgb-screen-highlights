//Screen sample data (for development purposes)
data = [
		{
			'channel':'ESPN',
			'img':'http://neuroticsportsfan.com/wp-content/uploads/2015/01/espn-logo-square-300x3001.jpg',
			'checked':false,
			'shows': [
				{
					'name':'Court Central',
					'live':'Grabado',
					'time':0.5,
					'duration':0.5,
					'description':'Un programa dedicado a los amantes del tenis, en el que su conductor, Juan Szafrán, presenta toda la actualidad, la historia y las curiosidades del tenis mundial y del circuito profesional.',
					'host':'Juan Szafrán',
					'genre':'Tennis',
					'rating':4,
					'trending':true,
					'trendingimg':'http://s3.amazonaws.com/vnn-aws-sites/2871/files/2014/06/tennis.jpg',
					'votes':96,
					'schedule' : [
						{
							'day':'Miercoles',
							'time':'00:30',
							'channel':'ESPN Latin South Andina'
						},
						{
							'day': 'Miercoles',
							'time': '06:00',
							'channel': 'ESPN Latin South Andina' 
						},
						{
							'day': 'Miercoles',
							'time': '06:30',
							'channel': 'ESPN 2 Venezuela'
						},
						{
							'day': 'Miercoles',
							'time': '15:30',
							'channel': 'ESPN Latin South Andina'
						},
						{
							'day': 'Miercoles',
							'time': '16:30',
							'channel': 'ESPN 2 Venezuela'
						},
						{
							'day': 'Miercoles',
							'time': '17:30',
							'channel': 'ESPN Latin HD'
						},
						{
							'day': 'Miercoles',
							'time': '18:00',
							'channel': 'ESPN3'
						},
						{
							'day': 'Jueves',
							'time': '03:30',
							'channel': 'ESPN Latin HD'
						},
						{
							'day': 'Jueves',
							'time': '11:00',
							'channel': 'ESPN Latin HD'
						},
						{
							'day': 'Jueves',
							'time': '16:30',
							'channel': 'ESPN3'
						},
						{
							'day': 'Viernes',
							'time': '13:00',
							'channel': 'ESPN Latin HD'
						}
					]
				},
				{
					'name':'La Liga World',
					'live':'Grabado',
					'time':1,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'Fútbol',
					'rating':3,
					'votes':32,
					'schedule' : [
						{
							'day':'Miercoles',
							'time':'00:30',
							'channel':'ESPN3'
						},
						{
							'day': 'Miercoles',
							'time': '01:00',
							'channel': 'ESPN Latin South Andina' 
						},
						{
							'day': 'Miercoles',
							'time': '14:30',
							'channel': 'ESPN 2 Venezuela'
						},
						{
							'day': 'Miercoles',
							'time': '18:00',
							'channel': 'ESPN 2 Venezuela'
						},
						{
							'day': 'Miercoles',
							'time': '21:00',
							'channel': 'ESPN 2 Venezuela'
						},
						{
							'day': 'Jueves',
							'time': '01:00',
							'channel': 'ESPN3'
						},
						{
							'day': 'Jueves',
							'time': '09:30',
							'channel': 'ESPN Latin South Andina'
						},
						{
							'day': 'Jueves',
							'time': '15:55',
							'channel': 'ESPN 2 Venezuela'
						},
						{
							'day': 'Viernes',
							'time': '05:00',
							'channel': 'ESPN 2 Venezuela'
						}
					]
				},
				{
					'name':'Hablemos de fútbol',
					'live':'Grabado',
					'time':1.5,
					'duration':1,
					'description':'Un destacado panel de especialistas analiza la actualidad del deporte más apasionante. Debates tácticos, invitados especiales y la mejor cobertura de los grandes eventos a nivel mundial. ',
					'host':'Jorge Barril',
					'genre':'Fútbol',
					'rating':4 ,
					'votes':45
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':2.5,
					'duration':1,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':3.5,
					'duration':1,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':4.5,
					'duration':1,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'ESPN W by Nosotras',
					'live':'Grabado',
					'time':5.5,
					'duration':0.5,
					'description':'ESPN Woman es un magazine enteramente destinado a la mujer y con un enfoque innovador. Especialmente pensado para mujeres que, de alguna manera, “vivan el deporte”',
					'host':'Carla Rebecci',
					'genre':'Noticiero',
					'rating': 3,
					'votes':150
				},
				{
					'name':'Court Cental',
					'live':'Grabado',
					'time':6,
					'duration':0.5,
					'description':'Un programa dedicado a los amantes del tenis, en el que su conductor, Juan Szafrán, presenta toda la actualidad, la historia y las curiosidades del tenis mundial y del circuito profesional.',
					'host':'Juan Szafrán',
					'genre':'Tennis',
					'rating':4,
					'votes':96
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':6.5,
					'duration':1,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':7.5,
					'duration':1,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'Hablemos de Fútbol',
					'live':'Grabado',
					'time':8.5,
					'duration':1,
					'description':'Un destacado panel de especialistas analiza la actualidad del deporte más apasionante. Debates tácticos, invitados especiales y la mejor cobertura de los grandes eventos a nivel mundial. ',
					'host':'Jorge Barril',
					'genre':'Fútbol',
					'rating':4 ,
					'votes':45
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':9.5,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'Asia-Pacific Amateur Championship. Final Round',
					'live':'Diferido',
					'time':10,
					'duration':0.5,
					'specs':'Highlight Show',
					'description':'El Campeonato Amateur de Asia y el Pacífico es un torneo anual de golf amateur. Se juega en varios lugares a lo largo de Asia y el Pacífico. Está organizado por la Confederación de golf de Asia Pacífico (APGC) y se jugó por primera vez en 2009. Fue organizado conjuntamente con el Torneo de Maestros y el R & A, los organizadores del Open Championship',
					'genre':'Golf',
					'rating': 3,
					'votes':3
				},
				{
					'name':'ESPN W by Nosotras',
					'live':'Grabado',
					'time':10.5,
					'duration':0.5,
					'description':'ESPN Woman es un magazine enteramente destinado a la mujer y con un enfoque innovador. Especialmente pensado para mujeres que, de alguna manera, “vivan el deporte”',
					'host':'Carla Rebecci',
					'genre':'Noticiero',
					'rating': 3,
					'votes':150
				},
				{
					'name':'ESPN X',
					'live':'Grabado',
					'time':11,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Compact. UEFA Champions League 2015-2016',
					'live':'Grabado',
					'time':11.5,
					'duration':1,
					'specs':'Borussia Monchengladbach vs Manchester City',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'2015 Equitación GP CHA',
					'live':'Grabado',
					'time':12.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'2015 FIM X Trial World Championship',
					'live':'Grabado',
					'time':13.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':14.5,
					'duration':1,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'Court Central',
					'live':'Grabado',
					'time':15.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Run',
					'live':'Grabado',
					'time':16,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Scrum RWC 2015',
					'live':'Vivo',
					'time':16.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':17.5,
					'duration':1,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'Hablemos de fútbol',
					'live':'Vivo',
					'time':18.5,
					'duration':1,
					'description':'Un destacado panel de especialistas analiza la actualidad del deporte más apasionante. Debates tácticos, invitados especiales y la mejor cobertura de los grandes eventos a nivel mundial. ',
					'host':'Jorge Barril',
					'genre':'Fútbol',
					'rating':4 ,
					'votes':45
				},
				{
					'name':'Camino a Rio 2016',
					'live':'Grabado',
					'time':19.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Run',
					'live':'Grabado',
					'time':20,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Asia-Pacific Amateur Championship. Final Round',
					'live':'Diferido',
					'time':20.5,
					'duration':0.5,
					'specs':'Highlight Show',
					'description':'El Campeonato Amateur de Asia y el Pacífico es un torneo anual de golf amateur. Se juega en varios lugares a lo largo de Asia y el Pacífico. Está organizado por la Confederación de golf de Asia Pacífico (APGC) y se jugó por primera vez en 2009. Fue organizado conjuntamente con el Torneo de Maestros y el R & A, los organizadores del Open Championship',
					'genre':'Golf',
					'rating': 3,
					'votes':3
				},
				{
					'name':'PGA Tour Golf. Presidents Cup',
					'live':'Grabado',
					'time':21,
					'duration':0.5,
					'specs':'9',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'PGA Tour Golf. Presidents Cup',
					'live':'Vivo',
					'time':21.5,
					'duration':2.5,
					'specs':'First Round',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45,
					'trending':true,
					'trendingimg':'http://golfmino.com/wp-content/uploads/2014/03/golfligasenior.jpg'
				}
			]
		},
		{
			'channel':'ESPN2',
			'img':'http://www.vectorizados.com/muestras/espn2.jpg',
			'checked':false,
			'shows': [
				{
					'name':'Balón Dividido',
					'live':'Grabado',
					'time':0.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45,
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':1.5,
					'duration':1,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'Hablemos de fútbol',
					'live':'Grabado',
					'time':2.5,
					'duration':1,
					'description':'Un destacado panel de especialistas analiza la actualidad del deporte más apasionante. Debates tácticos, invitados especiales y la mejor cobertura de los grandes eventos a nivel mundial. ',
					'host':'Jorge Barril',
					'genre':'Fútbol',
					'rating':4 ,
					'votes':45
				},
				{
					'name':'Balón Dividido',
					'live':'Grabado',
					'time':3.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45,
					'trending':true,
					'trendingimg':'http://lloydsoccer.com/news_images/org_3064/Image/soccer-scholarships.jpg'
				},
				{
					'name':'2015 Poker Stars',
					'live':'Grabado',
					'time':4.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45,
					'trending':true,
					'trendingimg':'http://www.elpokercasino.es/wp-content/uploads/2014/07/5-Stud-Poker.jpg'
				},
				{
					'name':'Hablemos de fútbol',
					'live':'Grabado',
					'time':5.5,
					'duration':1,
					'description':'Un destacado panel de especialistas analiza la actualidad del deporte más apasionante. Debates tácticos, invitados especiales y la mejor cobertura de los grandes eventos a nivel mundial. ',
					'host':'Jorge Barril',
					'genre':'Fútbol',
					'rating':4 ,
					'votes':45
				},
				{
					'name':'Court Cental',
					'live':'Grabado',
					'time':6.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN W',
					'live':'Grabado',
					'time':7,
					'duration':0.5,
					'description':'ESPN Woman es un magazine enteramente destinado a la mujer y con un enfoque innovador. Especialmente pensado para mujeres que, de alguna manera, “vivan el deporte”',
					'host':'Carla Rebecci',
					'genre':'Noticiero',
					'rating': 3,
					'votes':150
				},
				{
					'name':'Balón Dividido',
					'live':'Grabado',
					'time':7.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':8.5,
					'duration':1,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'SportsCenter',
					'live':'Vivo',
					'time':9.5,
					'duration':2,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'Balón Dividido',
					'live':'Grabado',
					'time':11.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'UEFA Champions League',
					'live':'Grabado',
					'time':12.5,
					'duration':0.5,
					'specs':'Highlights',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'UEFA Champions League',
					'live':'Grabado',
					'time':13,
					'duration':0.5,
					'specs':'Highlights',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':13.5,
					'duration':1,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'La Liga World',
					'live':'Grabado',
					'time':14.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Compact. Ligue 1 2015-2016',
					'live':'Grabado',
					'time':15,
					'duration':1,
					'specs':'PSG vs Olympique Marseille',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN W',
					'live':'Grabado',
					'time':16,
					'duration':0.5,
					'description':'ESPN Woman es un magazine enteramente destinado a la mujer y con un enfoque innovador. Especialmente pensado para mujeres que, de alguna manera, “vivan el deporte”',
					'host':'Carla Rebecci',
					'genre':'Noticiero',
					'rating': 3,
					'votes':150
				},
				{
					'name':'Court Central',
					'live':'Grabado',
					'time':16.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'UEFA Europa League Highlights',
					'live':'Grabado',
					'time':17,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'La Liga World',
					'live':'Grabado',
					'time':18,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'SportsCenter',
					'live':'Vivo',
					'time':18.5,
					'duration':2,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':20.5,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'La Liga World',
					'live':'Grabado',
					'time':21,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'UEFA Europa League Highlights',
					'live':'Grabado',
					'time':22,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Balón Dividido',
					'live':'Vivo',
					'time':22.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'SportsCenter',
					'live':'Grabado',
					'time':23.5,
					'duration':0.5,
					'description':'SportsCenter es el noticiero de ESPN que brinda un amplio panorama del deporte mundial',
					'host':'',
					'genre':'Noticiero',
					'rating':3 ,
					'votes':108
				}
			]
		},
		{
			'channel':'ESPN3',
			'img':'http://screamingreviews.com/wp-content/uploads/2010/12/ESPN3-Square-300x300.jpg',
			'checked':false,
			'shows': [
				{
					'name':'Goles de La Serie A',
					'live':'Grabado',
					'time':0.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'La Liga World',
					'live':'Grabado',
					'time':1,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Goles de la Ligue 1',
					'live':'Grabado',
					'time':1.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Goles de la Eredivisie',
					'live':'Grabado',
					'time':2.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'2015 Ironamn Thriatlon. Canada',
					'live':'Grabado',
					'time':3.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Camino a Rio 2016',
					'live':'Grabado',
					'time':4.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN W by Nosotras',
					'live':'Grabado',
					'time':5,
					'duration':0.5,
					'description':'ESPN Woman es un magazine enteramente destinado a la mujer y con un enfoque innovador. Especialmente pensado para mujeres que, de alguna manera, “vivan el deporte”',
					'host':'Carla Rebecci',
					'genre':'Noticiero',
					'rating': 3,
					'votes':150
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':5.5,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'ESPN Adventure',
					'live':'Grabado',
					'time':6,
					'duration':0.5,
					'specs':'Invierno en la Patagonia 2',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN X',
					'live':'Grabado',
					'time':6.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'High School Anthology. Colegios en Acción',
					'live':'Grabado',
					'time':7,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Hablemos de fútbol',
					'live':'Grabado',
					'time':7.5,
					'duration':1,
					'description':'Un destacado panel de especialistas analiza la actualidad del deporte más apasionante. Debates tácticos, invitados especiales y la mejor cobertura de los grandes eventos a nivel mundial. ',
					'host':'Jorge Barril',
					'genre':'Fútbol',
					'rating':4 ,
					'votes':45
				},
				{
					'name':'#Redes',
					'live':'Grabado',
					'time':8.5,
					'duration':1,
					'description':'El entretenimiento se multiplica en las redes sociales. La interacción es la protagonista principal en un espacio ideal para divertirse. Nada es igual cuando ESPN Redes entra en acción. Juan Ignacio Chela, Mariana Muni Seligmann y Juan Marconi te invitan a conectarte en la nueva temporada de #Redes',
					'host':'Juan Ignacio Chela',
					'genre':'Fútbol',
					'rating': 4,
					'votes': 113
				},
				{
					'name':'ESPN Compact. Rugby World Cup 2015',
					'live':'Grabado',
					'time':9.5,
					'duration':1,
					'specs':'Inglaterra vs Australia',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'The Presidents Cup',
					'live':'Vivo',
					'time':10.5,
					'duration':2,
					'specs':'Primera vuelta',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN X',
					'live':'Grabado',
					'time':12.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Adventure. Invierno en la Patagonia 2',
					'live':'Grabado',
					'time':13,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':13.5,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'Eliminatorias Europeas. Eurocopa 2016',
					'live':'Vivo',
					'time':14,
					'duration':2.25,
					'specs':'Rumania vs Finlandia',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Goles de Europa',
					'live':'Grabado',
					'time':16.25,
					'duration':0.25,
					'specs':'Últimos 4 Campeones UEL',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Court Central',
					'live':'Grabado',
					'time':16.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'High School Anthology. Colegios en Acción',
					'live':'Grabado',
					'time':17,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN X',
					'live':'Grabado',
					'time':17.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Camino a Rio 2016',
					'live':'Grabado',
					'time':18,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Copa del Mundo FIS',
					'live':'Grabado',
					'time':18.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Compact',
					'live':'Grabado',
					'time':19.5,
					'duration':1,
					'specs':'Eliminatorias Europeas. Eurocopa 2016. Irlanda vs. Alemania',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Formula 1 por dentro. F1 The Inside Line',
					'live':'Grabado',
					'time':20.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':21,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'#Redes',
					'live':'Grabado',
					'time':21.5,
					'duration':1,
					'description':'El entretenimiento se multiplica en las redes sociales. La interacción es la protagonista principal en un espacio ideal para divertirse. Nada es igual cuando ESPN Redes entra en acción. Juan Ignacio Chela, Mariana Muni Seligmann y Juan Marconi te invitan a conectarte en la nueva temporada de #Redes',
					'host':'Juan Ignacio Chela',
					'genre':'Fútbol',
					'rating': 4,
					'votes': 113
				},
				{
					'name':'ESPN Compact',
					'live':'Grabado',
					'time':22.5,
					'duration':1,
					'specs':'Eliminatorias Europeas. Eurocopa 2016. Rumania vs. Finlandia',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Fuera de Juego',
					'live':'Diferido',
					'time':23.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				}
			]
		},
		{
			'channel':'ESPNPlay',
			'img':'https://pbs.twimg.com/profile_images/378800000467110787/05e916582904d936c907491e65762d73_400x400.png',
			'checked':false,
			'shows': [
				{
					'name':'Goles de La Serie A',
					'live':'Grabado',
					'time':0.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'La Liga World',
					'live':'Grabado',
					'time':1,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Goles de la Ligue 1',
					'live':'Grabado',
					'time':1.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Goles de la Eredivisie',
					'live':'Grabado',
					'time':2.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'2015 Ironamn Thriatlon. Canada',
					'live':'Grabado',
					'time':3.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Camino a Rio 2016',
					'live':'Grabado',
					'time':4.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN W by Nosotras',
					'live':'Grabado',
					'time':5,
					'duration':0.5,
					'description':'ESPN Woman es un magazine enteramente destinado a la mujer y con un enfoque innovador. Especialmente pensado para mujeres que, de alguna manera, “vivan el deporte”',
					'host':'Carla Rebecci',
					'genre':'Noticiero',
					'rating': 3,
					'votes':150
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':5.5,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'ESPN Adventure',
					'live':'Grabado',
					'time':6,
					'duration':0.5,
					'specs':'Invierno en la Patagonia 2',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN X',
					'live':'Grabado',
					'time':6.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'High School Anthology. Colegios en Acción',
					'live':'Grabado',
					'time':7,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Hablemos de fútbol',
					'live':'Grabado',
					'time':7.5,
					'duration':1,
					'description':'Un destacado panel de especialistas analiza la actualidad del deporte más apasionante. Debates tácticos, invitados especiales y la mejor cobertura de los grandes eventos a nivel mundial. ',
					'host':'Jorge Barril',
					'genre':'Fútbol',
					'rating':4 ,
					'votes':45
				},
				{
					'name':'#Redes',
					'live':'Grabado',
					'time':8.5,
					'duration':1,
					'description':'El entretenimiento se multiplica en las redes sociales. La interacción es la protagonista principal en un espacio ideal para divertirse. Nada es igual cuando ESPN Redes entra en acción. Juan Ignacio Chela, Mariana Muni Seligmann y Juan Marconi te invitan a conectarte en la nueva temporada de #Redes',
					'host':'Juan Ignacio Chela',
					'genre':'Fútbol',
					'rating': 4,
					'votes': 113
				},
				{
					'name':'ESPN Compact. Rugby World Cup 2015',
					'live':'Grabado',
					'time':9.5,
					'duration':1,
					'specs':'Inglaterra vs Australia',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'The Presidents Cup',
					'live':'Vivo',
					'time':10.5,
					'duration':2,
					'specs':'Primera vuelta',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN X',
					'live':'Grabado',
					'time':12.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Adventure. Invierno en la Patagonia 2',
					'live':'Grabado',
					'time':13,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':13.5,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'Eliminatorias Europeas. Eurocopa 2016',
					'live':'Vivo',
					'time':14,
					'duration':2.25,
					'specs':'Rumania vs Finlandia',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Goles de Europa',
					'live':'Grabado',
					'time':16.25,
					'duration':0.25,
					'specs':'Últimos 4 Campeones UEL',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Court Central',
					'live':'Grabado',
					'time':16.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'High School Anthology. Colegios en Acción',
					'live':'Grabado',
					'time':17,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN X',
					'live':'Grabado',
					'time':17.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Camino a Rio 2016',
					'live':'Grabado',
					'time':18,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Copa del Mundo FIS',
					'live':'Grabado',
					'time':18.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Compact',
					'live':'Grabado',
					'time':19.5,
					'duration':1,
					'specs':'Eliminatorias Europeas. Eurocopa 2016. Irlanda vs. Alemania',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Formula 1 por dentro. F1 The Inside Line',
					'live':'Grabado',
					'time':20.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':21,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'#Redes',
					'live':'Grabado',
					'time':21.5,
					'duration':1,
					'description':'El entretenimiento se multiplica en las redes sociales. La interacción es la protagonista principal en un espacio ideal para divertirse. Nada es igual cuando ESPN Redes entra en acción. Juan Ignacio Chela, Mariana Muni Seligmann y Juan Marconi te invitan a conectarte en la nueva temporada de #Redes',
					'host':'Juan Ignacio Chela',
					'genre':'Fútbol',
					'rating': 4,
					'votes': 113
				},
				{
					'name':'ESPN Compact',
					'live':'Grabado',
					'time':22.5,
					'duration':1,
					'specs':'Eliminatorias Europeas. Eurocopa 2016. Rumania vs. Finlandia',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Fuera de Juego',
					'live':'Diferido',
					'time':23.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				}
			]
		},
		{
			'channel':'watchESPN',
			'img':'http://www.ctcak.net/wp/wp-content/uploads/watchespn_square_logo.png',
			'checked':false,
			'shows': [
				{
					'name':'Goles de La Serie A',
					'live':'Grabado',
					'time':0.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'La Liga World',
					'live':'Grabado',
					'time':1,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Goles de la Ligue 1',
					'live':'Grabado',
					'time':1.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Goles de la Eredivisie',
					'live':'Grabado',
					'time':2.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'2015 Ironamn Thriatlon. Canada',
					'live':'Grabado',
					'time':3.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Camino a Rio 2016',
					'live':'Grabado',
					'time':4.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN W by Nosotras',
					'live':'Grabado',
					'time':5,
					'duration':0.5,
					'description':'ESPN Woman es un magazine enteramente destinado a la mujer y con un enfoque innovador. Especialmente pensado para mujeres que, de alguna manera, “vivan el deporte”',
					'host':'Carla Rebecci',
					'genre':'Noticiero',
					'rating': 3,
					'votes':150
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':5.5,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'ESPN Adventure',
					'live':'Grabado',
					'time':6,
					'duration':0.5,
					'specs':'Invierno en la Patagonia 2',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN X',
					'live':'Grabado',
					'time':6.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'High School Anthology. Colegios en Acción',
					'live':'Grabado',
					'time':7,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Hablemos de fútbol',
					'live':'Grabado',
					'time':7.5,
					'duration':1,
					'description':'Un destacado panel de especialistas analiza la actualidad del deporte más apasionante. Debates tácticos, invitados especiales y la mejor cobertura de los grandes eventos a nivel mundial. ',
					'host':'Jorge Barril',
					'genre':'Fútbol',
					'rating':4 ,
					'votes':45
				},
				{
					'name':'#Redes',
					'live':'Grabado',
					'time':8.5,
					'duration':1,
					'description':'El entretenimiento se multiplica en las redes sociales. La interacción es la protagonista principal en un espacio ideal para divertirse. Nada es igual cuando ESPN Redes entra en acción. Juan Ignacio Chela, Mariana Muni Seligmann y Juan Marconi te invitan a conectarte en la nueva temporada de #Redes',
					'host':'Juan Ignacio Chela',
					'genre':'Fútbol',
					'rating': 4,
					'votes': 113
				},
				{
					'name':'ESPN Compact. Rugby World Cup 2015',
					'live':'Grabado',
					'time':9.5,
					'duration':1,
					'specs':'Inglaterra vs Australia',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'The Presidents Cup',
					'live':'Vivo',
					'time':10.5,
					'duration':2,
					'specs':'Primera vuelta',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN X',
					'live':'Grabado',
					'time':12.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Adventure. Invierno en la Patagonia 2',
					'live':'Grabado',
					'time':13,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':13.5,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'Eliminatorias Europeas. Eurocopa 2016',
					'live':'Vivo',
					'time':14,
					'duration':2.25,
					'specs':'Rumania vs Finlandia',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Goles de Europa',
					'live':'Grabado',
					'time':16.25,
					'duration':0.25,
					'specs':'Últimos 4 Campeones UEL',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Court Central',
					'live':'Grabado',
					'time':16.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'High School Anthology. Colegios en Acción',
					'live':'Grabado',
					'time':17,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN X',
					'live':'Grabado',
					'time':17.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Camino a Rio 2016',
					'live':'Grabado',
					'time':18,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Copa del Mundo FIS',
					'live':'Grabado',
					'time':18.5,
					'duration':1,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Compact',
					'live':'Grabado',
					'time':19.5,
					'duration':1,
					'specs':'Eliminatorias Europeas. Eurocopa 2016. Irlanda vs. Alemania',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Formula 1 por dentro. F1 The Inside Line',
					'live':'Grabado',
					'time':20.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'ESPN Bike',
					'live':'Grabado',
					'time':21,
					'duration':0.5,
					'description':'Programa dedicado al mundo del ciclismo en cada una de sus disciplinas: Ruta, Pista, MTB y BMX. También podrá encontrar actualidad, consejos, salud, tecnología y todo lo relacionado al mundo de las dos ruedas',
					'host':'Mario Sabato',
					'genre':'Ciclismo',
					'rating':4 ,
					'votes':201
				},
				{
					'name':'#Redes',
					'live':'Grabado',
					'time':21.5,
					'duration':1,
					'description':'El entretenimiento se multiplica en las redes sociales. La interacción es la protagonista principal en un espacio ideal para divertirse. Nada es igual cuando ESPN Redes entra en acción. Juan Ignacio Chela, Mariana Muni Seligmann y Juan Marconi te invitan a conectarte en la nueva temporada de #Redes',
					'host':'Juan Ignacio Chela',
					'genre':'Fútbol',
					'rating': 4,
					'votes': 113
				},
				{
					'name':'ESPN Compact',
					'live':'Grabado',
					'time':22.5,
					'duration':1,
					'specs':'Eliminatorias Europeas. Eurocopa 2016. Rumania vs. Finlandia',
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				},
				{
					'name':'Fuera de Juego',
					'live':'Diferido',
					'time':23.5,
					'duration':0.5,
					'description':'',
					'host':'',
					'genre':'',
					'rating':3,
					'votes': 45
				}
			]
		}
	];