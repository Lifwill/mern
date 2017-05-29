import React from 'react';

class UserList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users : [],
    };
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers() {
    fetch('api/user/').then(function(response) {
      var contentType = response.headers.get('content-type');
      if(contentType && contentType.indexOf('application/json') !== -1) {
        return response.json().then(function(json) {
          this.setState({
            users : json,
          });
        }.bind(this));
      } else {
        //console.log('Oops, we haven\'t got JSON!'); //eslint
      }
    }.bind(this));
  }

  render() {
    return <div>
      {this.state.users.map(function(user){
        return <div>{user.firstname} {user.lastname}</div>;
      })}
    </div>;
  }
}

export default UserList;
