import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        // Linkin üstüne tıklanıldığında stillendirme yaptık, arkaplan beyaz oldu. onun için bu stillendirmeyi navLink klasöründe yaptık
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
