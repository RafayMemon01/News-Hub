let articlesPerPage;
let totalPages;
console.log("Hello Rafay Memon");
const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get('q');
const page = parseInt(searchParams.get('pageno'));
console.log(query, page)
const fetchNews = async (query, pageNo) => {
  try {
    const newsResponse = await fetch(`/v1/api/?q=${query}&pageno=${pageNo}&apiKey=3f19eb578b8a4e06a1e026c834c74472&pageSize=12&page=${pageNo}`);
    const responseData = await newsResponse.json();
    console.log("response", responseData);
    totalPages = Math.ceil( responseData.totalResults/articlesPerPage)
    // document.getElementById("pre")
    pre.href = `?query=${query}&pageno=${page-1}`
    // document.getElementById("next")
    next.href = `?query=${query}&pageno=${page+1}`
    let str = "";
    for (let item of responseData.articles){
        str = str + `<div class="card m-3" style="width: 18rem">
        <img src="${item.urlToImage}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">
            ${item.description}
          </p>
          <a target="_blank" href="${item.url}" class="btn btn-primary">Readmore</a>
        </div>
      </div>`
    }

    content.innerHTML = str;

  } catch (error) {
    console.error(error);
  }
};

fetchNews( query, page);
