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
            let highlightArray = {
                inclusion: [],
                exclusion: [],
            };

            //re structure highlighter json
            if(data && data.formattedAnnotations){
                data.formattedAnnotations.forEach((annotation)=>{
                    if(annotation && annotation.annotations && annotation.annotations.annotations && annotation.annotations.annotations.encounters){
                        if(annotation.annotations.annotations.encounters.inclusion){
                            annotation.annotations.annotations.encounters.inclusion.forEach((inclusion)=>{
                                highlightArray.inclusion.push(inclusion);
                            });
                        }
                        if(annotation.annotations.annotations.encounters.exclusion){
                            annotation.annotations.annotations.encounters.exclusion.forEach((exclusion)=>{
                                highlightArray.exclusion.push(exclusion);
                            });
                        }
                    }
                });
            }
            return highlightArray;
        })
        .catch((err)=> {});
    return {
        data : data,
        highlight : highlight,
    }
}
  
export default fetchData;