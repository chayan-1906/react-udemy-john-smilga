import React from 'react';
import {Route} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import {useUserContext} from '../context/user_context.jsx';

const PrivateRoute = () => {
    return <h4>Private Route</h4>
}

export default PrivateRoute;
