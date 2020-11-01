import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
  return (
    <div>
       <ul className = {styles.articleList}>
          {props.articles.map((article) => (
            <li className={styles.articleGrid} key={article.slug}>
             <ArticleListItem article = {article}/>
            </li>
          ))}
        </ul>
    </div>
  );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
export default ArticleList;