const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const myOAuth2Client = new OAuth2(
  '1087539606954-3pves20n1j84op1pfqu25h8267oc3mpq.apps.googleusercontent.com',
  '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',
  'https://developers.google.com/oauthplayground'
)

myOAuth2Client.setCredentials({ refresh_token: '1//04iBn3Pe-fCuxCgYIARAAGAQSNwF-L9IrSDiAEWEWEirOWQROJ4KWCye4GB6AxHzbbBcAKMXtU_yIKE9HEhzgRbnnd7EXvfqvIDI' })

const myAccessToken = myOAuth2Client.getAccessToken()

exports.transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'cloudymus@gmail.com', // your gmail account you used to set the project up in google cloud console"
    clientId: '1087539606954-3pves20n1j84op1pfqu25h8267oc3mpq.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//04iBn3Pe-fCuxCgYIARAAGAQSNwF-L9IrSDiAEWEWEirOWQROJ4KWCye4GB6AxHzbbBcAKMXtU_yIKE9HEhzgRbnnd7EXvfqvIDI',
    accessToken: myAccessToken // access token variable we defined earlier
  }
})

exports.mailOptions = (sendTo, code) => {
  return {
    from: 'cloudymus@gmail.com', // sender
    to: sendTo, // receiver
    subject: 'My tutorial brought me here', // Subject
    html: `<p>Here is your reset password code <b>${code}</b></p>`// html body
  }
}
