const Base = require('./base');


class DeliveryPage extends Base {
  constructor(page) {
    super(page);
  }


  async opendeliveryPage() {
    const [deliveryPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      this.page.click(`${'#pdp-react-critical-app  a[data-testid="deliveryAndReturns__termsLink"]'}`),
    ]);
    await deliveryPage.waitForLoadState();
    return await deliveryPage.title();
  }

}


module.exports = DeliveryPage;