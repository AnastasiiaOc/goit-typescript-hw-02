import css from "./LoadMoreBtn.module.css"

type onClickProps = {
    onClick: () => void;
  };

export default function LoadMoreBtn({onClick}: onClickProps){
    return (<button className={css.loadMore} type = "button" onClick ={onClick} > Load more</button>)
}