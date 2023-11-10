"use-client";
import styles from "@/pages/categories/categories.module.scss";
import { useRouter } from "next/router";
const PageHeader = () => {
  const router = useRouter()
  const pathSlug = router.query.slug

  const { header } = styles;

  return (
    <div className={header}>
      <h2>
        {pathSlug}
      </h2>
    </div>
  );
};

export default PageHeader;
