class customHTTPMethods {
	async get(url) {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}

	async post(url, product) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(product),
		});
		const data = await response.json();
		return data;
	}

	async delete(url) {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
			},
		});
		const data = await 'Product deleted ...';
		return data;
	}
}

export const http = new customHTTPMethods();
