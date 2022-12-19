// Ce fichier sert à personnaliser la carte 

// Include HubSpot node API client
const hubspot = require('@hubspot/api-client');

/*
exports.main = async (context = {}, sendResponse) => {
  // Store contact info, configured as propertiesToSend in crm-card.json
  const { hs_object_id, firstname, lastname, type_contact } = context.propertiesToSend;
  
  if (`${type_contact}` === `Client`) {
    if (`${nom_assistant_e}` !== ``) {
      sendResponse({ sections: [`${nom_assistant_e}`], 
    });
    }
  };
  console.log(`${type_contact}`, `${type_contact}` === `Client`)
};

*/

exports.main = async (context = {}, sendResponse) => {
  const {propertiesToSend: { email, firstname, lifecyclestage }} = context;
  try {
   sendResponse({
    title: "This card retrieves key contact details.",
    sections: [
     {
      "type": "descriptionList",
      "direction": "row",
      "items": [
       {
        "label": "Email",
        "value": email
       },
       {
        "label": "First name",
        "value": firstname
       },
       {
        "label": "Lifecycle stage",
        "value": lifecyclestage
       }
      ]
     }
    ]
   });     
  } catch (error) {
     console.error(error);
    }
   };
