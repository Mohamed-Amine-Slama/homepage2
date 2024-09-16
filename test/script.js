document.getElementById('qcm-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;
    const totalQuestions = 50;  // Total number of questions
    const answers = {
      q1: 'B',  // Correct answer for question 1
      q2: 'C',  // Correct answer for question 2
      q3: 'C',  // Correct answer for question 3
      q4: 'A',  // Correct answer for question 4
      q5: 'C',  // Correct answer for question 5
      // Add answers for all remaining questions here
      q50: 'B'  // Correct answer for question 50
    };
  
    // Check each answer
    for (let i = 1; i <= totalQuestions; i++) {
      const questionName = 'q' + i;
      const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === answers[questionName]) {
        score++;
      }
    }
  
    // Display score
    alert(`You scored ${score} out of ${totalQuestions}`);
  });
  