import axios from 'axios';

const Url='https://spotify23.p.rapidapi.com/search/'


export const getArtist=async(coolartist)=>{
    try {
        const response = await axios.get(Url,{
          params: {
            q: `${coolartist}`,
            type: 'multi',
            offset: '0',
            limit: '10',
            numberOfTopResults: '5'
          },
          headers: {
            'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
      });
        return response
    } catch (error) {
        console.error(error);
    }

}



