import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Синхронные посты</h1>
          <PostList />
        </div>
        <div className="col">
          <h1>Acинхронные посты</h1>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
