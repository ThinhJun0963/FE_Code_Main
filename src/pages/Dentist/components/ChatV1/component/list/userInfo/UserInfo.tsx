import "./UserInfo.css";

const UserInfo = () => {
    return (
        <div className="userinfo">
            <div className="user">
                <img src="/chat-img/avatar.png" alt="" />
            
            <h4>John Doe</h4>
            </div>

            <div className="icons">
                <img src="/chat-img/more.png" alt="" />
                <img src="/chat-img/video.png" alt="" />
                <img src="/chat-img/edit.png" alt="" />
            </div>
        </div>

       
    )

}

export default UserInfo