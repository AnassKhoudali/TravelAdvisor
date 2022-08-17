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
          'X-RapidAPI-Key':
            '4c530fb43cmshc2782398f3f5471p16854ajsn3359dc1c4484',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
