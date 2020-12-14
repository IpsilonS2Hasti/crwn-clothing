import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''});
  }

  handleChange = event => {
    const { value, name } = event.target; // Since the name of the input and state property are the same, we can dynamically set it
    this.setState({[name]: value}); // The square brackets allow us to use a variable as the key
  }

  render() {
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label = 'email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label = 'password'
            required
          />

          <CustomButton type='submit'> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;