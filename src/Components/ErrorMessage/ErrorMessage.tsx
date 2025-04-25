import css from "./ErrorMessage.module.css"

type ErrorProps = {
    error: string;
  };
 
export default function ErrorMessage ({error} : ErrorProps) {
    return <div className={css.errorMessage}>{error}</div>;
  }



  
