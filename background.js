chrome.runtime.onInstalled.addListener(() => {
  //create context menu
  chrome.contextMenus.create({
    id: "1",
    title: 'Look up "%s"',
    contexts: ["selection"],
  })
})

//listener for context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
  newURL = `https://dsal.uchicago.edu/cgi-bin/app/hayyim_query.py?qs=${info.selectionText}&searchhws=yes&matchtype=exact`

  chrome.tabs.create({ url: newURL })
})
