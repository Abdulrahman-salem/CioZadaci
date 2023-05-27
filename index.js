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
