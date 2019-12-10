// This is the content script
console.debug('🔗 Wiki Scout active');

// Get all links on the page that are local
const allLinks = document.querySelectorAll('a[href^="/"');

// Transform the data
const payload = [];
[...allLinks].forEach((link) => {
  if (link.innerText.length > 0){
    payload.push ({
      parent: window.location.href,
      url: link.href,
      text: link.innerText,
    });
  }
});

// Send the Data
chrome.runtime.sendMessage({
  type: 'LINKS_ON_PAGE',
  data: payload
})