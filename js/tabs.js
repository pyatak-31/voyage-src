function getTabs(evt, category) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("offers__list");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tabs__link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.querySelector(`.${category}`).style.display = "flex";
    evt.currentTarget.className += " active";
}

const tabs = document.querySelectorAll(".tabs__link");

for (let tab of tabs) {
	tab.addEventListener("focus", () => {
		let dataTab = tab.dataset.tab;
		getTabs(event, dataTab);
	});
}