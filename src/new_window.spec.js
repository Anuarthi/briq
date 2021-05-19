browser.waitForAngularEnabled(false);
describe('Protractor Demo App', function() {

    it('should have a title "Opening a new window"', function() {
      var title = element(by.xpath("//*[@id='content']/div/h3"));
      browser.get('http://the-internet.herokuapp.com/windows');
      expect(title.getText()).toEqual('Opening a new window');
    });


    it('should open a new window', function() {
      browser.get('http://the-internet.herokuapp.com/windows');
      var click_here = element(by.xpath("//*[@id='content']/div/a"));
      click_here.click();
        browser.sleep(10000);
        var winhandles = browser.getAllWindowHandles();
        winhandles.then(function(handles){
          var parentWindow = handles[0];
          var newWindow = handles[1];
          browser.switchTo().window(newWindow); 
          expect(browser.getCurrentUrl()).toEqual("http://the-internet.herokuapp.com/windows/new");
          expect(browser.getTitle()).toEqual("New Window");    
        })
    });
  });