// app.js : 영화 배열을 다루는 함수 6개 / 김민재(2651009) / 10주차
// average : 영화 배열 ⇒ 평균 평점(숫자)
function average(list) {
 let sum = 0;
 for (const m of list) {
 sum += m.rating;
 }
 return sum / list.length;
}

// best : 영화 배열 => 평점이 가장 높은 영화 객체
function best(list) {
    let top = list[0];
    for (const m of list) {
        if (m.rating > top.rating) {
            top = m;
        }
    }
    return top;
}


// filterByRating : 영화 배열, 최소 평점 => 그 이상인 영화만 담은 새 배열
function filterByRating(list, min) {
    return list.filter(m => m.rating >= min);
}


// sortByRating : 영화 배열 => 평점 높은 순으로 정렬한 새 배열(원본은 그대로)
function sortByRating(list) {
    return [...list].sort((a, b) => b.rating - a.rating);
}


// yearsSince : 날짜 문자열 => 올해까지 몇 년(숫자)
function yearsSince(dateStr) {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}


// posterUrl : 포스터 경로, 크기 => TMDB 이미지 주소(문자열)
function posterUrl(path, size) {
    return "https://image.tmdb.org/t/p/" + size + path;
}
// renderCards : 영화 배열 => 보드에 카드 생성(반환값 없음)
function renderCards(list) {
    const board = document.querySelector(".board");

    board.innerHTML = "";
    for (const m of list) {
        const card = document.createElement("article");
        card.className = "card";
     if (m.rating >= 8) {
        card.classList.add("hot");
     }
        card.innerHTML = `
            <img class="poster" src="${posterUrl(m.poster, "w342")}" alt="${m.title} 포스터">
            <span class="badge">${m.rating}</span>
            <div class="info">
                <h2>${m.title}</h2>
                <p class="year">${m.year}</p>
            </div>`;
        board.appendChild(card);
    }
 document.getElementById("count").textContent = list.length + "편";
}
renderCards(movies);

