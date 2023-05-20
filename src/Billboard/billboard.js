import axios from 'axios';

const Url='https://billboard2.p.rapidapi.com/billboard_global_200'

const options = {
    method: 'GET',
    params: {date: '2020-09-19'},
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'billboard2.p.rapidapi.com'
    }
  };

export const myBillbord=async()=>{
    try {
        const response = await axios.get(Url,options);
        return response
    } catch (error) {
        console.error(error);
    }

}



