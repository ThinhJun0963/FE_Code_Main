import { useState, useRef, useEffect } from "react";
import "./Chatting.css";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";


const Chatting = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const endRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: "smooth"});
    }, [])


    const handleEmoji = (e: EmojiClickData) => {
        setText((prev) => prev + e.emoji)
        setOpen(false)
    }

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="chat-img/avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="icons">
                    <img src="chat-img/phone.png" alt="" />
                    <img src="chat-img/video.png" alt="" />
                    <img src="chat-img/info.png" alt="" />
                </div>
            </div>

            <div className="center">
                <div className="message">
                    <img src="chat-img/avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Enim architecto earum, quaerat aliquam cupiditate, voluptatem, cumque voluptatum
                            ab animi fuga tenetur? Illum modi beatae quia impedit architecto numquam vitae harum.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Enim architecto earum, quaerat aliquam cupiditate, voluptatem, cumque voluptatum
                            ab animi fuga tenetur? Illum modi beatae quia impedit architecto numquam vitae harum.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="chat-img/avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Enim architecto earum, quaerat aliquam cupiditate, voluptatem, cumque voluptatum
                            ab animi fuga tenetur? Illum modi beatae quia impedit architecto numquam vitae harum.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Enim architecto earum, quaerat aliquam cupiditate, voluptatem, cumque voluptatum
                            ab animi fuga tenetur? Illum modi beatae quia impedit architecto numquam vitae harum.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="chat-img/img.png" alt="" />
                    <img src="chat-img/camera.png" alt="" />
                    <img src="chat-img/mic.png" alt="" />

                </div>
                <input type="text" placeholder="Type a message..."
                    value={text}
                    onChange={e => setText(e.target.value)} />
                <div className="emoji">
                    <img src="chat-img/emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="sendButton">Send</button>


            </div>
        </div>


    );

};

export default Chatting