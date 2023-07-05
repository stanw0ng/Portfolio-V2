import '../styles/contact.scss';

function Contact() {

  return (
    <section className='contact-container'>
      <h2>To get in touch, email</h2><h1><a href="mailto:user.stanley@gmail.com?subject=General Inquiry">user.stanley@gmail.com ↗</a></h1>

      <h2>Alternatively, reach out via</h2>

      <div className='social-links'>
        <h2>Github ↗</h2>
        <h2>LinkedIn ↗</h2>
        <h2>Are.na ↗</h2>
      </div>
    </section>
  );
}

export default Contact;
