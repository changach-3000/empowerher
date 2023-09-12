const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const accountNumber = "+254 727 900 800";

app.post("/", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  let response = "";

  if (text === "") {
    response =
      "CON What would you like help with? \n1. Hospitals \n2. Shelters \n3.Counselling \n4.Sexual Education & family planning \n5.Adoption Agencies \n6.Helpline";
  } else if (text === "1") {
    response =
      "CON Choose hospital information you want to contact: \n1. Mercy General hospital \n2. Kiambu Level 5 \n3. Nairobi Women's Hospital ";
  } else if (text === "2") {
    response =
      "CON Choose shelter information you want to contact: \n1. Mum & Baby Foundation \n2. Shelter Seeker's \n3. The Munderu House ";
  } else if (text === "3") {
    response =
    `END Talk to a specialist kindly contact this number: ${accountNumber}`
  }
  else if (text === "4") {
    response =
    `END For more information visit this  <u><a className="text-blue-500 " href="https://www.plannedparenthood.org/learn/health-and-wellness/sexual-and-reproductive-anatomy">Site</a></u>`;
  }
  else if (text === "5") {
    response =
    `END For more information visit this  <u><a className="text-blue-500" href="https://mumsvillage.com/pregnancy-parenting/serah-adoption-agencies-kenya/">Site</a></u>`
  }
  else if (text === "6") {
    response =
    `END Kindly contact this number: ${accountNumber}`;
  }
  else if (text === "1*1") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this numberis ${accountNumber}`;
  }
  else if (text === "1*2") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this number ${accountNumber}`;
  }
  else if (text === "1*3") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this number ${accountNumber}`;
  }
  else if (text === "2*1") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this number ${accountNumber}`;
  }
  else if (text === "2*2") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this number ${accountNumber}`;
  }
  else if (text === "2*3") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this number ${accountNumber}`;
  }
     else {
    response = "END Invalid input";
  }

  res.set("Content-Type", "text/plain");
  res.send(response);
});

const port = 3004;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});