const animation_observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        const background = entry.target.querySelector(".bg-animation")

        if(entry.isIntersecting){
            background.classList.add("animate");
            return;
        }

        background.classList.remove("animate");
    });

});

animation_observer.observe(document.querySelector('.background-animated'));