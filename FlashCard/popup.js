document.addEventListener('DOMContentLoaded', function() {
    const flashcardsContainer = document.getElementById('flashcards');
    const addFlashcardButton = document.getElementById('add-flashcard');
  
    addFlashcardButton.addEventListener('click', function() {
      const question = document.getElementById('question').value;
      const answer = document.getElementById('answer').value;
  
      if (question && answer) {
        const flashcard = { question, answer };
        saveFlashcard(flashcard);
        renderFlashcard(flashcard);
        document.getElementById('question').value = '';
        document.getElementById('answer').value = '';
      }
    });
  
    function saveFlashcard(flashcard) {
      chrome.storage.sync.get(['flashcards'], function(result) {
        let flashcards = result.flashcards || [];
        flashcards.push(flashcard);
        chrome.storage.sync.set({ flashcards: flashcards });
      });
    }
  
    function renderFlashcard(flashcard) {
      const flashcardElement = document.createElement('div');
      flashcardElement.className = 'flashcard';
      flashcardElement.innerHTML = `
        <p><strong>Question:</strong> ${flashcard.question}</p>
        <p><strong>Answer:</strong> ${flashcard.answer}</p>
      `;
      flashcardsContainer.appendChild(flashcardElement);
    }
  
    function loadFlashcards() {
      chrome.storage.sync.get(['flashcards'], function(result) {
        let flashcards = result.flashcards || [];
        flashcards.forEach(renderFlashcard);
      });
    }
  
    loadFlashcards();
  });
  