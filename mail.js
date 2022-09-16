var nodeMailer=require('nodemailer');
var transport=nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'poojagupta21@navgurukul.org',
        pass:"Pooja2631"
    }
});
var mailOptions={
    from:"poojagupta21@navgurukul.org",
    to:"poojagupta21@navgurukul.org",
    subject:'test node mail',
    text:"This is Pooja Gupta from Navguruku.I am looking for job."
}
transport.sendMail(mailOptions,function(error,info){
    if (error){
        console.log("email has been sent",info.response);
    }
})
