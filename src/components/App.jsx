var App = () => (
  // console.log('data length', window.exampleVideoData.length);
  //console.log(props)
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em>blah blah blah</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <h5>Video Player</h5>
        <div><VideoPlayer video={window.exampleVideoData[0]} /></div>
      </div>
      <div className="col-md-5">
        <h5>Video List</h5>
        <div><VideoList videos={window.exampleVideoData} /></div>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
