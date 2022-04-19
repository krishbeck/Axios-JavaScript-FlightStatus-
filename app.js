import 'regenerator-runtime/runtime';
import axios from 'axios';

const BASE_URL = `https://api.allorigins.win/get?url=${encodeURIComponent('https://www.tiairport.com.np/flight_details_2')}`;

const axiosConfig = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    credentials: 'same-origin',
}


const getFlightStatus = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        const flightStatus = response.data.contents;
        //console.log(`GET: Here's the list of flights`, flightStatus);
        const flightJson = JSON.parse(flightStatus)
        return flightJson.data.arrivals;
    }
    catch (errors) {
        console.error(errors);
    }
};

const createFlightListElement = item => {
    //const todoElement = document.createElement('li');
    //
    // todoElement.appendChild(document.createTextNode(item.Airline + " "));
    // todoElement.appendChild(document.createTextNode(item.FlightNumber + " "));
    // todoElement.appendChild(document.createTextNode(item.OrigDest + " "));
    // todoElement.appendChild(document.createTextNode(item.STASTD_DATE + " "));
    // todoElement.appendChild(document.createTextNode(item.ETAETD_date + " "));
    // todoElement.appendChild(document.createTextNode(item.FlightStatus + " "));

    const rowEntry = document.createElement('tr')

    const flightAirlineEntry = document.createElement('td');
    flightAirlineEntry.appendChild(document.createTextNode(item.Airline +""))

    const flightNumberEntry = document.createElement('td');
    flightNumberEntry.appendChild(document.createTextNode(item.FlightNumber+""))

    const flightOrigDestEntry = document.createElement('td');
    flightOrigDestEntry.appendChild(document.createTextNode(item.OrigDest+""))

    const flightSTASTD_DATEEntry = document.createElement('td');
    flightSTASTD_DATEEntry.appendChild(document.createTextNode(item.STASTD_DATE+""))

    const flightETAETD_dateEntry = document.createElement('td');
    flightETAETD_dateEntry.appendChild(document.createTextNode(item.ETAETD_date+""))

    const  flightFlightStatusEntry= document.createElement('td');
    flightFlightStatusEntry.appendChild(document.createTextNode(item.FlightStatus+""))

    rowEntry.appendChild(flightAirlineEntry)
    rowEntry.appendChild(flightNumberEntry)
    rowEntry.appendChild(flightOrigDestEntry)
    rowEntry.appendChild(flightSTASTD_DATEEntry)
    rowEntry.appendChild(flightETAETD_dateEntry)
    rowEntry.appendChild(flightFlightStatusEntry)

    return rowEntry;
}

const updateFlightList = todoItems => {
    const todoList = document.querySelector('table .flight-row');

    if (Array.isArray(todoItems) && todoItems.length > 0) {
        todoItems.map(todoItem => {
            todoList.appendChild(createFlightListElement(todoItem));
        });
    } else if (todoItems) {
        todoList.appendChild(createFlightListElement(todoItems));
    }
};

const main = async () => {
    updateFlightList(await getFlightStatus());
};

main();


