(function() {
  var wait;

  wait = function(ms, fn) {
    return setTimeout(fn, ms);
  };

  /*
  Flash some elements really quickly
  */


  $.fn.flash = function(options, callback) {
    var $els;
    $els = $(this);
    options = options || {};
    $els.clearQueue().stop(true, true).queue(function() {
      var $this, duration, i, opacity, times, transition;
      $this = $(this);
      duration = options.duration || 200;
      times = options.times || 3;
      opacity = options.opacity || 0.25;
      transition = $this.css("-webkit-transition");
      $this.css("-webkit-transition", "none");
      i = void 0;
      i = 0;
      while (i < times - 1) {
        $this.animate({
          opacity: opacity
        }, {
          duration: duration
        }).animate({
          opacity: 1
        }, {
          duration: duration
        });
        ++i;
      }
      return $this.animate({
        opacity: opacity
      }, {
        duration: duration
      }).animate({
        opacity: 1
      }, {
        duration: duration,
        complete: function() {
          $this.css("-webkit-transition", transition);
          if (callback) {
            return callback.call(this);
          }
        }
      }).dequeue();
    });
    return this;
  };

  $(function() {
    var $backdrop, $body, $nav, $profiles;
    $body = $(document.body);
    $backdrop = $('.modal-backdrop');
    $profiles = $('.profile');
    $nav = $('.main-nav');
    $profiles.find('.close').add($backdrop).click(function() {
      $profiles.removeClass('in');
      $body.removeClass('modal-open');
      $backdrop.removeClass('in').hide();
      return $nav.children().removeClass('sel');
    });
    return $('.social-link').each(function() {
      var $selected, $this, socialID, socialSelector;
      $this = $(this);
      socialID = $this.data('socialid');
      socialSelector = '.' + socialID;
      $selected = $profiles.filter(socialSelector);
      if ($selected.length === 0) {
        return;
      }
      return $this.click(function(event) {
        var $active;
        if (event.which === 2 || event.metaKey) {
          return;
        }
        event.preventDefault();
        $active = $profiles.filter('.in');
        $body.addClass('modal-open');
        $backdrop.show().addClass('in');
        $this.parent().addClass('sel').siblings('.sel').removeClass('sel');
        if ($active.is(socialSelector)) {
          return $selected.flash({
            times: 1,
            opacity: 0.25,
            duration: 100
          });
        } else {
          $active.fadeOut(200, function() {
            return $active.removeClass('in').show();
          });
          return $selected.addClass('in');
        }
      });
    });
  });

}).call(this);
