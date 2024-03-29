import React ,{useState , useEffect} from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import InputOption from "./InputOption";
import Post from "./Post"
import {db} from "./firebase"

function Feed() {
    const [posts ,setPosts] = useState([])

    useEffect(() => {
        db.collection("posts")
        
    }, [])
    const sendPost = e =>{
        e.preventDefault()

        // setPosts([..posts])
    }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(()=>(
          <Post/>
      ))}
      <Post
        name="Sachin Madhukar"
        description="This is a Test"
        message="Wow This Works"
      />
    </div>
  );
}

export default Feed;
