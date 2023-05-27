const naturePuzzleData = [
    {
        image_url: "./images/img1.svg",
        headArticle: "Premium nature jigsaw puzzles",
        description:
            "Our passion became our business: the world of nature and the search for serenity.",
    },
    {
        image_url: "./images/img2.svg",
        headArticle: "Crafted with passion & attention to details",
        description:
            "Each of our jigsaw puzzles is first drawn by hand and every piece is then carefully reviewed one by one.",
    },
    {
        image_url: "./images/img3.svg",
        headArticle: "Play your way into the world of nature",
        description:
            "Put your phone down for a while, relax, and solve a puzzle.",
    },
    {
        image_url: "./images/img4.svg",
        headArticle: "Sustainability is in our DNA",
        description:
            "For every item sold we will plant one tree and make a donation to improve global access to safe drinking water.",
    },
];

if (naturePuzzleData.length > 0) {
    let JSON_LD_Script = document.querySelector(".JSON-LD");

    const containerList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [],
    };

    naturePuzzleData.forEach((article, index) => {
        const listItem = {
            "@type": "ListItem",
            position: index + 1,
            item: {
                id: `item${index + 1}`,
                // image: article.image_url,
                name: article.headArticle,
                // description: article.description,
            },
        };

        containerList.itemListElement.push(listItem);
    });

    JSON_LD_Script.innerHTML = JSON.stringify(containerList);
    addNaturePuzzleDataToSectionInPage();
}

function addNaturePuzzleDataToSectionInPage() {
    let newSection = document.body.insertBefore(
        // inserts a new node before last child in body which is script 
        document.createElement("section"),
        document.body.lastChild
    );
    newSection.className = "section-task4";
    naturePuzzleData.map((eachGroupOfData) => {
        newSection.appendChild(
            Object.assign(document.createElement("article"), {
                innerHTML: `<figure>
                                <img src="${eachGroupOfData.image_url}" alt="">
                            </figure>
                            <section class="container-text">
                                <h3>${eachGroupOfData.headArticle}</h3>
                                <p>${eachGroupOfData.description}</p>
                            </section>`,
            })
        );
    });
}
