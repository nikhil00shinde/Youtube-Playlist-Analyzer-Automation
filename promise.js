function placeOrder(order) {
	return new Promise(function (reslove, reject) {
		if (order === "coffee") {
			reslove("Order Placed");
		} else {
			reject("Sorry,We only have coffee");
		}
	});
}

function processOrder(order) {
	return new Promise(function (resolve) {
		console.log("Order is being processed");
		resolve(`Coffee Served for the ${order}`);
	});
}

// Scenerio with Promises
// placeOrder("coffee")
// 	.then(function (orderFromCustomer) {
// 		console.log("Requested Recieved");
// 		let orderIsProcessed = processOrder(orderFromCustomer);
// 		return orderIsProcessed;
// 	})
// 	.then(function (orderIsProcessed) {
// 		console.log(orderIsProcessed);
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});

//Async-await
async function serveOrder() {
	try {
		const orderRecieved = await placeOrder("coffee");
		console.log(orderRecieved);
		const processedOrder = await processOrder(orderRecieved);
		console.log(processedOrder);
	} catch (err) {
		console.log(err);
	}
}

serveOrder();
