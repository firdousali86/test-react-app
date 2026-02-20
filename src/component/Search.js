import { useState, useEffect } from "react";


const Search = ({search}) => {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        //debouncing
        const timer = setTimeout(() => {
            search(searchText)
        }, 300)

        return () => clearTimeout(timer)
    }, [searchText, search])

    return (
        <div>
            <input 
                type="text"
                placeholder="Search .."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    )
    
}

export default Search;