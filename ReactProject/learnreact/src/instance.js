import axios from "axios";

export const API = axios.create({
    headers: {
        'X-RapidAPI-Key': '17e479a8b4msh3bf267fa71b047ep1833fajsnb7f7382c5543',
        'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
    }
});

export const URI = "https://burgers-hub.p.rapidapi.com/burgers/1"

