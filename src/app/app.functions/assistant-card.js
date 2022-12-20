// First des first 

const hubspot = require('@hubspot/api-client');
// For external API calls
exports.main = async (context = {}, sendResponse) => {
  const {propertiesToSend: { hs_object_id, nom_assistant_e, email, firstname }} = context; 
  try {
   sendResponse({
    title: "This card retrieves key contact details.",
    sections: [
     {
      "type": "descriptionList",
      "direction": "row",
      "items": [
        {
          "label": "ID",
          "value": hs_object_id
        },
        {
          "label": "Nom Assistant",
          "value": nom_assistant_e
         }, 
       {
        "label": "Email",
        "value": email
       },
       {
        "label": "First name",
        "value": firstname
       }
      ]
     }
    ]
   });     
  } catch (error) {
     console.error(error);
    }
   };