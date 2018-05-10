// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em>blah blah blah</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><VideoPlayer video={window.exampleVideoData[0]} /></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList videos={window.exampleVideoData} /></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    }
  }
  
  handleVideoListEntryClick(movie) {
    this.setState({
      currentVideo: window.exampleVideoData[Number(movie.target.id)]
    })
  }
  
  searchYouTube(query) {
    console.log('App.search query: ', query);
    // this.setState
    //    videos: query
    //    currentVideo: query[0]
  }
  
  // search: function(query) {
  //   // fetch - query data, already has url
  //   // create a parse method
  //   $.ajax({
  //     url: this.url,
  //     type: 'GET',
  //     data: {
  //       key: YOUTUBE_API_KEY,
  //       maxResults: '5',
  //       q: query,
  //       part: 'snippet'
  //     },
  //     dataType: 'json',
  //     success: function(data) {
  //       console.log('Success!', data.items);
  //       this.set( data.items );
  //       var model = data.items[0];

  //       var id = model.id.videoId;
  //       var title = model.snippet.title;
  //       var description = model.snippet.description;
  //       var url = `https://www.youtube.com/embed/${id}`;

  //       $('.video-player').find('iframe').attr('src', url);
  //       $('.video-player').find('iframe').attr('src', url);
  //       $('.video-player').find('.video-player-details h3').text(title);      
  //       $('.video-player').find('.video-player-details div').text(description);

  //     }.bind(this),
  //     error: function(data) {
  //       console.log('Failure...', data);
  //     }.bind(this)
  //   });
  // },
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.searchYouTube} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo.bind(this)} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList updateVideoPlayer={this.handleVideoListEntryClick.bind(this)} videos={this.state.videos} /></div>
          </div>
        </div>
      </div>
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
