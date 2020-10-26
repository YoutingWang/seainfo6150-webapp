import React, {useCallback, useState} from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  const [buttonText, setButtonText] = useState("Show more");
  const onClick = useCallback(
    event => {
      event.preventDefault();
      setButtonText(buttonText === "Show more" ? "Show less" : "Show more");
    },
    [buttonText]
  );

  let displayContent;
  if (buttonText === "Show less") {
    displayContent = 
    <div>
      <p>{props.article.shortText}</p>
      <time className = {styles.dateTime} dateTime={props.article.timeStamp}>
          {props.article.displayDate}
      </time>    
    </div>;
  } else {
    displayContent = "";
  }
  return (
      <article className = {styles.articleBody}>
        <h2 className = {styles.articleTitle}>{props.article.title}</h2>
        {displayContent}
        <ArticleTextToggleButton buttonText = {buttonText} onClick = {onClick}/>
      </article>
  );
};

export default ArticleListItem;
