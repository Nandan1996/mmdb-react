export const getMovies = (filter="") => {
	return fetch(`api/search${filter}`).then(response => {
		if(!response.ok){
			throw new Error('Server responded with status ${response.status}',response);
		}
		return response.json();
	});
};

export const getMovieById = (id) => {
	const url = `/api/movie?id=${id}`;
	return fetch(url).then(response => {
		if(!response.ok){
			throw response;
		}
		return response.json();
	});
};

export const postMovie = (movie) => {
	const url = `/api/movie`;
	return fetch(url,{
		method: 'put',
		body: JSON.stringify(movie),
		headers: new Headers({
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		})
	}).then(response => {
		if(!response.ok){
			throw new Error('Server responded with status ${response.status}',response);
		}
		return response.json();
	});
};