import "./Detail.css";

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="chat-img/avatar.png" alt="" />
                <h4>Jane Doe</h4>
                <p>Lorem, ipsum dolor sit amet.</p>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="chat-img/arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="chat-img/arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="chat-img/arrowDown.png" alt="" />
                    </div>

                    <div className="photos">
                

                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="chat-img/download.png" alt="" className="icon"/>
                        </div>

                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="chat-img/download.png" alt="" className="icon"/></div>

                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="chat-img/arrowUp.png" alt="" />
                    </div>
                </div>

                <button>Block User</button>

            </div>
        </div>


    )

}

export default Detail