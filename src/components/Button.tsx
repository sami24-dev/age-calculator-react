import Submit from '../images/icon-arrow.svg';
function Button() {
    return (
        <div className='flex items-center '>
            <hr className='w-full' />
            <button type="submit">
                <img
                    className='bg-purple-500 hover:bg-slate-900 p-5 rounded-full aspect-square object-cover transition-colors ease-in-out'
                    src={Submit}
                    alt="button"
                />
            </button>
        </div>
    )
}
export default Button