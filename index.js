async function getTitle() {
    // 데이터 가져오기
    const response = await fetch('https://api.hnpwa.com/v0/newest/1.json')
    const jsonData = await response.json()
    return jsonData
}

async function renderTitle() {
    const data = await getTitle();
    // render logic
    const titleList = data.map((x) => x.title);

    for (let i=0;i<titleList.length;i++)
    {
        document.querySelector(".title-list").innerHTML += `<li> ${titleList[i]}</li>`;
    }
}

function main() {
    renderTitle();
}

main();