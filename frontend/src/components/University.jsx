import UniversityFee from "./UniversityFee";
import { useState, useEffect } from "react";

export default function University() {
    const universityCostInfo = [
        {
            date: "2024-09-25",
            fee: 277.00,
        },
        {
            date: "2024-10-25",
            fee: 253.00,
        },
        {
            date: "2024-11-25",
            fee: 253.00,
        },
        {
            date: "2024-12-27",
            fee: 253.00,
        },
        {
            date: "2025-01-27",
            fee: 253.00,
        },
        {
            date: "2025-02-25",
            fee: 253.00,
        },
        {
            date: "2025-03-25",
            fee: 253.00,
        },
        {
            date: "2025-04-25",
            fee: 253.00,
        },
        {
            date: "2025-05-26",
            fee: 253.00,
        },
        {
            date: "2025-06-25",
            fee: 253.00,
        },
    ]

    const universityElementArray = universityCostInfo.map((info, index) =>
        <UniversityFee key={index} date={info.date} fee={info.fee} />
    );

    const [remainingDays, setRemainingDays] = useState(calculateRemainingDays());

    function calculateRemainingDays() {
        const currentDate = new Date();
        const paymentsLeft = universityCostInfo.filter((info) => new Date(info.date) > currentDate);

        if (paymentsLeft.length === 0) {
            return 0;
        }

        const nextPaymentDate = new Date(paymentsLeft[0].date);
        return Math.round((nextPaymentDate - currentDate) / (1000 * 60 * 60 * 24));
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingDays(calculateRemainingDays());
        }, 1000 * 60 * 60 * 24);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="place-content-center h-screen">
            <h1 className="text-center">{remainingDays} Days until next payment</h1>
            <section className="grid grid-cols-2">
                {universityElementArray}
            </section>
        </main>
    )
}