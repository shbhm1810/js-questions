const PubSub = function () {

    this.suscribers = []


    this.unsuscribe = function (suscriber) {
        if (typeof subscriber !== 'function') {
            throw new Error(`${typeof subscriber} is not a valid argument for unsubscribe method, expected a function instead`)
        }
        this.suscribers = this.suscribers.filter((sub) => sub !== suscriber)

    }

    this.suscribe = function (subscriber) {

        if (typeof subscriber !== 'function') {
            throw new Error(`${typeof subscriber} is not a valid argument for subscribe method, expected a function instead`)
        }
        this.suscribers = [...this.suscribers, subscriber]
    }

    this.fire = function (event, thisObj) {
        const scope = thisObj;
        this.suscribers.forEach((sub) => {
            sub.call(scope, event);
        })
    }


}

const pubsubInstance = new PubSub();

function subscriberMethod(payload) {
    console.log(payload.message)
}

pubsubInstance.suscribe(subscriberMethod)


pubsubInstance.fire({ message: 'Hello pub' })