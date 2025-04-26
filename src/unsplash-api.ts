import axios from "axios";
import { Image } from "./image";

axios.defaults.baseURL = "https://api.unsplash.com";

const API_KEY = 'nvTchFPSMUWBBPhOuTNEzyZIhqFG5x--XI76MHD7Qqk';

interface Photos{  // concerns return
  results: Image[],
  totalPages: number,
}  
interface UnsplashResponse{
  results: Image[];
  total_pages: number;
}
// put it into grout ca be reused in APP

export default async function getPhotos(searchQuery: string, page: number):Promise <Photos> {
    
  
// const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    const response = await axios.get<UnsplashResponse>("/search/photos", {
        params: {
        client_id: API_KEY,
        query:searchQuery,
        page,
        per_page: 12,
        orientation: "landscape",
        },
      });
        return {
            results: response.data.results,
            totalPages: response.data.total_pages,
          };
    };
    

    // ============Teacher's video example similar but using generics============
    // async function fetchUser<T>(url: string): Promise<T> {
//   try {
//     const response: T = await axios.get(url);
//     return response;
//   } catch (error) {
//     console.log("fetch error");
//     throw error;
//   }
// }