import style from'./contact-header.module.css'
function Contact_header() {
  return (
    <div className= {`${style.contact_header} container`}>
      <h1>CONTACT US</h1>
      <p>
        LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT. YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FROM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
    </div>
  );
}
export default Contact_header;
