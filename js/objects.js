var Platform = function(y) {
  var _ = this;
  _.inherits(Sprite);
  Sprite.call(_, 0, y, $.vw, 30);

  _.r = function() {
    $.x.s();
    $.x.fs("#57464a");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};

var Warning = function(y) {
  var _ = this;
  _.hs = [106, 246, 386];
  _.inherits(Sprite);
  _.lt = 1000;
  _.bt = 150; // Blink time
  _.sw = 1; // Show warning
  _.c = 0; // Counter
  Sprite.call(_, 600, _.hs[y], 16, 48);

  _.u = function() {
    _.lt -= $.e;
    _.c += $.e;
    if (_.c >= _.bt) {
      _.c = 0;
      _.sw = (_.sw) ? 0 : 1;
    }
    if (_.lt <= 0) _.a = 0;
  };

  _.r = function() {
    if (_.sw) {
      $.x.s();
      $.x.fs("red");
      $.x.fr(_.x, _.y, _.w, _.h - 16);
      $.x.fr(_.x, _.y + _.h - 12, _.w, 10);
      $.x.r();
    }
  };
};

var Door = function() {
  var _ = this;
  _.inherits(Sprite);
  _.sp = 350; // Speed
  _.dt = 300; // Delay before start moving
  _.ct = 0; // Counter
  _.cl = 0; // Is door closed?
  Sprite.call(_, -160, 0, 320, $.vh);

  _.u = function() {
    _.ct += $.e;
    if (_.ct < _.dt) return;

    if (_.x < 160) {
      _.x += ($.e / 1000) * _.sp;
    } else {
      _.x = 160;
      _.cl = 1;
    }
  };

  _.r = function() {
    $.x.s();
    $.x.fs("#2f4f4f");
    $.x.fr(_.x, _.y, _.w, 60);
    $.x.fr(_.x, 200, _.w, 280);
    $.x.fr(_.x, _.y, 30, 250);
    $.x.fr(_.x + _.w - 30, _.y, 30, 250);
    $.x.fr(_.x + 150, _.y, 20, 250);
    $.x.fr(_.x + 70, _.y, 20, 250);
    $.x.fr(_.x + 230, _.y, 20, 250);
    $.x.r();
  };
};
