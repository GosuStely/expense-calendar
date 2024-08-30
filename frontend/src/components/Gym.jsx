import GymFee from "./GymFee";

export default function Gym() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const monthFeeElementArray = months.map((month, index) => <GymFee key={index} month={month} />)
    return (
        <main>
            <h1 className="text-center m-10">The payment is on every 28th of the month</h1>
            <section className="grid grid-cols-2">
                {monthFeeElementArray}
            </section>
        </main>
    )
}