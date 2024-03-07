import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      {/* <Image src="/about.png" alt="" width={500} height={500} /> */}
      <div className={styles.imgContainer}>
        {/* Image için fill kullanıyorsan parent'ı relative olmak zorunda */}
        {/* <Image src="/about.png" alt="" fill /> */}
        <Image
          src="https://images.pexels.com/photos/20433278/pexels-photo-20433278/free-photo-of-indian-blue-jay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
