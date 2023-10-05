

const Button = ({label,icon}) => {
  return (
    <button className='  flex  justify-center items-center bg-coral-red rounded-full gap-2 px-4 py-3
    text-white hover:bg-transparent hover:text-black hover:outline-black my-5'   >

    {label}
    <img
    src={icon}
    alt="arrow right"
    className='ml-2 rounded-full w-5 h-5'/>




    </button>
  )
}

export default Button