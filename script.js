function generateStory() {
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;
    const noun2 = document.getElementById('noun2').value;
    
    const story = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb}. One day, while ${verb}ing, the ${noun} found a magical ${noun2}. The ${noun} picked up the ${noun2} and suddenly felt ${adjective}.`;
    
    document.getElementById('story').innerText = story;
  }