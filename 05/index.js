function discoverLigthBulbs() {
    let bulbs = {
        bulb1: {status: "off", hot: false },
        bulb2: {status: "off", hot: false },
        bulb3: {status: "off", hot: false },
    };

    bulbs.bulb1.status = "on";

    setTimeout(() => {
        bulbs.bulb1.hot = true;

        bulbs.bulb1.status = "off";
        bulbs.bulb2.status = "on";

        for(let bulb in bulbs) {
            if(bulbs[bulb].status === "on") {
                console.log(`${bulb} está ligada e pertence ao Interruptor 2 `);
                
            } else if (bulbs[bulb].hot) {
                console.log(`${bulb} esta apagada, mas quente e pertence ao Interruptor 1`);
            } else {
                console.log(`${bulb} está apagada , fria e pertence ao Interruptor 3`);
            }
        }        
    }, 5000);
}

discoverLigthBulbs()
