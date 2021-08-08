import s from './MyPosts.module.css'
import Post from './Post/Post'
import react from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../../utils/validators/validarors';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)

  let newPostElement = react.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newPostText' validate={[required, maxLength15, minLength2]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts
