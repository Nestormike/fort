import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { SetAuthorized } from '../actions/auth';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = React.createRef();
    this.password = React.createRef();
    this.lang = React.createRef();
    this.timezone = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
        const url = `https://web.fort-monitor.ru/api/integration/v1/connect?login=` +
            `${this.login.current.value}&password=${this.password.current.value}&lang=${this.lang.current.value}&timezone=${this.timezone.current.value}`;
        const response = await (await fetch(url, { mode: 'cors', credentials: 'include' })).text();
        if (response === '"Ok"') {
            localStorage.setItem("IsAuthorized", 1);
            this.props.dispatch(SetAuthorized());
        } else {
            // TODO alert error
        }
    })();
  }

  render() {
    if (!this.props.isAuthorized) {
      return (
          <form onSubmit={this.handleSubmit}>
            <label>
              E-mail:
              <input type="text" name="login" ref={this.login} />
            </label>
            <label>
              Password:
              <input type="password" name="password" ref={this.password} />
            </label>
            <label>
              Lang:
              <input type="text" name="lang" ref={this.lang} />
            </label>
            <label>
              Timezone:
              <input type="text" name="timezone" ref={this.timezone} />
            </label>
            <input type="submit" value="Submit" />
          </form>
      );
    } else {
        return <Redirect to="/profile" />
    }
  }
}

const mapStateToProps = store => {
    return {
        isAuthorized: store.auth.isAuthorized
    }
};

export default withRouter(connect(mapStateToProps)(Login));