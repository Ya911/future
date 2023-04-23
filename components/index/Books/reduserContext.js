import { createContext} from "react";
import { useReducer } from "react";
import useBooks from "../../../helper/books/useBooks";
import dynamic from "next/dynamic";


const CircularProgress = dynamic(() => import("@mui/material/CircularProgress/CircularProgress"), {
  ssr: false,
  loading : ()=>''
});

export const MYCONTEXTBOOOK = createContext();

const initializer = {
  Categories: "all",
  Search: "",
};

const RudxuReact = (state, action) => {
  switch (action.type) {
    case "Value_Categories":
      return { ...state , Categories: action.payload , Search : '' };
    case "Value_Search":
      return { ...state , Search: action.payload };
    default:return state;
  }
};


function ContextBooks({children}) {
  const [stateBooks, dispatchBooks] = useReducer(RudxuReact, initializer);


  const {books, errorbooks , lodingbooks } = useBooks();
  if(lodingbooks)return <CircularProgress className='absolute right-[45%] top-[40%]' disableShrink />;
  if(errorbooks && !books)return <span>{errorbooks}</span>



  const StatusDispith = {
    ...stateBooks,
    books,
    addCategories: (value) =>
      dispatchBooks({ type: "Value_Categories", payload: value }),
    addSearch: (value) =>
      dispatchBooks({ type: "Value_Search", payload: value }),
  };

  return <MYCONTEXTBOOOK.Provider value={StatusDispith}>{children}</MYCONTEXTBOOOK.Provider>
}

export default ContextBooks;
