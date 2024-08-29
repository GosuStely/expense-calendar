/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function Category({ category, image, location }) {
    return (
        <Link to={`/${location}`} className="bg-white w-1/5 p-5 border-2 border-slate-600 rounded-lg" >
            <h2 className='p-4'>{category}</h2>
            <img src={image} alt={category} />
        </Link >
    )
}