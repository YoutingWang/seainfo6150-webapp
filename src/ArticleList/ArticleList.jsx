import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
  return (
    <div>
       <ul>
          {props.articles.map((article) => (
            <li key={article.slug}>
             <ArticleListItem article = {article}/>
            </li>
          ))}
        </ul>
    </div>
  );
};

ArticleList.propTypes = {
  startNum: PropTypes.array.isRequired
};

export default ArticleList