# Wiki Scout

## Road map:

- [x] Create base repo
- [x] Add content script
  - [x] Get all links on page
  - [x] Filter links based on href to internal inks only
  - [x] Send payload to background script
- [x] Add background script
  - [x] Catch payload from content script
  - [ ] Create relational structure and persist it
  - [ ] Send relational structure to popup script
- [ ] Add popup script
  - [ ] Use relational structure and display force relational graph
- [ ] Add extra functionality
  - [ ] Add handler for clicking on leaf nodes to request API response in background script
  - [ ] Background script catch request, make API call, get response
  - [ ] Filter response to get all internal links
  - [ ] Create new relational structure
  - [ ] Send new relational structure to popup
  - [ ] Re-render force relational graph