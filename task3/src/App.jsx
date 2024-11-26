import { Component } from 'react';
import './App.css';
class App extends Component {
  state = {
    email: '',
    password: '',
    email_info: '',
    password_info: ''
  };
  aa = (e) => {
    e.preventDefault(); 
    const { email, password, email_info, password_info } = this.state;
    if(!email_info && !password_info && email && password){
      console.log("E-mail:", email);
      console.log("Phone:", password);
      alert('Login uğurla yerləşdirildi!');
    } else {
      alert('Zəhmət olmasa bütün sahələri düzgün doldurun.');
    }
  };
  handleEmailChange = (e) => {
    const email_value = e.target.value
    if(!email_value.endsWith('.ru')){
      this.setState({ email_info: '.ru domain ilə daxil edin', email: email_value });
    }else{
      this.setState({ email_info: '', email: email_value });
    }
  };
  handlePhoneChange = (e) => {
    const phone_value = e.target.value
    if(phone_value.length < 8){
      this.setState({ password_info: 'Minimum 8 rəqəm daxil edin', password: phone_value });
    }else{
      this.setState({ password_info: '', password: phone_value });
    }
  };
  render() {
    const { email, password, email_info, password_info } = this.state;
    return (
      <div className="container">
        <h2>User Login</h2>
        <form onSubmit={this.aa}>
          <div className="form-group">
            <label>
              E-mail:
              <input
                type="email"
                value={email}
                onChange={this.handleEmailChange}
                required
              />
            </label>
            {email_info && <div className="error">{email_info}</div>}
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={this.handlePhoneChange}
                required
              />
            </label>
            {password_info && <div className="error">{password_info}</div>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
export default App;