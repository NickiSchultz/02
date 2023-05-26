import c from './ProfileInfo.module.css';
import pan from './pan.jpg';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus.jsx'


const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
  return (
    <div className={c.content}>
      <div>
        <img src={pan} alt=''/>
      </div>
      <div className={c.discript}>
        <img src={props.profile.photos.large} alt=''/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        ava+port
      </div>
    </div>
  )
}

export default ProfileInfo;