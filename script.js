//your JS code here. If required.
function strip(articleName) {
      return articleName.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort the articles while ignoring certain words
    const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

    // Add each article to the unordered list
    const bandList = document.getElementById('band');
    sortedBands.forEach(band => {
      const li = document.createElement('li');
      li.textContent = band;
      bandList.appendChild(li);
    });