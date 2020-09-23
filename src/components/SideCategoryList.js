import React, { useState } from 'react';
import classnames from 'classnames';

import SideSubcategoryList from './SideSubcategoryList';

import css from './SideCategoryList.module.css';

const SideCategoryList = (props) => {
  const { category, categoryRefs, subcategory, link } = props;
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className={css.root}>
      <h3
        onClick={toggleExpand}
        className={classnames({ [css.expanded]: expand })}>
        {category && category.replace(/_/g, ' ')}
      </h3>
      {expand ? (
        <ul>
          {subcategory.map((p, key) => {
            let subcategoryRefs = categoryRefs.filter((ref) => {
              return ref.childJson.subcategory === p;
            });

            return (
              p !== null && (
                <SideSubcategoryList
                  key={key + 's'}
                  subcategory={p}
                  subcategoryRefs={subcategoryRefs}
                  link={link}
                />
              )
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default SideCategoryList;