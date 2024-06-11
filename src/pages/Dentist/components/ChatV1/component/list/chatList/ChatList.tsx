import "./ChatList.css";
import { useState } from "react"

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className="chatlist">
            <div className="search">
                <div className="searchBar">
                    <img src="/chat-img/search.png" alt="" />
                    <input type="text" name="" id="" placeholder="Search"/>
                </div>
                <img
                 src={addMode ? "chat-img/minus.png" : "chat-img/plus.png"}
                 alt=""
                 className="add"
                 onClick={() => setAddMode((prev) => !prev)}
                 />
            </div>
            <div className="item">
                <img src="chat-img/avatar.png" alt="" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="chat-img/avatar.png" alt="" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="chat-img/avatar.png" alt="" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="chat-img/avatar.png" alt="" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
               
        </div>
    )
}

export default ChatList