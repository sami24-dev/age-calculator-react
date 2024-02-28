import { FC } from "react";

interface Age {
    years: number;
    months: number;
    days: number;
}

const ViewBirthDate: FC<{ age: Age }> = ({ age }) => {
    return (
        <div className="flex flex-col gap-y-3 md:gap-y-14 justify-end items-start p-5 text-4xl md:text-[50px] lg:text-[90px]">
            <h3>
                <span className="text-purple-700">
                    {age.years === 0 ? '-- ' : age.years}
                </span> years
            </h3>
            <h3>
                <span className="text-purple-700">
                    {age.months === 0 ? '-- ' : age.months}
                </span> months
            </h3>
            <h3>
                <span className="text-purple-700">
                    {age.days === 0 ? '-- ' : age.days}
                </span> days
            </h3>
        </div>
    )
}
export default ViewBirthDate;