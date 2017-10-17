import openWebsite from '../support/action/openWebsite';

module.exports = function when() {
    this.When(
        /^I open the (url|site) "([^"]*)?"$/,
        openWebsite
    );
};