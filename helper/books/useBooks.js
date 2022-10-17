import { useEffect , useState } from "react";

function useBooks() {


const apikey =  "&key=AIzaSyD7cfjnf2GriRW1ue5mvgCjgjzdtA31OTM&maxResults=40"
const url = `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks`
const [books, setBooks] = useState(null)
const [errorbooks, setErrorBooks] = useState(null)
const [lodingbooks, setLodingBooks] = useState(false)



    useEffect(()=>{
        fetch(`${url+apikey}`)
        .then(e=>{
            if(!e.ok) {
                setErrorBooks("لايوجد نتائج مطابقة")
                return setLodingBooks(true)
            }
            return e.json()
        })
        .then(e=>{
            setBooks(e.items)
            return setLodingBooks(false)
        })
        .catch(e=>{
            setErrorBooks("لايوجد نتائج مطابقة")
            setLodingBooks(false)
            return setBooks([])
        })
    },[url  , apikey])

    return {books , errorbooks , lodingbooks}
}

export default useBooks;