import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// SSR Fetch
// import fetch from 'isomorphic-unfetch';

type IIndexProps = {
  name: string;
}

const index = (props: IIndexProps) => {
  /* props */
  const { name } = props;

  /* store */
  const store = useSelector((state) => state);
  
  return (
    <div>
      <h1>{name}</h1>
      {JSON.stringify(store)}
    </div>
  );
};

// ServerSideRendering;
index.getInitialProps = () => {
  // fetch
  return { name: 'hello' }
}

export default index;
