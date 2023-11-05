interface props {
    children:React.ReactNode,
    type?:"button" | "submit" | "reset",

}

const Button = ({ children , type="button" }:props) => {

    const typesOfButton = {
        "primary":""
    }

  return (
    <button className="ml-10 px-4 py-2 bg-green-500 rounded-lg min-w-max" type={type}>{children}</button>
  )
}

export default Button