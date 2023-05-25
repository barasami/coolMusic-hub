import axios from 'axios';

const Url='https://billboard-api2.p.rapidapi.com/hot-100'

const options = {
  params: {
    date: '2019-05-11',
    range: '1-10'
  },
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
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



