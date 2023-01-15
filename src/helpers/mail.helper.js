const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const myOAuth2Client = new OAuth2(
  '1083311390430-8qlhnrfgm879ok5t8thtq4844lf0l8pc.apps.googleusercontent.com',
  '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',
  'https://developers.google.com/oauthplayground'
)

myOAuth2Client.setCredentials({ refresh_token: '1//04dUIyQx6ObogCgYIARAAGAQSNwF-L9IrJOmMPbNATx0OEc9BHEzOnxeBCojBEpYHIFbk-AAtfnlpdCOIbvr-gdD9QfQnCQBGL_c' })

const myAccessToken = myOAuth2Client.getAccessToken()

exports.transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'karcis.id@gmail.com', // your gmail account you used to set the project up in google cloud console"
    clientId: '1083311390430-8qlhnrfgm879ok5t8thtq4844lf0l8pc.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//04dUIyQx6ObogCgYIARAAGAQSNwF-L9IrJOmMPbNATx0OEc9BHEzOnxeBCojBEpYHIFbk-AAtfnlpdCOIbvr-gdD9QfQnCQBGL_c',
    accessToken: myAccessToken // access token variable we defined earlier
  }
})

exports.mailOptions = (sendTo, code) => {
  return {
    from: 'karcis.id@gmail.com', // sender
    to: sendTo, // receiver
    subject: 'Karcis Reset Password', // Subject
    html: `<p>Here is your reset password code <b>${code}</b></p>`// html body
  }
}
