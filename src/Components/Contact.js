import React, { Component } from 'react'
import '../Styles/Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
        return (
            <div className='Contact'>
                <form onSubmit={this.submitForm} action='https://formspree.io/f/myylpgdo' method='POST' data-netlify='true' className='Contact-form'>
                    <label className='Contact-form__label' for='firstname'>First Name</label>
                    <input  autoComplete='off' type='text' id='firstname' name='firstname' className='Contact-form__input' required />
                  
                    <label className='Contact-form__label' for='lastname'>Last Name</label>
                    <input autoComplete='off' type='text' id='lastname' name='lastname' className='Contact-form__input' required />
                    <label className='Contact-form__label' for='email'>E-MAIL</label>
                    <input autoComplete='off' type='email' id='email' name='email' className='Contact-form__input' required />
                    <label className='Contact-form__label' for='contact'>Message</label>
                    <input autoComplete='off' type='text' id='contact' name='contact' className='Contact-form__input' required />
                    {status === "SUCCESS" ? <p className='formsubmit__msg'>Thanks!</p> : <button type='submit' className='Contact-form__submit'>SUBMIT</button>}
                    {status === "ERROR" && <p className='formsubmit__msg'>Ooops! There was an error.</p>}
                </form>
            </div>
        )
    }
}
export default Contact