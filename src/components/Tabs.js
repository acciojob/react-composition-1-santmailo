import React, {useState} from "react";
const Tabs = ({ tabs }) => {
    const [content, setContent] = useState(tabs[0].content);

    return (
        <div className="tabs">
        <ul className="tab-list">
            {tabs.map((tab, index) => {
            return (
                <li key={index} className="tab-list-item" onClick={() => {
                    setContent(tab.content);
                }}>
                {tab.title}
                </li>
            )
            })}
        </ul>
        <div className="tab-content">
            {content}
        </div>
        </div>
    )
}

export default Tabs;