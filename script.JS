 // On récupère tous les blocs .block
let blocks = document.querySelectorAll(".block");

blocks.forEach(function(block){

    let title = block.querySelector("h3");

    title.onclick = function(){

        let children = block.children;

        for (let i = 0; i < children.length; i++) {
            let el = children[i];

            // On ignore le titre et le point
            if (el.tagName !== "H3" && !el.classList.contains("dot")) {

                // toggle afficher / cacher
                if (el.style.display === "none") {
                    el.style.display = "block";
                } else {
                    el.style.display = "none";
                }

            }
        }
    };
});


 