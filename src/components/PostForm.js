import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert, hideAlert } from '../redux/actions';
import { Alert } from './Alert';

const PostForm = ({ createPost, showAlert, alert }) => {
  const [title, setTitle] = React.useState('');

  const submitHundler = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    if (!title.trim()) {
      return showAlert('Название поста не может быть пустым');
    }
    createPost(newPost);
    setTitle('');
  };

  const changeInputHundler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={submitHundler}>
      {alert && <Alert text={alert} />}

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Введите название поста
        </label>
        <input
          value={title}
          onChange={changeInputHundler}
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
        />
      </div>
      <button className="btn btn-success" type="submit">
        Создать
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  createPost,
  showAlert,
  hideAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
