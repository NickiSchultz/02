import c from './Post.module.css';


const Post = (props) => {
  return (
    <div className={c.item}>
      <img src={props.avatar} />
      {props.post}
      <div>
        <a>Like:</a>{props.likecount}
        <a>Comment:</a>{props.commcount}
      </div>
    </div>
  )
}

export default Post;