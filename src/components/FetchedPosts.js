import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../components/Post';
import { fetchedPost } from '../redux/actions';
import { Loader } from './Loader';

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <button onClick={() => dispatch(fetchedPost())} className="btn btn-primary">
        Загрузить
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.title} />);
};

export default FetchedPosts;
