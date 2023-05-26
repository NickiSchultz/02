import c from './Myposts.module.css';
import Post from './Post/Post.jsx';
import ava from './ava.jpg'



export const Myposts = (props) => {

  let state = props.postsPage;

  let postElements = state.posts.map(p => <Post post={p.postFile} key={p.id} avatar={ava} likecount={p.likecount} commcount={p.commcount} />,);

  let newPost = state.newPostText;

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (b) => {
    let newPostText = b.target.value;
    props.onPostChange(newPostText);
};


  return (
    <div className={c.discript}>
      <h3>My posts</h3>
      <div >
        <div>
          <textarea onChange={onPostChange} value={newPost} placeholder='Enter your state'></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div >
      <div className={c.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default Myposts;