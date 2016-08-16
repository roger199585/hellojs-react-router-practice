import routes from './routes';
import {Router, browserHistory, hashHistory} from 'react-router';

ReactDOM.render((
  <Router children={routes}  history={browserHistory}/>
  //<Router children={routes}  history={hashHistory}/>
  // if you use hashHistory while you are jumping to different page the web won't be refresh
  // but the url will be ugly
), document.getElementById('root'));
