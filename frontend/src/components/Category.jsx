/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function Category({ category, image, location }) {
    return (
        <Link to={`/${location}`} className="bg-white flex flex-col justify-center place-items-center h-5/6 w-4/5 p-5 border-2 border-slate-600 rounded-lg" >
            <h2 className='h-1/2'>{category}</h2>
            <img src={image} alt={category} className='w-2/3' />
        </Link >
    )
}