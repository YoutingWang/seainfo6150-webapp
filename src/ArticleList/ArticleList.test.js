import React from "react";
import ArticleList from "./ArticleList";

describe("ArticleList tests", () => {
            it("renders correctly", () => {
                    const articles = [{
                            slug: "181122102925-statue-of-liberty-crown",
                            shortText: "The Statue of Liberty's original torch is getting a new home",
                            title: "The Statue of Liberty's torch heads to new museum",
                            displayDate: "November 22nd 2018, 7:12 am"
                        },
                        {
                            slug: "170321135754-airport-security-line",
                            shortText: "Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?",
                            title: "You can take a pie on a plane",
                            displayDate: "November 21st 2018, 2:57 pm"
                        },
                        {
                            slug: "181119170125-ploughgate-creamery-butter-ball",
                            shortText: "Amid the farm houses and barns dotting the Mad River Valley area of rural Vermont, five miles north of Sugarbush ski resort, Marisa Mauro is making butter.",
                            title: "Butter is back, just in time for the holidays",
                            displayDate: "November 21st 2018, 5:17 am"
                        },
                        {
                            slug: "181121164246-boeing-777-9x-assembly-1",
                            shortText: "Travelers around the globe are one step closer to seeing a plane with its wings folded up being taxied to their gate.",
                            title: "Boeing's 777X jetliner comes together ",
                            displayDate: "November 22nd 2018, 6:58 am"
                        }
                    ];
                    const {
                        container
                    } = render( < ArticleList articles = {
                            articles
                        }
                        />);
                        expect(container).toMatchSnapshot();
                    });
            });