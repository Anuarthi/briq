browser.waitForAngularEnabled(false);
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      var title = element(by.xpath("//*[@id='content']/div/h3"));
      browser.get('http://the-internet.herokuapp.com/checkboxes');
      expect(title.getText()).toEqual('Checkboxes');
      browser.sleep(5000);
    });
    it('should have the checkbox 1 unchecked and checkbox 2 checked and vice versa', function() {
      browser.get('http://the-internet.herokuapp.com/checkboxes');
      var checkbox1 = element(by.xpath("//*[@id='checkboxes']/input[1]"));
      var checkbox2 = element(by.xpath("//*[@id='checkboxes']/input[2]"));
      expect(checkbox1.isSelected()).toBe(false).then(function(){
        checkbox1.click();
        expect(checkbox1.isSelected()).toBe(true);
      });

      expect(checkbox2.isSelected()).toBe(true).then(function(){
        checkbox2.click();
        expect(checkbox2.isSelected()).toBe(false);
      });
    });
  });