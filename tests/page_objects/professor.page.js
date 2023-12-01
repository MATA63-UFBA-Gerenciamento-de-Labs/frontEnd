let PageObject = require('./page_object');
const {By} = require('selenium-webdriver');

class ProfessorPage extends PageObject{

    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

}
module.exports = ProfessorPage