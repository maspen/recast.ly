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
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em>blah blah blah</h5></div>
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
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
