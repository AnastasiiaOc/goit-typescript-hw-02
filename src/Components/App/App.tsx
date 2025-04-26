import { useEffect } from 'react'
import {useState} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loader from '../Loader/Loader'
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import getPhotos from '../../unsplash-api'
import ImageModal from '../ImageModal/ImageModal'
import './App.css'
import { Params, Image, Photos } from '../../image'

// export interface Image{
//   id: string;
//   // id: number;
//   urls: {
//     small: string;
//     regular: string;
//   };
//   alt_description: string;
//   likes: number;
//   user: {
//     name: string;
//   };
// };

// export interface Photos{  // concerns return
//   results: string,
//   totalPages: number,
// } 
  
// export interface Params {
//   isOpen: boolean;
//   url: string;
//   alt :string;
// };


function App() {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | string>(false);
  const [page, setPage] = useState<number>(1);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  // const [images, setImages] = useState<string[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const [modalParams, setModalParams] = useState<Params>({
    isOpen: false,
    url: "",
    alt: "",
  });


useEffect(() =>{
  if (searchQuery === ""){
    return;
  }

  async function fetchData(): Promise<void> {
    try {
      setIsLoading(true);
      setError(false);
      const {results, totalPages }:Photos= await getPhotos(searchQuery, page);
      console.log({results})
      if (results.length === 0) {
        setError("There are no images matching your query");
      }
      setImages((prevImages) => [...prevImages, ...results]);
      setShowLoadMore(totalPages > 1 && page !== totalPages);
      // ==================
      // const results:Photos[] = await getPhotos(searchQuery, page);
      //   if (results.length === 0) {
      //   setError("There are no images matching your query");
      // }
      // setImages(prevImages => {
      //   return [...prevImages, ...results];
      // });  
      //   setShowLoadMore(totalPages > 1 && page !== totalPages);
   
 } 
  catch (error) {
    // setError(error.message);
      setError(`Whoops an error occured: ${error}`);
     
    }
     finally {
      setIsLoading(false);
    }
  }
  fetchData();
}, [searchQuery, page]);


function handleSearch(topic:string):void {
  setSearchQuery(topic);
  setPage(1);
  setImages([]);
}


function handleLoadMore():void {
  setPage(page + 1);
}


function openModal(image:Image) {
  setModalParams({
    isOpen: true,
    url: image.urls.regular,
    alt: image.alt_description,
  });
}


function closeModal(): void {
  setModalParams({ isOpen: false, url: "", alt: "" });
}
  return (
    <>
<SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage/>}
      {/* {error && <ErrorMessage error={error} />} */}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal}></ImageGallery>
      )}
     {isLoading && <Loader />}
     {images.length > 0 && !isLoading && showLoadMore && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
 {modalParams.isOpen && (<ImageModal modalParams={modalParams} onClose={closeModal} /> )} 
      
  </>
  )
}

export default App;


// =============================================
// import React, { useState } from 'react';

// type Props = {
//   initialValue: string;
//   onSave: (value: string) => void;
// };

// export function TextInput({ initialValue, onSave }: Props) {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);
//   };

//   const handleSave = () => {
//     onSave(value);
//   };

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// }


// address?: {city:string,country: string}}

// const mango: User = {
//   name: 'Mango',
//   age: 30,
//   email: 'john@example.com',
//   address: {
//       city: 'New York',
//       country: 'USA'
//   }
// };


// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number
// }

// function compare (top: Pick<AllType, 'name'| 'color'>, bottom: Pick<AllType, 'position' | 'weight' >): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   }
// }
// function merge<T extends object, U extends object>(objA: T, objB: U): T&U {
//   return Object.assign(objA, objB);
// }

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// }
// function createOrUpdateUser(initialValues: Partial <User>): void {
//   // Оновлення користувача
// }
// createOrUpdateUser({ 
//   email: 'user@mail.com', 
//   password: 'password123' 
// });

// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };

// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };

// //   // Реалізуйте Params так
// //   // щоб унеможливити поле 'errors' з типу Form
// type Params = Omit <Form, 'errors'>;

// let params : Params = {
//   firstName: 'Anastasiia',
//   lastName: 'Occhiminuti',
//   phone: '07',
//   email: 'ana@h.com'

// }
// ================PROPS==========================
// import React from 'react';

// type User = {
//   name: string;
//   email: string;
// };

// type Props = {
//   user: User;
//   onUserUpdate: (user: User) => void;
// };

// export function UserProfile({ user, onUserUpdate }: Props) {
//   // компонент UserProfile
//   return null;
// }

// ==================================================


