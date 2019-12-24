// import React, {createContext,useState,useEffect} from 'react';
// import axios from 'axios'

// export const MovieContext = createContext ()


// export const MovieController = (props)=> {
//     const [dataApi, setDataApi] = useState([]);

// useEffect( () => {
//     const getApi = async () =>{
//        const result = await  axios.get('https://ghibliapi.herokuapp.com/films')
//            setDataApi(result.response.data)
//             .catch(error => console.log(error))
//     }
//     getApi()    
//     },[]);

   

//     // useEffect(() => {
    
//     //     const getApi = async () =>{
//     //          const result =  await Axios("https://hackathon-wild-hackoween.herokuapp.com/movies")
//     //           setDataApi(result.data.movies)
//     //           }
//     //          getApi()
//     //         }, [])
        

// return (
//     <MovieContext.Provider value={[dataApi, setDataApi]}>
//         {props.children}
//     </MovieContext.Provider>
// )}