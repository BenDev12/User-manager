import axios from "axios";
const email_map = require("../config/email_mapping.json");

const URL = process.env.EMAILJS_API_URL;
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID;

class EmailjsServices {
  static async send_mail(params) {
    const data = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: email_map[params.template_id],
      user_id: EMAILJS_USER_ID,
      template_params: params.attributesgit,
    };
    try {
      await axios(URL, {
        method: "POST",
        data: data,
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      });
      console.log("OK");
    } catch (error) {
      console.log(error);
      console.log("FAILED");
    }
  }
}
module.exports = EmailjsServices;
