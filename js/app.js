var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
  this.nickNames = ko.observableArray([
        { nick: 'Peach' },
        { nick: 'Fuz' },
        { nick: 'Chuckles' }
    ]);

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

  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };

  this.resetCounter = function() {
    this.currentCat().clickCount(0);
  };
}

ko.applyBindings(new ViewModel());