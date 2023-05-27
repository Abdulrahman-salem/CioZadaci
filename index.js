// Task 1

let btn = document.querySelector(".toggle-btn");
let article = document.querySelectorAll(".container-texts-task1");

function handelBtnTask1(e) {

    if (e.target.dataset.status.includes("false")) {
        let afterText = document.querySelectorAll(".add-text-after-this-text");
        article[0].children[afterText[0].nodeType].after(
            article[0].appendChild(
                Object.assign(document.createElement("p"), {
                    classList: "newChildLeftRight",
                    innerHTML:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, reprehenderit?",
                })
            )
        );
        e.target.dataset.status = true;
        btn.innerHTML = "show less";
        return;
    }
    (function removeElementWithAnimation() {
        // select the element then remove old animation then add new animation than delete the element after that
        let newChild = document.querySelector(".newChildLeftRight");
        newChild.classList.remove("newChildLeftRight");
        newChild.classList.add("newChildRightLeft");

        btn.innerHTML = "Learn more";
        setTimeout(() => {
            article[0].removeChild(
                document.querySelector(".newChildRightLeft")
            );
            // Delayed for 1 second because of the animation lasting for 1 second.
        }, 1000);

        e.target.dataset.status = false;
    })();
}

btn.addEventListener("click", handelBtnTask1);

//////////////////////////////////////////////////////////////////

// Task 3
let countryName;
const DataURL = "https://ipapi.co/json/";
const btnGetCountryName = document.querySelector(".getCountryName");

const getCountryName = async (url) => {
    const response = await fetch(url);

    if (response.ok) {
        return response.json();
    }
    return response;
    //
};

function storCountryNameInSessionStorage() {
    return sessionStorage.setItem("country Name", atob(countryName));
}

function showCountryName() {
    const sectionTask3 = document.querySelectorAll(".section-task3");

    // before first Child of the section-task3 create and add the new child to show the country name
    return sectionTask3[0].firstElementChild.before(
        document.body.appendChild(
            Object.assign(document.createElement("article"), {
                innerHTML: `<h2> Country: </h2> <p class="countryName"> ${countryName}</p>`,
            })
        )
    );
}

function handelBtnTask3(e) {
    if (document.querySelector(".countryName")) {
        return alert("City name already exists");
    }
    getCountryName(DataURL)
        .then((data) => (countryName = data.country_name.valueOf()))
        .catch((error) => console.log(error));

    setTimeout(() => {
        if (countryName) {
            storCountryNameInSessionStorage();
            showCountryName();
        }
    }, 500);
}

btnGetCountryName.addEventListener("click", handelBtnTask3);

//////////////////////////////////////////////////////////////////
