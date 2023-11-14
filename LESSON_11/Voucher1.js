class Voucher {
constructor (tourConcrete, clientConcrete, price) {
    this.tourConcrete = tourConcrete;
    this.clientConcrete = clientConcrete;
    this.price = price;
}
    setTourConcrete (tourConcrete) {
        this.tourConcrete = tourConcrete;
    }
    setClientConcrete(clientConcrete) {
        this.clientConcrete = clientConcrete;
    }
    setPrice (price) {
        this.price = price;
    }

    getTourConcrete () {
        return this.tourConcrete
    }
    getClientConcrete() {
        return this.clientConcrete;
    }  
    getPrice() {
        return this.price;
    } 

}

module.exports = Voucher;