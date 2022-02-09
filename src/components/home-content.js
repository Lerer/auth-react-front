import React, { useState, useEffect } from 'react';
import PizzaItem from './pizza-item';
import Notification from '../ui/notification';
import { useAuth0 } from '@auth0/auth0-react';

const HomeContent = () => {
  const [userLoginStatus, setUserLoginStatus] = useState(); // authenticated, verified
  const [message, setMessage] = useState(); // authenticated, verified
  const [messageType, setMessageType] = useState(); // error, notify
  const { isAuthenticated, user } = useAuth0();
  const pleaseLogIn = 'Please Log In to make an order';
  const pleaseVerify = 'Please verify your account to order';
  let notifyTimeOut;

  useEffect(() => {
    if (isAuthenticated) {
      const { email_verified } = user;
      if (email_verified) {
        setUserLoginStatus('VERIFIED');
      } else {
        setUserLoginStatus('AUTHENTICATED');
      }
    } else {
      setUserLoginStatus('PUBLIC');
    }

    if (userLoginStatus === 'PUBLIC') {
      setMessageType('error');
      setMessage(pleaseLogIn);
    } else if (userLoginStatus === 'AUTHENTICATED') {
      setMessageType('error');
      setMessage(pleaseVerify);
    }
  });

  const notify = (messageStr) => {
    clearTimeout(notifyTimeOut);
    setMessageType('notify');
    setMessage(messageStr);
    console.log(messageStr);
    notifyTimeOut = setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  console.log(userLoginStatus);

  return (
    <div className="next-steps">
      <h2 className="my-5 text-center">All time favourite</h2>

      <div className="row">
        <div className="col-md-5 mb-4">
          <PizzaItem
            itemNum="1"
            onOrder={setMessage}
            userStatus={userLoginStatus}
            notify={notify}
          />
        </div>
        <div className="col-md" />
        <div className="col-md-5 mb-4">
          <PizzaItem
            itemNum="2"
            onOrder={setMessage}
            userStatus={userLoginStatus}
            notify={notify}
          />
        </div>
      </div>
      {message && <Notification title={message} type={messageType} />}
    </div>
  );
};

export default HomeContent;

/**
 *     <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/connections"
          >
            <i className="fas fa-link mr-2" />
            Configure other identity providers
          </a>
        </h6>
        <p>
          Auth0 supports social providers as Facebook, Twitter, Instagram and
          100+, Enterprise providers as Microsoft Office 365, Google Apps,
          Azure, and more. You can also use any OAuth2 Authorization Server.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/multifactor-authentication"
          >
            <i className="fas fa-link mr-2" />
            Enable Multi-Factor Authentication
          </a>
        </h6>
        <p>
          Add an extra layer of security by enabling Multi-factor
          Authentication, requiring your users to provide more than one piece of
          identifying information. Push notifications, authenticator apps, SMS,
          and DUO Security are supported.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/anomaly-detection"
          >
            <i className="fas fa-link mr-2" />
            Anomaly Detection
          </a>
        </h6>
        <p>
          Auth0 can detect anomalies and stop malicious attempts to access your
          application. Anomaly detection can alert you and your users of
          suspicious activity, as well as block further login attempts.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/rules"
          >
            <i className="fas fa-link mr-2" />
            Learn About Rules
          </a>
        </h6>
        <p>
          Rules are JavaScript functions that execute when a user authenticates
          to your application. They run once the authentication process is
          complete, and you can use them to customize and extend Auth0's
          capabilities.
        </p>
      </div>
    </div>
 */
