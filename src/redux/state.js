import avatar from '../icons/avatar-placeholder.svg';

let store = {
  _state: {
    _profilePage: {
      _posts: [
        { id: 0, date: '28.08.23', title: 'Lorem, ipsum.', post: "Hello React!" },
        { id: 1, date: '02.09.23', title: 'React', post: "How does it work?" },
        { id: 2, date: '04.09.23', title: 'Why?', post: "Ok?" },
        { id: 3, date: '24.09.23', title: 'Breaking News', post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates tempora repellat, molestiae, maiores, corporis beatae aperiam nesciunt perferendis qui ex magnam. Eius nam eum nostrum at ducimus quae quis facere asperiores cum libero dolorem totam repudiandae sint voluptatem quod laborum vero, eaque corporis hic rerum quidem? Error, consectetur veniam!" },
        { id: 4, date: '04.09.23', title: 'Now all data in index.js', post: 'It`s working, but is it truly the way that i should give the data to my components? i dont think so.' }
      ],
      _newPostText: ''
    },
    _messagesPage: {
      _partners: [
        { id: 0, name: "Lorem Ipsum", avatar: avatar },
        { id: 1, name: "Myles Mullins", avatar: avatar },
        { id: 2, name: "Jasper Hatfield", avatar: avatar },
        { id: 3, name: "Poppy Morton", avatar: avatar },
        { id: 4, name: "Ivy Harrison", avatar: avatar },
        { id: 5, name: "Mahdi Keller", avatar: avatar },
        { id: 6, name: "Riley Alvarado", avatar: avatar },
        { id: 7, name: "Omari May", avatar: avatar },
        { id: 8, name: "Wojciech Acevedo", avatar: avatar },
        { id: 9, name: "Maisey Summers", avatar: avatar },
      ],
      _messages: [
        { id: 0, author: "You", text: "Hello!" },
        { id: 1, author: "You", text: "I hope this chat will be working soon" },
        { id: 2, author: "Maisey Summers", text: "Hello!" },
        { id: 3, author: "Maisey Summers", text: "i guess it will" },
        { id: 4, author: "Maisey Summers", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium consectetur molestias rem sint, autem repudiandae nesciunt eligendi ducimus harum dicta, quis, voluptatum eos facere optio aliquam fugit perspiciatis rerum? Dolor maxime corporis hic esse totam repudiandae reprehenderit. Quae pariatur sint reprehenderit illum rerum ducimus impedit quidem fugiat magni quia." },
        { id: 5, author: "You", text: "i dont speak ancient Greek" },
        { id: 6, author: "You", text: "Can you speak English?" },
        { id: 7, author: "Maisey Summers", text: "Oh, Sorry" }
  
      ],
      _newMessageText: ''
    }
  },
  getPosts() {
    return this._state._profilePage._posts;
    
  },
  getPartners() {
    return this._state._messagesPage._partners;
  },
  getNewPostText() {
    return this._state._profilePage._newPostText;
  },
  getMessages() {
    return this._state._messagesPage._messages;
  },
  getNewMessageText() {
    return this._state._messagesPage._newMessageText;
  },
  getState() {
    return this._state;
  },
  addPost() {
    if (this._state._profilePage._newPostText !== '') {
      const newPost = {
        id: 5,
        date: '06.09.2023',
        title: 'stupid function',
        post: this._state._profilePage._newPostText
      }
      this._state._profilePage._posts.push(newPost);
      this._state._profilePage._newPostText = '';
      this._rerenderEntireTree();
    }
  },
  updateNewPostText(newText) {
    this._state._profilePage._newPostText = newText;
    this._rerenderEntireTree();
  },
  addMessage() {
    if (this._state._messagesPage._newMessageText !== '') {
      const newMessage = {
        id: 5,
        author: 'You',
        text: this._state._messagesPage._newMessageText
      }
      this._state._messagesPage._messages.push(newMessage);
      this._state._messagesPage._newMessageText = '';
      this._rerenderEntireTree();
    }
  },
  updateNewMessageText(newText) {
    this._state._messagesPage._newMessageText = newText;
    this._rerenderEntireTree();
  },
  clearMessageText() {
    this._state._messagesPage._newMessageText = '';
    this._rerenderEntireTree();
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  _rerenderEntireTree() {

  }
}
export default store;