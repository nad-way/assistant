// Ce fichier sert à personnaliser la carte 

// Include HubSpot node API client
const hubspot = require('@hubspot/api-client');
/*
// First des first 

// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {
  // Store contact firstname, configured as propertiesToSend in crm-card.json
  const { firstname } = context.propertiesToSend;
  
  const introMessage = {
    type: "alert",
    title: "Your first UI extension is ready!",
    variant: "success",
    body: {
      type: "text",
      format: "markdown",
      text: "Congratulations! You just deployed your first **HubSpot UI extension**. This example CRM card uses the [ZenQuotes public API](https://zenquotes.io/) to display a daily quote. It also includes custom button actions using serverless functions.",
    },
  };
  
  const nextSteps = [
    {
      type: "divider",
      distance: "small",
    },
    {
      type: "heading",
      text: "Next Steps",
    },
    {
      type: "text",
      format: "markdown",
      text: "You can explore more [code samples](https://github.com/HubSpot/ui-extensions-examples) or UI components in the [CRM card builder](https://app.hubspot.com/l/extensible-ui/), or try code samples. If you get stuck, take look at your [build or deploy logs](https://app.hubspot.com/l/developer-projects/) or [serverless functions logs](https://app.hubspot.com/l/private-apps/).",
    },
  ];
  
  try {
    const { data } = await axios.get("https://zenquotes.io/api/random");

    const quoteSections = [
      {
        type: "tile",
        body: [
          {
            type: "text",
            format: "markdown",
            text: `**Hello ${firstname}, here's your quote for the day**!`,
          },
          {
            type: "text",
            format: "markdown",
            text: `_${data[0].q}_`,
          },
          {
            type: "text",
            format: "markdown",
            text: `_**Author**: ${data[0].a}_`,
          },
        ],
      },
      {
        type: "button",
        text: "Get new quote",
        onClick: {
          type: "SERVERLESS_ACTION_HOOK",
          serverlessFunction: "crm-card",
        },
      },
    ];

    sendResponse({
      sections: [introMessage, ...quoteSections, ...nextSteps],
    });
  } catch (error) {
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: "ERROR",
        body: `Error: ${error.message}`,
      },
      sections: [introMessage],
    });
  }
 
} 

/*
exports.main = async (context = {}, sendResponse) => {
  const { firstname } = context.propertiesToSend;
  try {
  const introMessage = {
    type: "alert",
    title: "Your first UI extension is ready!",
    variant: "success",
    body: {
      type: "text",
      format: "markdown",
      text: "Congratulations! ",
    },
  };
  sendResponse({
    sections: [introMessage],
  });
}
catch (error) {
  // "message" will create an error feedback banner when it catches an error
  sendResponse({
    message: {
      type: "ERROR",
      body: `Error: ${error.message}`,
    },
    sections: [introMessage],
  });
}
}
*/
  /*
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


