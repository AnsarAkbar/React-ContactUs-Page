import style from './Button.module.css'
const Button = (props) => {
  const {isOutline,icon,text, ...rest}=props; //Object Destructuringe: is thara ap "props.text" jase use kr rha hn in ko ab hm direct "text" use kr skty hn.
  return (
      <button {...rest} className={isOutline ? style.outline_btn :style.btn_primary}>{icon}{text} </button>
  )
}

export default Button