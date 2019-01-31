import Service from "Tiie/Api/Service";

export default function(app) {
    app.components().set("@api", new Service());

    return 1;
}
