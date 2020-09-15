const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name)=>{
    
    sgMail.send({
        to:email,
        from: 'pshubham874@gmail.com',
        subject:'Thanks for joining in!',
        text: `Welcome to the app ${name}. Let me know how you get along with the app. `
    })
}

const sendCancelMail = (email, name)=>{
    
    sgMail.send({
        to: email,
        from: 'pshubham874@gmail.com',
        subject:`Goodbye ${name}`,
        text:'Hope to see you back, is there anything we can do to enhance your experience'
    })
}
module.exports ={
    sendWelcomeMail,
    sendCancelMail
}