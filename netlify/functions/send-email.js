const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  // Gmail 설정
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gyuseoggang29@gmail.com',
      pass: 'a23779159a@'
    }
  });

  const mailOptions = {
    from: email,
    to: 'rbtjr1117@nate.com',
    subject: 'Netlify Function Test',
    text: `${name} (${email}) says: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: 'Email successfully sent'
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal Server Error'
    };
  }
};
