import {Link} from 'react-router-dom';

function PostDetail() {
  return (
  <div>
    <ul id="nav">
      <li>
        <Link to='/'>Home</Link>
      </li>

      <li>
        <Link to='/create-post'>Create Post</Link>
      </li>
    </ul>
  </div>
  );
}

export default PostDetail;
