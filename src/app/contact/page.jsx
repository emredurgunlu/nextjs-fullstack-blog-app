import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {/* home ve about sayfalarında .imgContainer sınıfıma yükseklik vermedik çünkü yazıların sağında kaldığı için yazıların yüksekliğini aldı faka
      contact sayfasında yazıların solunda kaldığı için referans alacağı yükseklik olmadığı için yükseklik vermezsek hata verir */}
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
