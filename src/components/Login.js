import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../api/fetchData'
import { toggleLogin } from '../redux/actions'
import whiteLogo from '../static/wzjj-logo-white.png'
import background from '../static/loginBackground.png'

class Login extends React.Component {

  state = { msg:'' }

  handleClick = (name,password) => {
    this.setState({msg:''})
    if(name === '' || password === ''){
      this.setState({msg:'请填写完整'})
      return
    }
    auth(name,password).then(success => {
      if(success){
        this.props.toggleLogin()
        return
      }
      this.setState({msg:'用户名或密码错误'})
    })
  }

  render() {
    return (
      <div className='Login'>
        <img id="login-logo" src={whiteLogo} alt=""/>
        <section>
          <img id="login-pic" src={background} alt="" />
          <main>
            <header>登录</header>
            <input ref={node=>this.name = node} id="login-name" placeholder='请输入账号' />
            <input type="password" ref={node=>this.password = node} id="login-password" placeholder='请输入密码' />
            <article>{this.state.msg}</article>
            <button onClick={()=>this.handleClick(this.name.value,this.password.value)}>登录</button>
          </main>
        </section>
      </div>
    )
  }
}

Login = connect(null,{toggleLogin})(Login)

export default Login
