import { useContext } from 'react';
import { DataContext } from '../App';
import { IoSearchOutline } from "react-icons/io5";
import '../style/search.scss';

const Search = () => {
    const {search, setSearch} = useContext(DataContext)
    return (
        <div className='search'>
            <input type="search" value={search} placeholder="검색어를 입력해주세요" onChange={(e)=> setSearch(e.target.value)}/>
            <IoSearchOutline className='searchIcon' />
        </div>
    );
};

export default Search