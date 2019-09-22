import React, {Fragment} from 'react';

export const App = () => {
  return (
    <Fragment>
      <style>
        {`
            div{
              width: calc(100% - 32px);
              height: 400px;
              margin: 16px auto;
              position: relative;
            }
            h1{
              width: auto;
              position: absolute;
              top: 50%;
              left: 50%;
              text-align: center;
              transform: translate(-50%, -50%);
            }
            @media (min-width: 300px) and (max-width: 600px) {
              div{
                background : blue;
              }
              h1{
                color: white;
              }
            }
            @media (min-width: 600px) and (max-width: 800px) {
              div{
                background : red;
              }
              h1{
                color: yellow;
              }
            }
            @media (min-width: 800px) {
              div{
                background : violet;
              }
              h1{
                color: purple;
              }
            }
          `}
      </style>
      <div>
        <h1>Hello World, resize me ! </h1>
      </div>
    </Fragment>
  );
};
