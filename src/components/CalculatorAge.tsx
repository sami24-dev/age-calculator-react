import '@fontsource/poppins';
import { useLogic } from '../hook/useLogic';
import Button from './Button';
import ViewBirthDate from './ViewBirthDate';

function Form() {
    const { handleSubmit, handleChange, date, age } = useLogic()
    return (
        <section className='flex flex-col justify-between w-full md:w-1/2 h-4/5 p-10 rounded-t-2xl rounded-bl-2xl rounded-br-[140px] bg-slate-100'>
            <form onSubmit={handleSubmit} className="flex flex-col w-full text-slate-800">
                <div className=' flex justify-start gap-x-5 w-[80%]'>
                    <label className='font-bold'>
                        <span className='block text-xs my-1'>DAY</span>
                        <input
                            className='w-16 h-12 p-2 m-0 rounded-md appearance-none outline-none tex-3xl placeholder:text-2xl resize-none
                            border focus:border-purple-400'
                            type="number"
                            placeholder="DD"
                            name="days"
                            value={date.days === 0 ? '' : date.days}
                            min={1}
                            max={31}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='font-bold'>
                        <span className='block text-xs my-1'>MONTH</span>
                        <input
                            className='w-16 h-12 p-2 m-0 rounded-md appearance-none outline-none tex-3xl placeholder:text-2xl resize-none
                            border focus:border-purple-400'
                            type="number"
                            placeholder="MM"
                            name="months"
                            value={date.months === 0 ? '' : date.months}
                            min={1}
                            max={12}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='font-bold'>
                        <span className='block text-xs my-1'>YEAR</span>
                        <input
                            className='w-24 h-12 p-2 m-0 rounded-md appearance-none outline-none tex-3xl placeholder:text-2xl resize-none
                            border focus:border-purple-400'
                            type="number"
                            placeholder="YYYY"
                            name="years"
                            value={date.years === 0 ? '' : date.years}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <Button />
            </form>
            <ViewBirthDate age={age} />
        </section>

    )
}
export default Form