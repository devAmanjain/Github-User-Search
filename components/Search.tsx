import { getProfileData } from '@/redux/searchSlice';
import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Details from './Details';
import { InfinitySpin } from 'react-loader-spinner'


const Search = () => {

  const [searchValue,setSearchValue] = useState<string>('');

  const dispatch = useDispatch();
  const searchUser = useSelector((state)=>state?.searchContent);
  const loader = useSelector((state)=>state?.loading);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event:React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    dispatch(getProfileData(searchValue));
  }

  




  return (
    <>
    <form  className='relative w-1/2' onSubmit={handleSubmit}>
        <input
          type="search"
          name="q"
          className="w-full py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:text-white"
          placeholder="Search..."
          autoComplete="off"
          onChange={handleChange}
         
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
            <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          
        </span>

        <span className="absolute right-1 h-full w-50 ">
          <button type="submit" className="p-1 font-bold text-white bg-rose-500 h-full w-50">
           Search
          </button>
          
        </span>

    </form>
    {loader && <InfinitySpin/>  }
    {Object.keys(searchUser).length>0 && <Details data={searchUser}/>}
    
    </>
  )
}

export default Search
