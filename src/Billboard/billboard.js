import axios from 'axios';

const Url='https://mp3-downloader1.p.rapidapi.com/music_search'

const options = {
  params: {
    keywords: 'Ella Baila Sola ',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'mp3-downloader1.p.rapidapi.com'
  }
};


export const myBillbord=async()=>{
    try {
        const response= await axios.get(Url,options);
        return response
    } catch (error) {
        console.error(error);
    }

}



