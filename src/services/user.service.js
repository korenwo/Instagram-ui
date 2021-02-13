
import Cookies from 'js-cookie';

export class UserService {

  static login (values) {
    return fetch('http://localhost:4000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => {
      if(res.status === 200) {
        res.json().then(json => {
          Cookies.set(`instagram-user`, json.token, { expires: 30 });
        });
        return true;
      }
      return false;
    });
  }

  static register(values) {
    return fetch('http://localhost:4000/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(res => {
      if(res.status === 201) {
        return {isSuccess: true};
      }
      return {isSuccess: false, message: res.message};
    });
  }

  static me() {
    const body = {
      token: Cookies.get('instagram user')
    };
    return fetch('http://localhost:4000/user/me', {
      method:'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body:JSON.stringify(body)
    }).then(res => { 
      if (res.status !== 200) {
        return null;
      }
    return res.json();
    });
  }
}

