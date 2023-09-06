
import React,{useState} from "react";
import './../styles/App.css';


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

const App = () => {
  const tabs = [
    {
      title: "Tab 1",
      content: "This is the content for Tab 1"
    },
    {
      title: "Tab 2",
      content: "This is the content for Tab 2"
    },
    {
      title: "Tab 3",
      content: "This is the content for Tab 3"
    }
  ]
  return (
    <Tabs tabs={tabs}/>
  )
}

export default App
