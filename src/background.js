// This is the background script
// Listen for messages
chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case 'LINKS_ON_PAGE': {
      console.log(message.data);
    }
      break;
    default: {
      console.error(`
      Message ${message.type} received but is not handled
      `)
    }
  }
});