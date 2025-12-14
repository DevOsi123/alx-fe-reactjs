import React from 'react';
import { useParams } from 'react-router-dom';

const UserPost = () => {
  const { id } = useParams();
  return <div>Viewing post with ID: {id}</div>;
};

export default UserPost;
