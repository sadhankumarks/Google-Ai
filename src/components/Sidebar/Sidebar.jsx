import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
 const {onSent,setRecentPrompt,prevPrompt} = useContext(Context)

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <img onClick={() => setExtended((prev) => !prev)} className={styles.menu} src={assets.menu_icon} alt="menu icon" />
        <div className={styles.newChat}>
          <img src={assets.plus_icon} alt="plus icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className={styles.recent}>
            <p className={styles.recent_title}>Recent</p>
            <div className={styles.recent_entry}>
              <img src={assets.message_icon} alt="Message icon" />
              <p> What is react ...</p>
            </div>
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
