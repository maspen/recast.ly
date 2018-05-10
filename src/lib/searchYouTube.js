var searchYouTube = (props, callback) => {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        key: props.key,
        maxResults: props.max,
        q: props.query,
        part: 'snippet'
      },
      dataType: 'json',
      success: function(data) {
        console.log('Success!', data.items);
        callback(data.items);
      }.bind(this),
      error: function(data) {
        console.log('Failure...', data);
        // TODO: how to handle errors?
      }.bind(this)
    });
};

window.searchYouTube = searchYouTube;
