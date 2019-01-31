import TiieObject from "Tiie/Object";

import Api from "Tiie/Api/Api";

const cn = 'Service';
class Service extends TiieObject {
    constructor() {
        super();

        let p = this.__private(cn, {});
    }

    create(url) {
        let p = this.__private(cn);

        return new Api(url);
    }
}

export default Service;
