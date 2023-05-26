import c from './Content.module.css'
import MyPostsContainer from './My posts/MypostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Content = props => {
  return (
    <div className={c.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Content
