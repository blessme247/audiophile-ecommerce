"use-client";
import styles from "@/pages/categories/categories.module.scss";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PageHeader = () => {
  const pathname = usePathname();

  const { header } = styles;

  return (
    <div className={header}>
      <h2>
        {pathname.includes("speakers")
          ? "Speakers"
          : pathname.includes("headphones")
          ? "Headphones"
          : "Earphones"}
      </h2>
    </div>
  );
};

export default PageHeader;
