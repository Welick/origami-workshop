import React from 'react'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import PageWrapper from '../../components/page-wrapper'
import styles from './index.module.css'
import Input from '../../components/input'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    render() {
        return (
            <PageWrapper>
                <div className={styles.container} >
                    <Title title={"Login"} />
                    <Input value={this.state.email} onChange={(e) => this.onChange(e, 'email')} label="Email" id="email" />
                    <Input value={this.state.password} onChange={(e) => this.onChange(e, 'password')} label="Password" id="password" />
                    <SubmitButton title={"Login"} />
                </div>
            </PageWrapper>
        )
    }
}

export default LoginPage