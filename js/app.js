//data
var initialCats = [
  {
    clickCount: 0,
    name: 'Choppy',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/43164568'
  },
  {
    clickCount: 0,
    name: 'Nippy',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/43164568'
  },
];

//model
var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);

  this.level = ko.computed(function() {
    if (this.clickCount() >= 0 && this.clickCount() <=9) {
      return "Newborn";
    } else if (this.clickCount() >= 10 && this.clickCount() <= 19) {
      return "Infant";
    } else {
      return "Full Grown";
    }
  }, this);
};

//view model
var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });
  console.log(this.catList());

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.resetCounter = function() {
    self.currentCat().clickCount(0);
  };

  this.setCurrentCat = function(cat) {
    self.currentCat(cat);
  };
};

ko.applyBindings(new ViewModel());