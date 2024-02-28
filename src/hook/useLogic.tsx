import { ChangeEvent, FormEvent, useState } from 'react';

interface Date {
    years: number;
    months: number;
    days: number;
}
export function useLogic() {
    const [date, setDate] = useState<Date>({
        years: 0,
        months: 0,
        days: 0
    });
    const [age, setAge] = useState<Date>({
        years: 0,
        months: 0,
        days: 0
    });
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const numericValue = parseInt(value, 10);
        setDate(prevDate => ({ ...prevDate, [name]: numericValue }));
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (date.years !== 0 && date.months !== 0 && date.days !== 0) {
            const currentDate = new Date();
            const birthDate = new Date(date.years, date.months - 1, date.days);
            const diffTime = Math.abs(currentDate.getTime() - birthDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const years = Math.floor(diffDays / 365);
            const months = Math.floor((diffDays % 365) / 30);
            const days = Math.floor((diffDays % 365) % 30);

            setAge({ years, months, days });
        }
    }
    return { handleChange, handleSubmit, date, age }
}
