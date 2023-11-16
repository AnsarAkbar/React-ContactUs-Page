import style from "./contact_form.module.css";
import Button from "../Button/Button";
import { MdMessage, MdCall, MdEmail } from "react-icons/md";
import { useState } from "react";
import React from "react";
function ContactForm() {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [text,setText]=useState("")


  let onSubmite = (event) => {
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
    
  };

  return (
    <>
      <section className={style.section_a}>
        <div className={style.section_container}>
          <div className={style.btns}>
            <Button
              // onClick={onChange}
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
          </div>

          <Button
            isOutline={true}
            text="VIA EMAIL FROM"
            icon={<MdEmail fontSize="24px" />}
          />

          <form onSubmit={onSubmite}>
            <div className={style.input_filds}>
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div className={style.input_filds}>
              <label htmlFor="email">E-mail</label>
              <input type="email" />
            </div>
            <div className={style.input_filds}>
              <label htmlFor="name">Text</label>
              <textarea
                type="textarea"
                rows={6}
                style={{ padding: "9px 2px", borderRadius: "5px" }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button text="SUBMIT"/>
            </div>
          </form>
        </div>
        <img
          src="./images/service_img.png"
          style={{ height: "360px", width: "320px" }}
        />
      </section>
      <p>{name},{email},{text}</p>
    </>
  );
}

export default ContactForm;
