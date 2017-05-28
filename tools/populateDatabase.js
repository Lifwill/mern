import mongoose from 'mongoose';
import serverConfig from '../src/server/serverConfig';
import User from '../src/server/model/user';

const populate = function() {
  const user1 = new User({ email: 'jwafellman@gmail.com', password: 'coucou', firstname: 'Jonathan', lastname: 'Wafellman' });
  const user2 = new User({ email: 'pleonasme666@hotmail.com', password: 'coucou2', firstname: 'Pleo', lastname: 'Nasme' });
  User.create([user1, user2], error => {
    console.log(error); // eslint-disable-line no-console
  });
};


mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  populate();

});
