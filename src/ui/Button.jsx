function Button({ type = 'primary', onClick, children }) {
  const baseStyle =
    'mt-5 w-full rounded-full bg-red p-4 font-semibold text-rose-100 transition-colors hover:bg-red/80'

  const style = {
    primary: baseStyle,
  }

  return (
    <button onClick={onClick} className={style[type]}>
      {children}
    </button>
  )
}

export default Button
