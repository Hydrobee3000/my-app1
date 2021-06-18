let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hi', likesCount: 12 },
        { id: 2, message: 'hello', likesCount: 5 },
      ],
      newPostText: 'Hello',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
        { id: 5, name: '5' },
        { id: 6, name: '6' },
      ],
      messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hello' },
        { id: 3, message: 'privet' },
      ],
    },
  },
  rerenderEntireTree() {
    console.log('State changed')
  },
  addPost() {
    let newPost = {
      id: 3,
      message: state.profilePage.newPostText,
      likesCount: 0,
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''

    rerenderEntireTree(state)
  },
  updateNewPostText(newText) {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
  },
  subscribe(observer) {
    rerenderEntireTree = observer
  },
}

export default store

window.store = store
