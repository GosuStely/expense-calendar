import { useEffect, useState } from "react";
export default function Food() {
    const [nextFriday, setNextFriday] = useState('');

    const calculateNextFriday = () => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const daysUntilFriday = (5 - dayOfWeek + 7) % 7 || 7;

        const nextFridayDate = new Date(today);
        nextFridayDate.setDate(today.getDate() + daysUntilFriday);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setNextFriday(nextFridayDate.toLocaleDateString(undefined, options));
    };

    useEffect(() => {
        calculateNextFriday();

        const timer = setInterval(() => {
            calculateNextFriday();
        }, 60000); // Check every 60 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="h-screen flex justify-center place-items-center">
            <h1 className="p-5 m-16 text-center bg-cyan-300 rounded-lg">The next payment is on: {nextFriday}</h1>
        </div>
    );
}