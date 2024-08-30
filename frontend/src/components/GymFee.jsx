/* eslint-disable react/prop-types */
export default function GymFee({ month }) {
    return (
        <div className="bg-cyan-200 rounded-lg h-20 flex flex-col place-items-center justify-center m-2">
            <h2>{`${month} 28th`}</h2>
            <h3 className="text-xl">31$</h3>
        </div>
    )
}