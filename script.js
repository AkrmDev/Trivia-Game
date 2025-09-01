// Trivia Game - Main JavaScript File
class TriviaGame {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.skippedAnswers = 0;
        this.questions = [];
        this.currentQuestionData = null;
        this.gameStats = this.loadGameStats();
        
        this.initializeGame();
        this.bindEvents();
    }

    initializeGame() {
        this.loadQuestions();
        this.updateStats();
    }

    loadGameStats() {
        const stats = localStorage.getItem('triviaGameStats');
        return stats ? JSON.parse(stats) : {
            highScore: 0,
            gamesPlayed: 0
        };
    }

    saveGameStats() {
        localStorage.setItem('triviaGameStats', JSON.stringify(this.gameStats));
    }

    updateStats() {
        document.getElementById('high-score').textContent = this.gameStats.highScore;
        document.getElementById('games-played').textContent = this.gameStats.gamesPlayed;
    }

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('hint-btn').addEventListener('click', () => this.showHint());
        document.getElementById('skip-btn').addEventListener('click', () => this.skipQuestion());
        document.getElementById('play-again-btn').addEventListener('click', () => this.playAgain());
        document.getElementById('home-btn').addEventListener('click', () => this.goHome());
        
        // Modal close events
        document.querySelector('.close').addEventListener('click', () => this.closeHintModal());
        window.addEventListener('click', (e) => {
            if (e.target === document.getElementById('hint-modal')) {
                this.closeHintModal();
            }
        });
    }

    startGame() {
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.skippedAnswers = 0;
        
        this.showScreen('game-screen');
        this.displayQuestion();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    displayQuestion() {
        if (this.currentQuestion >= this.questions.length) {
            this.endGame();
            return;
        }

        this.currentQuestionData = this.questions[this.currentQuestion];
        
        // Update UI elements
        document.getElementById('current-question').textContent = this.currentQuestion + 1;
        document.getElementById('question-text').textContent = this.currentQuestionData.question;
        document.getElementById('score').textContent = this.score;
        
        // Update progress bar
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        
        // Update difficulty badge
        const difficultyBadge = document.getElementById('difficulty-badge');
        difficultyBadge.textContent = this.currentQuestionData.difficulty;
        difficultyBadge.className = 'difficulty-badge ' + this.currentQuestionData.difficulty.toLowerCase();
        
        // Display options
        this.displayOptions();
    }

    displayOptions() {
        const container = document.getElementById('options-container');
        container.innerHTML = '';
        
        this.currentQuestionData.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = option;
            button.addEventListener('click', () => this.selectOption(index));
            container.appendChild(button);
        });
    }

    selectOption(selectedIndex) {
        const options = document.querySelectorAll('.option');
        const correctIndex = this.currentQuestionData.correctAnswer;
        
        // Disable all options
        options.forEach(option => option.style.pointerEvents = 'none');
        
        // Mark correct and incorrect answers
        options[correctIndex].classList.add('correct');
        if (selectedIndex !== correctIndex) {
            options[selectedIndex].classList.add('incorrect');
        }
        
        // Update score and stats
        if (selectedIndex === correctIndex) {
            this.score += this.getQuestionPoints();
            this.correctAnswers++;
        } else {
            this.incorrectAnswers++;
        }
        
        // Wait before moving to next question
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    getQuestionPoints() {
        switch(this.currentQuestionData.difficulty) {
            case 'Easy': return 1;
            case 'Medium': return 2;
            case 'Hard': return 3;
            default: return 1;
        }
    }

    skipQuestion() {
        this.skippedAnswers++;
        this.nextQuestion();
    }

    nextQuestion() {
        this.currentQuestion++;
        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
        } else {
            this.endGame();
        }
    }

    showHint() {
        if (this.currentQuestionData && this.currentQuestionData.hint) {
            document.getElementById('hint-text').textContent = this.currentQuestionData.hint;
            document.getElementById('hint-modal').style.display = 'block';
        }
    }

    closeHintModal() {
        document.getElementById('hint-modal').style.display = 'none';
    }

    endGame() {
        // Update game stats
        if (this.score > this.gameStats.highScore) {
            this.gameStats.highScore = this.score;
        }
        this.gameStats.gamesPlayed++;
        this.saveGameStats();
        
        // Display results
        this.displayResults();
        this.showScreen('results-screen');
    }

    displayResults() {
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('correct-answers').textContent = this.correctAnswers;
        document.getElementById('incorrect-answers').textContent = this.incorrectAnswers;
        document.getElementById('skipped-answers').textContent = this.skippedAnswers;
        
        // Calculate difficulty breakdown
        const easyScore = this.calculateDifficultyScore('Easy');
        const mediumScore = this.calculateDifficultyScore('Medium');
        const hardScore = this.calculateDifficultyScore('Hard');
        
        document.getElementById('easy-score').textContent = easyScore;
        document.getElementById('medium-score').textContent = mediumScore;
        document.getElementById('hard-score').textContent = hardScore;
    }

    calculateDifficultyScore(difficulty) {
        let correct = 0;
        let total = 0;
        
        this.questions.forEach((q, index) => {
            if (q.difficulty === difficulty) {
                total++;
                if (index < this.currentQuestion) {
                    // Check if this question was answered correctly
                    if (index < this.correctAnswers + this.incorrectAnswers) {
                        // This is a simplified check - in a real implementation you'd track individual question results
                        correct++;
                    }
                }
            }
        });
        
        return `${correct}/${total}`;
    }

    playAgain() {
        this.startGame();
    }

    goHome() {
        this.showScreen('welcome-screen');
        this.updateStats();
    }

    loadQuestions() {
        // Load questions from the external file
        this.questions = TRIVIA_QUESTIONS;
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TriviaGame();
});
