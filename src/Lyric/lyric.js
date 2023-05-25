import axios from 'axios';

const Url='https://l-yrics.p.rapidapi.com/'

const options = {
  params: {
    song: 'window shopper',
    artist: '50cent'
  },
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'l-yrics.p.rapidapi.com'
  }
};

export const getLyric=async()=>{
    try {
        const response = await axios.get(Url,options);
        return response
    } catch (error) {
        console.error(error);
    }
}