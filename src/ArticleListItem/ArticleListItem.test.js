import React from "react";
import ArticleListItem from "./ArticleListItem";
import {
    fireEvent
} from "@testing-library/react";

describe("ArticleListItem tests", () => {
            it("renders correctly", () => {
                    const article = {
                        slug: "181122102925-statue-of-liberty-crown",
                        title: "The Statue of Liberty's torch heads to new museum",
                        shortText: "The Statue of Liberty's original torch is getting a new home",
                        displayDate: "November 22nd 2018, 7:12 am"
                    };
                    const {
                        container
                    } = render( < ArticleListItem article = {
                            article
                        }
                        />);
                        expect(container).toMatchSnapshot();
                    });
            });