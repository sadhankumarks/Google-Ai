import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
 const {onSent,setRecentPrompt,prevPrompt,newChat} = useContext(Context)

 const loadPrompt=async(prompt)=>{
  setRecentPrompt(prompt)
   await onSent(prompt)
 }

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <img onClick={() => setExtended((prev) => !prev)} className={styles.menu} src={assets.menu_icon} alt="menu icon" />
        <div onClick={()=>newChat()} className={styles.newChat}>
          <img src={assets.plus_icon} alt="plus icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className={styles.recent}>
            <p className={styles.recent_title}>Recent</p>
            {prevPrompt.map((item,index)=>{
               return(
                <div onClick={()=>loadPrompt(item)} key={index} className={styles.recent_entry}>
              <img src={assets.message_icon} alt="Message icon" />
              <p> {item.slice(0,18)} ...</p>
            </div>
               )
            })}
            
          </div>
        ) : null}
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.bottom_item} ${styles.recent_entry}`}>
          <img src={assets.question_icon} alt="question icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className={`${styles.bottom_item} ${styles.recent_entry}`}>
          <img src={assets.history_icon} alt="history icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className={`${styles.bottom_item} ${styles.recent_entry}`}>
          <img src={assets.setting_icon} alt="settings icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
