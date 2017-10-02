//USING jquery

  $(()=> {
      let ul = $("ul");
      let span = $("span");
      ul.hide();
      span.on("mouseenter", function() {
          $(this).next().slideDown();
      }).on("mouseout", function() {
          $(this).next().slideUp();
      });
  });
