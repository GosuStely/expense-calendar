/* eslint-disable react/prop-types */
export default function UniversityFee({ date, fee }) {
    const daysRamining = Math.round((new Date(date) - new Date()) / (1000 * 60 * 60 * 24));
    const theme = daysRamining > 30 || daysRamining < 0 ? "bg-red-500 text-white" : null;
    return (
        <div className={`flex flex-col justify-center place-items-center border-2 m-4 rounded-lg h-3/4 ${theme}`}>
            <h2>{date}</h2>
            <h3 className="text-2xl">{fee}€</h3>
        </div>
    )
}