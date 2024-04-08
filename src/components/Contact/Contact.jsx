import './contact.css'

const Contact = () => {
  return (
    <div className="contact-container" id='contact'>
      <div className="contact-left-side">
        <h1>Contact Me</h1>
        <h4>Phone Number</h4>
        <a href="tel:+995599322663">(+995) 599 322 663</a>
        <h4>Email</h4>
        <a href="mailto:barishvili.soso@gmail.com">barishvili.soso@gmail.com</a>
      </div>
      <div className="contact-right-side">
        <form onSubmit={() => { }}>
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="5" required></textarea>
          <button type="submit"><span> Submit
          </span></button>
        </form>
      </div>
    </div>
  );
}

export default Contact;