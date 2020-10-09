import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Profile.css'
import Companies from "../companies/Companies";
import Info from "../info/Info";
import loader from "../../loader";

class Profile extends React.Component {

    componentDidMount() {
        loader.load();
    }

    render() {
    return this.props.isAuthorized ?
        <div className='container'>
          <div className='list'>
              <div>
                  <p>list</p>
              </div>
              <ul>
                  <Companies />
              </ul>
          </div>
          <div className='info'>
            <Info />
          </div>
        </div> :
      <Redirect to="/login" />
  }
}

const mapStateToProps = store => {
    return {
        isAuthorized: store.auth.isAuthorized
    }
};

export default connect(mapStateToProps)(Profile);