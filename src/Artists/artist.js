import axios from 'axios';

const Url='https://spotify23.p.rapidapi.com/search/'

const options = {
    method: 'GET',
    params: {
      q: '50cent',
      type: 'multi',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

export const getArtist=async()=>{
    try {
        const response = await axios.get(Url,options);
        return response
    } catch (error) {
        console.error(error);
    }

}



