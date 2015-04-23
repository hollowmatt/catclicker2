var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
  this.level = ko.computed(function() {
    if (this.clickCount() >= 0 && this.clickCount() <=9) {
      return "Newborn";
    } else if (this.clickCount() >= 10 && this.clickCount() <= 19) {
      return "Infant";
    } else {
      return "Full Grown";
    }
  }, this);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.resetCounter = function() {
    this.clickCount(0);
  };
}

ko.applyBindings(new ViewModel());