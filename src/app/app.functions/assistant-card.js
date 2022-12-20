// Ce fichier sert à personnaliser la carte 

// Include HubSpot node API client
const hubspot = require('@hubspot/api-client');

exports.main = async (context = {}, sendResponse) => {
  // Store contact info, configured as propertiesToSend in crm-card.json
  const { hs_object_id, firstname, lastname, type_contact } = context.propertiesToSend;
  
  if (`${type_contact}` === `Client`) {
    if (`${nom_assistant_e}` !== ``) {
      sendResponse({ sections: [
        {
          "type": "text",
          "format": "markdown",
          "text": "**Markdown**"
        },
      ],
    });
    }
  };
  console.log(`${nom_assistant_e}`)
};



/*
exports.main = async (context = {}, sendResponse) => {
  const {propertiesToSend: { email, firstname, lifecyclestage }} = context;
  try {
   sendResponse({
    //title: "This card retrieves key contact details.",
    sections: [
      {
        "type": "descriptionList",
        "items": [
          {
            "label": "Component",
            "value": "Description list"
          },
          {
            "label": "What's shown",
            "value": "Pairs of labels and values"
          },
          {
            "label": "Direction options",
            "value": {
              "type": "text",
              "text": "Row or column"
            }
          },
          {
            "label": "Relevant doc",
            "value": {
              "type": "text",
              "format": "markdown",
              "text": "[Learn more about the description list component](https://app-eu1.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
            }
          }
        ]
      },
      {
        "type": "button",
        "text": "Click to trigger an action",
        "onClick": {
          "type": "SERVERLESS_ACTION_HOOK",
          "serverlessFunction": "exampleFunction"
        }
      }
    ]
   });     
  } catch (error) {
     console.error(error);
    }
   };
*/


