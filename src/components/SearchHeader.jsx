import React, {useEffect, useState} from 'react';
import { BsYoutube, BsSearch } from "react-icons/bs"
import {useNavigate, Link, useParams} from "react-router-dom"
const SearchHeader = () => {
    const {keyword} = useParams();
    const [text, setText] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    }

    // 파라미터 값이 변경 될 때마다 input 창도 갱신 됨
    useEffect(() => {
        setText(keyword || '')
},[keyword])
    return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
        <Link to='/' className='flex items-center'>
            <BsYoutube className='text-4xl text-brand'/>
            <h1 className='font-bold ml-2 text-3xl'>text</h1>
        </Link>
        <form onSubmit={handleSubmit} className='w-full flex justify-center'>
            <input type='text' placeholder={'Search..'} value={text} onChange={(e) => setText(e.target.value)} className='w-7/12 p-2 outline-none bg-black text-gray-50'></input>
            <button className='bg-zinc-600 px-4'>
                <BsSearch/>
            </button>
        </form>
    </header>
    )
};

export default SearchHeader;