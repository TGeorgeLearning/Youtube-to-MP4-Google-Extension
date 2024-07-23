


chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {

  if (message.action === 'real') {
    // Gets the current URL
    chrome.tabs.query({currentWindow: true, active: true},  async function(tabs){
      const myUrl = new URL(tabs[0].url);
      const vidId = myUrl.searchParams.get('v');
     console.log(vidId);
      const oneHalf = 'https://yt-api-video-download.p.rapidapi.com/download_links?video_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D';
      const url = oneHalf+vidId;
      console.log(url);
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '(Not showing my api key! Replace this part with your own...)',
          'x-rapidapi-host': 'yt-api-video-download.p.rapidapi.com'
        }
      };
   // Sends the available qualities to download + the download URLS   
      try {
        const response = await fetch(url, options);
     
        const data = await response.json();
        console.log(data.video_links);
    
        chrome.runtime.sendMessage({ action: 'updatePopup', data: data.video_links});
      
      } catch (error) {
        console.error(error);
      }
    });

    } else if (message.action === 'download') {
      try {
        // Retrieves the final download link
      chrome.storage.sync.get(['storedValue'], function(result) {

        const downUrl = result.storedValue;
        console.log('Downloading from URL:', downUrl);

        chrome.downloads.download({
          url: downUrl,
          filename: 'video.mp4'
        }, function(downloadId) {
          console.log('Download started with ID:', downloadId);
        });
      });
    } catch (error) {
      console.error(error);
    }
    }



});
