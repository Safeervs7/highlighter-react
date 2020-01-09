import axios from 'axios';
const fetchData = async ()=>{
    // await new Promise(resolve => setTimeout(resolve, 10000));
    let data =  await axios
        .get('./data/data_file.json')
        .then(({ data })=> {
            return data;
        })
        .catch((err)=> {});
    let highlight =  await axios
        .get('./data/highlight.json')
        .then(({ data })=> {
            return data;
        })
        .catch((err)=> {});
    return {
        data : data,
        highlight : highlight,
    }
}
  
export default fetchData;