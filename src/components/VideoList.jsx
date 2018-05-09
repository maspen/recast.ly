class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    console.log(this.props.data);
    return (
      <div className="video-list">
        {this.props.videos.map(movie => 
            <VideoListEntry key={movie.etag.toString()} video={movie} />
        )}
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
  // videos: window.exampleVideoData
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
