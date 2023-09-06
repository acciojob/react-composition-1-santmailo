
import React,{useState} from "react";
import './../styles/App.css';


const Tabs = ({ tabs }) => {
  const [content,setContent] = useState(tabs[0].content);


  const clickMe = (tab) => {
    setContent(tab.content);
  }


    return (
      <div className="tabs">
        <ul>
          {
            tabs.map((tab) => {
              return <Tab key={tab.title} tab={tab} clickMe={()=>{clickMe(tab)}}/>
            })
          }
        </ul>
        {content}
      </div>
    )
}

const Tab = ({tab, clickMe}) => {

  return (
    <li onClick={clickMe}>{tab.title}</li>
  )
}

const App = () => {
  const tabs = [
    {
      title: "Tab 1",
      content: 'This is the content for Tab 1.'
    },
    {
      title: "Tab 2",
      content: 'This is the content for Tab 2.'
    },
    {
      title: "Tab 3",
      content: 'This is the content for Tab 3.'
    }
  ]

  return (
    <Tabs tabs={tabs} />
  )

}

export default App
