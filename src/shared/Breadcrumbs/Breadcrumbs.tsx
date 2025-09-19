import React from 'react';
import styles from './Breadcrumbs.module.scss';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

interface BreadcrumbsProps {
  categoryName?: string,
  productName?: string,
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  categoryName, productName,
}) => {
  return (
    <div className={styles.container}>
      <Link to={'/'} className={styles.iconHome}>
        <IoHomeOutline size={20} />
      </Link>
      <MdKeyboardArrowRight size={16} color='#75767F'/>
      <Link to={`/${categoryName}`}>
        <h4 className={styles.h4}>
          {categoryName}
        </h4>
      </Link>
      {productName &&
        (<MdKeyboardArrowRight size={16} color='#75767F'/>)
      }
      <h4 className={styles.name}>{productName}</h4>
    </div>
  );
};

export default Breadcrumbs;
