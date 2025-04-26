export interface Image{
    id: string;
    // id: number;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
    likes: number;
    user: {
      name: string;
    };
  };


  
export interface Params {
    isOpen: boolean;
    url: string;
    alt :string;
  };
  

  export interface Photos{  // concerns return
    results: Image[],
    totalPages: number,
  } 