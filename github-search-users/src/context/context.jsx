import React, {useState, useEffect} from 'react';
import mockUser from './mockData.js/mockUser.jsx';
import mockRepos from './mockData.js/mockRepos.jsx';
import mockFollowers from './mockData.js/mockFollowers.jsx';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

export {GithubContext}