import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetcher } from '../../store/reducer';
import './SearchBox.css';


function SearchBox(){
    // state = {
    //     searchLine: ''
    // }
    let dispatch = useDispatch()
    let [searchline, setSearchLine] = useState('')
  const  searchLineChangeHandler = (e) => {
       setSearchLine(e.target.value)
    }
  const  searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
  

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={searchLineChangeHandler}
                        />
                    </label>
                    <button
                        
                        className="search-box__form-submit"
                        
                        onClick = {() => dispatch(fetcher(searchline))}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
 
export default SearchBox;