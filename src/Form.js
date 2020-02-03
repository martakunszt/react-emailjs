import React from 'react';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {feedback: '', name: 'Name', email: 'email@example.com'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        return(
            <form className = "test-mailing">
                <h1>Send me an email</h1>
                <div className="right">
                    <textarea 
                    id= 'test-mailing'
                    name = 'test-mailing'
                    onChange= {this.handleChange}
                    placeholder = 'Post some lorem ipsum here'
                    requiredvalue = {this.state.feedback}
                    style = {{width:'40%', height: '150px', marginBottom:'50px'}}
                    />
                </div>
                <input type="button" value= "Submit" className="btn btn--submit" onClick={this.handleSubmit}/>
            </form>
        )
    }
    handleChange(event)
{
    this.setState({feedback:event.target.value})
}
handleSubmit(event){
  const templateId = 'template_id';

  this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
}

sendFeedback(templateId,variables){
  window.emailjs.send(
    'gmail', 'template_8hZNIbLK',
    variables
  ).then(res => {
    console.log('Email successfully sent!')
  })
  //Catching errors
  .catch(err=> console.error('Oh well try again:', err))
}
}