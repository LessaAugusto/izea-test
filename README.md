
# izea-test

### Styles

This is a mobile-first project, which means that all CSS style has been created for mobile devices first. In order to adjust it to desktops and larger screens, media queries were used. It uses SASS (a CSS preprocessor).

The project is fairly responsive and all the information about breakpoints, font-sizes, and colors can be found at ```styles/base/_theme.scss```. One can see that, across the code, the unit ```rem``` has been used to set things like padding, margin, and font-size (sometimes, when things didn't need to be relative, the static unit ```px``` has been used as well). There is a comment everywhere ```rem``` has been used, basically converting that value to ```px```, using the default browser setting (```1rem = 16px```).
  

### Models, Serializers, and Adapters.

The project gets its data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/), and because of that there are two models: the ```user``` model and the ```post```  model.  A post ```belongs to``` one user.

When getting all posts, we have to access a particular metadata in the response header, so we must have a special serializer to the post model. Both of the models, however, can use the same adapter. Because of this, the project has only the ```application``` adapter and two serializers: the ```post``` serializer and the ```application``` serializer.

### Routes
There is only one route, the main one. It displays the ```Posts``` components, passing its model as an argument. It was a requirement of this project to let the user click on a post and to open a modal when it happens. The modal is basically going to show the information about the post and the user related to this post.

Because of this, the ```Posts``` component is responsible for controlling the state of the ```Modal``` component. When the user clicks on a post, the modal is set to visible and receives, as arguments, the information about both the post and user.

### Tests
Tests were created every time they actually needed to be created, which means that there are parts of the application without test files. That doesn't mean, however, they were not tested, it just means that they don't need tests at all. For example, no acceptance tests were created, we can safely rely on the component tests to see if the app is working from the user's perspective, after all there is only one route.

The project uses [ember-test-selectors](https://github.com/simplabs/ember-test-selectors)

## Prerequisites

You will need the following things properly installed on your computer.

*  [Git](https://git-scm.com/)

*  [Node.js](https://nodejs.org/) (with npm)

*  [Ember CLI](https://ember-cli.com/)

*  [Google Chrome](https://google.com/chrome/)

## Installation

*  `git clone <repository-url>` this repository

*  `cd izea-test`

*  `npm install`

## Running

*  `ember serve`

* Visit the app at [http://localhost:4200](http://localhost:4200).

* Visit the tests at [http://localhost:4200/tests](http://localhost:4200/tests).