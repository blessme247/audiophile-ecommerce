import styles from "@/components/Navbar/navbar.module.scss";
import { generateUniqueRandomString } from "@/utils/generateRandomString";
import Link from "next/link";

const Navlinks = () => {

    const linksData = [
        { url: "/", text: "Home" },
        { url: "/categories/headphones", text: "Headphones" },
        { url: "/categories/speakers", text: "Speakers" },
        { url: "/categories/earphones", text: "Earphones" },
      ];

    const {navLinks, navLinkWrapper, navLink, linkUnderline} = styles;
  return (
    <div className={navLinks}>
          {linksData.map((link) => {
            return (
              <div className={navLinkWrapper} key={generateUniqueRandomString(8)}>
                <Link href={link.url} className={navLink} >
                  {link.text}
                </Link>
                <span className={linkUnderline}></span>
              </div>
            );
          })}
        </div>
  )
}

export default Navlinks