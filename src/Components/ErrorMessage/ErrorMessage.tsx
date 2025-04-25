import css from "./ErrorMessage.module.css"
import { FC } from "react";
// type ErrorProps = {
//     error: string;
//   };
 
// export default function ErrorMessage ({error} : ErrorProps) {
//     return <div className={css.errorMessage}>{error}</div>;
//   }

const ErrorMessage: FC = () => {
    return <p className={css.errorMessage}>Please Reload the Page</p>;
  };

  export default ErrorMessage;


  
