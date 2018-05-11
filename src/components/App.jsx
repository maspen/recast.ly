class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: null,
      currentVideo: null,
      searchQuery: ''
    };

    // on start up, need to put in 'dummy' data
    // since 1st, default youtube search is happening
    // in componentDidMount() which is called AFTER
    // all components load
    this.state.videos = [{
      snippet: {
        thumbnails: {
          default: {
            url: ""
          }
        },
        title: "",
        description: "",
      },
      etag: "",
      id: {
        videoId: ""
      }
    }];

    this.state.currentVideo = this.state.videos[0];
  }

  componentDidMount() {
    window.searchYouTube({ key: window.YOUTUBE_API_KEY, query: 'puppies', max: 10 }, this.searchResultCallback.bind(this));
  }
  
  handleVideoListEntryClick(movie) {
    this.setState({
      currentVideo: this.state.videos[Number(movie.target.id)]
    });
  }
  
  handleChange(text) {
    //console.log('handleChange ', text);
    this.setState({ searchQuery: text }, function(){
      this.searchYouTubeButtonClick();
    });
  }

  searchResultCallback(resultData) {
    //console.log('searchResultCallback ', resultData);
    this.setState({ 
      videos: resultData,
      currentVideo: resultData[0]
    });
  }

  searchYouTubeButtonClick() {
    //console.log('search box input', this.state.searchQuery);
    window.searchYouTube({ key: YOUTUBE_API_KEY, query: this.state.searchQuery, max: 10 }, this.searchResultCallback.bind(this));
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.searchYouTubeButtonClick.bind(this)} textBoxChange={_.debounce(this.handleChange.bind(this), 500)} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList updateVideoPlayer={this.handleVideoListEntryClick.bind(this)} videos={this.state.videos} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
