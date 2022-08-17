import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//TO DO : The API is not working for now
// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get(
//         'https://vision-weather-map.p.rapidapi.com/Current-weather/',
//         {
//           params: {
//             lat: lat,
//             lon: lng,
//             lang: 'null',
//             units: 'imperial',
//             mode: 'xml',
//           },
//           headers: {
//             'X-RapidAPI-Key':
//               '4c530fb43cmshc2782398f3f5471p16854ajsn3359dc1c4484',
//             'X-RapidAPI-Host': 'vision-weather-map.p.rapidapi.com',
//           },
//         }
//       );
//       console.log({data})
//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
