var options = {
  thumbnailData: [{
    title: 'Show Courses',
    number: 32,
    header: 'Learn React',
    description: 'React is fantastic new library for making fast, dynamic pages. React is fantastic new library for making fast, dynamic pages.',
    imageUrl: 'http://formatjs.io/img/react.svg'
  }, {
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
    imageUrl: 'https://pbs.twimg.com/profile_images/417078109075034112/iruTC031_400x400.png'
  }]
};

// React renders the class
var element = React.createElement(ThumbnailList, options);

ReactDOM.render(element, document.querySelector('.container'));