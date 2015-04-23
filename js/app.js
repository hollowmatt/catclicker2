var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickNames = ko.observableArray(data.nickNames);

  this.level = ko.computed(function() {
    if (this.clickCount() >= 0 && this.clickCount() <=9) {
      return "Newborn";
    } else if (this.clickCount() >= 10 && this.clickCount() <= 19) {
      return "Infant";
    } else {
      return "Full Grown";
    }
  }, this);
}

var ViewModel = function() {
  var self = this;

  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: 'Nippy',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/43164568',
    nickNames: [
        { nick: 'Peach' },
        { nick: 'Fuz' },
        { nick: 'Chuckles' }
    ]
  }));

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.resetCounter = function() {
    self.currentCat().clickCount(0);
  };
}

ko.applyBindings(new ViewModel());