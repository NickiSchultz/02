import { addPostActionCreator } from './../../../Redux/profile-reducer.jsx';
import { updateNewPostTextActionCreator } from './../../../Redux/profile-reducer.jsx';
import Myposts from './Myposts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postsPage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => { 
        dispatch(addPostActionCreator()); 
      },

      onPostChange: (newPostText) => { 
        dispatch(updateNewPostTextActionCreator(newPostText)); 
      }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MyPostsContainer;
