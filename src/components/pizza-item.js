import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const PizzaItem = (props) => {
  //const [message, setMessage] = useState('');
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  //const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const { getAccessTokenSilently, user } = useAuth0();
  //const { email_verified } = user;

  const makeOrder = async () => {
    try {
      const token = await getAccessTokenSilently();
      const body = {
        itemId: props.itemNum,
        userId: user.sub
      };
      console.log(body);
      const response = await fetch(`${serverUrl}/api/orders`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const responseData = await response.json();
      console.log(responseData);
      //setMessage(responseData.message);
    } catch (error) {
      //setMessage(error.message);
    }
  };

  // const callApi = async () => {
  //   try {
  //     const response = await fetch(`${serverUrl}/api/messages/public-message`);

  //     const responseData = await response.json();

  //     setMessage(responseData.message);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

  // const callSecureApi = async () => {
  //   try {
  //     const token = await getAccessTokenSilently();

  //     const response = await fetch(
  //       `${serverUrl}/api/messages/protected-message`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     const responseData = await response.json();

  //     setMessage(responseData.message);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

  return (
    <Fragment>
      <div>
        <div className="mt-2" style={{ width: '100%' }}>
          <p>Item {props.itemNum}</p>
          <p>Pizza with Olives, Mashrooms, and Pepperoni</p>
          <img
            src="/images/pizza-mash-olive-pepperoni.jpg"
            alt="Pizza with olives and Pepperoni"
            width={400}
          />
        </div>
        <div className="mt-2" style={{ width: '100%' }}>
          {props.userStatus === 'VERIFIED' && (
            <button
              type="button"
              className="btn btn-primary px-5"
              onClick={makeOrder}
            >
              Order Now
            </button>
          )}
          {(props.userStatus === 'PUBLIC' ||
            props.userStatus === 'AUTHENTICATED') && (
            <button type="button" disabled className="btn btn-primary px-5">
              Order Now
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default PizzaItem;
