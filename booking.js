// Select all elements with the class "language"
let languages = document.getElementsByClassName("language");

for (let i = 0; i < languages.length; i++) {
  // Add click event listener to each language div
  languages[i].addEventListener("click", function() {
    // Find the flag icon within the clicked language div
    let flagIcon = this.querySelector(".flag");

    // Get the div where the selected flag will be displayed
    let languageFlagDisplay = document.getElementById("language_flag");

    // Update the innerHTML of language_flag with the selected flag's HTML
      languageFlagDisplay.innerHTML = flagIcon.innerHTML;
    
  });
}
