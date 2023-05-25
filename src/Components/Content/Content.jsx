import c from './Content.module.css';
import MyPostsContainer from './My posts/MypostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Content = (props) => {



  return (
    <content className={c.content}>
      <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatus}  />
      <MyPostsContainer />
    </content>
  )
}

export default Content;