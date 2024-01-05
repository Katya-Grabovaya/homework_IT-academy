const Page = require('./page');

class FiltertPage extends Page {
 
constructor() {
    super();
}

get 'Filtered Product Title'(){
    return '#product-205154554 a.productLink_KM4PI';
  }

}

module.exports = FiltertPage;