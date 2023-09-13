const CustomButton = ({ children }) => {
  return (
    <div className='flex'>
      <a
        href='#'
        className='flex items-center gap-1 bg-primary100 text-lg font-semibold px-8 py-4 my-8 rounded-full hover:bg-black hover:transition-all hover:duration-300'
      >
        {children}
      </a>
    </div>
  )
}

export default CustomButton
