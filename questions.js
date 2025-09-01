// Trivia Questions Database - 100 Questions
const TRIVIA_QUESTIONS = [
    // Easy Questions (1-30)
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "This city is famous for the Eiffel Tower."
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "It's the smallest planet in our solar system."
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "Basic arithmetic."
    },
    {
        question: "What color is the sky on a clear day?",
        options: ["Green", "Blue", "Red", "Yellow"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "Think of the ocean color."
    },
    {
        question: "How many days are in a week?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "Count the days from Monday to Sunday."
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: 3,
        difficulty: "Easy",
        hint: "It's also the deepest ocean."
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "Count: North America, South America, Europe, Asia, Africa, Australia, Antarctica."
    },
    {
        question: "What is the main ingredient in bread?",
        options: ["Rice", "Wheat", "Corn", "Oats"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "It's ground into flour."
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Tiger", "Lion", "Elephant", "Gorilla"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "It has a mane and roars."
    },
    {
        question: "What is the opposite of 'hot'?",
        options: ["Warm", "Cold", "Cool", "Freezing"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "Think of winter weather."
    },
    {
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "Tri- means three."
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "It's a very crowded city."
    },
    {
        question: "Which color is a primary color?",
        options: ["Green", "Purple", "Red", "Orange"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "You can't mix other colors to make this one."
    },
    {
        question: "What do plants need to grow?",
        options: ["Water", "Money", "Music", "Clothes"],
        correctAnswer: 0,
        difficulty: "Easy",
        hint: "Plants drink this liquid."
    },
    {
        question: "How many fingers do you have on one hand?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "Count your fingers right now."
    },
    {
        question: "What is the name of our galaxy?",
        options: ["Andromeda", "Milky Way", "Orion", "Pegasus"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "It's named after a white drink."
    },
    {
        question: "Which season comes after summer?",
        options: ["Spring", "Winter", "Fall", "None"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "Leaves change color in this season."
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Polar Bear"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "It lives in the ocean."
    },
    {
        question: "How many hours are in a day?",
        options: ["12", "24", "36", "48"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "Half of this is 12."
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "It's not the largest city."
    },
    {
        question: "Which planet is called the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "It's named after the Roman god of war."
    },
    {
        question: "What is the opposite of 'big'?",
        options: ["Large", "Huge", "Small", "Giant"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "Think of the opposite size."
    },
    {
        question: "How many legs does a spider have?",
        options: ["6", "8", "10", "12"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "It's more than an insect."
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "It's similar to Spanish."
    },
    {
        question: "Which animal lays eggs?",
        options: ["Cat", "Dog", "Chicken", "Cow"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "You eat its eggs for breakfast."
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "It's not the largest city."
    },
    {
        question: "How many months are in a year?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
        difficulty: "Easy",
        hint: "Count: January, February, March..."
    },
    {
        question: "What is the opposite of 'up'?",
        options: ["Side", "Down", "Forward", "Back"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "Gravity pulls things this way."
    },
    {
        question: "Which fruit is yellow and grows on trees?",
        options: ["Apple", "Banana", "Orange", "Grape"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "Monkeys love this fruit."
    },
    {
        question: "What is the largest country in the world?",
        options: ["China", "USA", "Canada", "Russia"],
        correctAnswer: 3,
        difficulty: "Easy",
        hint: "It spans two continents."
    },
    {
        question: "How many eyes do you have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        difficulty: "Easy",
        hint: "Most people have this many."
    },
    {
        question: "What is the opposite of 'day'?",
        options: ["Morning", "Afternoon", "Evening", "Night"],
        correctAnswer: 3,
        difficulty: "Easy",
        hint: "When the sun is not shining."
    },

    // Medium Questions (31-70)
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Fe", "Cu"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's the first two letters of the word 'gold' in Latin."
    },
    {
        question: "Which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "The war ended in the month of September."
    },
    {
        question: "What is the largest bone in the human body?",
        options: ["Skull", "Femur", "Humerus", "Tibia"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's in your thigh."
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "He was also an inventor and scientist."
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Alexandria", "Cairo", "Giza", "Luxor"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's the largest city in the Arab world."
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "12 × 12 = 144."
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["New Zealand", "Australia", "South Africa", "India"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's also home to the koala."
    },
    {
        question: "What is the main component of the sun?",
        options: ["Liquid lava", "Molten iron", "Hydrogen gas", "Solid rock"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "It's the lightest element in the periodic table."
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "He's often called 'The Bard'."
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Gobi", "Sahara", "Antarctic", "Arabian"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "It's covered in ice and snow."
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "Hex- means six."
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "It's a planned city built in the 1960s."
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Osmium", "Oxygen", "Oganesson", "Osmium"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "We breathe this gas."
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It has a Great Red Spot."
    },
    {
        question: "Who discovered gravity?",
        options: ["Einstein", "Newton", "Galileo", "Copernicus"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "An apple fell on his head."
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's in the northern part of the country."
    },
    {
        question: "How many players are on a basketball team?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's the same as the number of fingers on one hand."
    },
    {
        question: "What is the largest bird in the world?",
        options: ["Eagle", "Ostrich", "Emu", "Albatross"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It can't fly but can run very fast."
    },
    {
        question: "Which country has the most people?",
        options: ["India", "China", "USA", "Indonesia"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's in Asia and has over a billion people."
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Johannesburg", "Cape Town", "Pretoria", "Durban"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "It's the administrative capital."
    },
    {
        question: "How many chromosomes do humans have?",
        options: ["23", "46", "69", "92"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's an even number."
    },
    {
        question: "What is the largest lake in Africa?",
        options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
        correctAnswer: 0,
        difficulty: "Medium",
        hint: "It's named after a British queen."
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It has beautiful rings."
    },
    {
        question: "What is the capital of Mexico?",
        options: ["Guadalajara", "Monterrey", "Mexico City", "Puebla"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "It's the largest city in North America."
    },
    {
        question: "How many bones are in the human body?",
        options: ["156", "206", "256", "306"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's between 200 and 210."
    },
    {
        question: "What is the largest island in the world?",
        options: ["Australia", "Greenland", "Borneo", "Madagascar"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's covered in ice."
    },
    {
        question: "Which country invented paper?",
        options: ["Japan", "China", "India", "Egypt"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's the most populous country in the world."
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
        correctAnswer: 0,
        difficulty: "Medium",
        hint: "It means 'Good Airs' in Spanish."
    },
    {
        question: "How many hearts does an octopus have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "It's more than humans but less than four."
    },
    {
        question: "What is the largest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's in the Himalayas."
    },
    {
        question: "Which country has the most languages?",
        options: ["India", "Papua New Guinea", "Indonesia", "Nigeria"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's an island nation in the Pacific."
    },
    {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's not the largest city in the country."
    },
    {
        question: "How many teeth do adults have?",
        options: ["28", "32", "36", "40"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's the same as the number of teams in the NFL."
    },
    {
        question: "What is the largest fish in the world?",
        options: ["Great White Shark", "Whale Shark", "Blue Whale", "Manta Ray"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's a gentle giant that eats plankton."
    },
    {
        question: "Which country has the most time zones?",
        options: ["USA", "Russia", "France", "Australia"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's the largest country in the world."
    },
    {
        question: "What is the capital of Iran?",
        options: ["Tehran", "Mashhad", "Isfahan", "Tabriz"],
        correctAnswer: 0,
        difficulty: "Medium",
        hint: "It's the largest city in the country."
    },
    {
        question: "How many muscles are in the human body?",
        options: ["400", "600", "800", "1000"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's between 500 and 700."
    },
    {
        question: "What is the largest volcano in the world?",
        options: ["Mount Etna", "Mauna Loa", "Mount Vesuvius", "Krakatoa"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's in Hawaii."
    },
    {
        question: "Which country has the most islands?",
        options: ["Indonesia", "Sweden", "Norway", "Finland"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's a Scandinavian country."
    },
    {
        question: "What is the capital of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Faisalabad"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "It's a planned city built in the 1960s."
    },
    {
        question: "How many ribs do humans have?",
        options: ["12", "24", "36", "48"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's the same as the number of hours in a day."
    },
    {
        question: "What is the largest canyon in the world?",
        options: ["Grand Canyon", "Fish River Canyon", "Copper Canyon", "Yarlung Tsangpo"],
        correctAnswer: 0,
        difficulty: "Medium",
        hint: "It's in Arizona, USA."
    },
    {
        question: "Which country has the most rivers?",
        options: ["Brazil", "Russia", "China", "Canada"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's the largest country in the world."
    },
    {
        question: "What is the capital of Bangladesh?",
        options: ["Chittagong", "Dhaka", "Sylhet", "Rajshahi"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's the largest city in the country."
    },
    {
        question: "How many vertebrae are in the human spine?",
        options: ["23", "33", "43", "53"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's between 30 and 35."
    },
    {
        question: "What is the largest waterfall in the world?",
        options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "It's in Venezuela."
    },
    {
        question: "Which country has the most lakes?",
        options: ["Canada", "Finland", "Sweden", "Norway"],
        correctAnswer: 0,
        difficulty: "Medium",
        hint: "It's the second largest country in the world."
    },
    {
        question: "What is the capital of Vietnam?",
        options: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hai Phong"],
        correctAnswer: 1,
        difficulty: "Medium",
        hint: "It's in the northern part of the country."
    },
    {
        question: "How many taste buds do humans have?",
        options: ["2000", "5000", "10000", "20000"],
        correctAnswer: 2,
        difficulty: "Medium",
        hint: "It's between 8000 and 12000."
    },

    // Hard Questions (71-100)
    {
        question: "What is the speed of light in miles per second?",
        options: ["186,000", "186,282", "186,500", "187,000"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "It's approximately 186,000 miles per second."
    },
    {
        question: "Which year was the first iPhone released?",
        options: ["2005", "2006", "2007", "2008"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "Steve Jobs announced it in January of this year."
    },
    {
        question: "What is the atomic number of carbon?",
        options: ["4", "6", "8", "12"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "It's the number of protons in a carbon atom."
    },
    {
        question: "Who wrote 'The Divine Comedy'?",
        options: ["Homer", "Virgil", "Dante", "Petrarch"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "He was exiled from Florence."
    },
    {
        question: "What is the largest known star in the universe?",
        options: ["Betelgeuse", "UY Scuti", "VY Canis Majoris", "Stephenson 2-18"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "It's in the constellation Scutum."
    },
    {
        question: "Which year did the Berlin Wall fall?",
        options: ["1987", "1988", "1989", "1990"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It happened in November."
    },
    {
        question: "What is the molecular formula for glucose?",
        options: ["C6H12O6", "C12H22O11", "C6H6", "CH4"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "It's a simple sugar with 6 carbon atoms."
    },
    {
        question: "Who painted 'The Starry Night'?",
        options: ["Monet", "Van Gogh", "Cézanne", "Gauguin"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "He cut off his own ear."
    },
    {
        question: "What is the largest known prime number?",
        options: ["2^82,589,933 - 1", "2^77,232,917 - 1", "2^74,207,281 - 1", "2^57,885,161 - 1"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "It was discovered in 2018."
    },
    {
        question: "Which country has the most nuclear weapons?",
        options: ["USA", "Russia", "China", "France"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "It's the largest country in the world."
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "95°C", "100°C", "105°C"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It's exactly 100 degrees at sea level."
    },
    {
        question: "Who discovered penicillin?",
        options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Joseph Lister"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "He discovered it by accident in 1928."
    },
    {
        question: "What is the largest known dinosaur?",
        options: ["T-Rex", "Brachiosaurus", "Argentinosaurus", "Spinosaurus"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It was discovered in Argentina."
    },
    {
        question: "Which year was the first moon landing?",
        options: ["1967", "1968", "1969", "1970"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "Neil Armstrong said 'One small step for man.'"
    },
    {
        question: "What is the speed of sound in air at room temperature?",
        options: ["331 m/s", "343 m/s", "355 m/s", "367 m/s"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "It's approximately 343 meters per second."
    },
    {
        question: "Who wrote 'War and Peace'?",
        options: ["Dostoevsky", "Tolstoy", "Chekhov", "Turgenev"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "He was a Russian novelist."
    },
    {
        question: "What is the largest known black hole?",
        options: ["Sagittarius A*", "TON 618", "Cygnus X-1", "V404 Cygni"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "It's a quasar."
    },
    {
        question: "Which year did World War I start?",
        options: ["1912", "1913", "1914", "1915"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It started after the assassination of Archduke Franz Ferdinand."
    },
    {
        question: "What is the molecular weight of water?",
        options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "H2O: 2(1) + 16 = 18."
    },
    {
        question: "Who painted 'The Last Supper'?",
        options: ["Michelangelo", "Raphael", "Da Vinci", "Botticelli"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "He was also an inventor and scientist."
    },
    {
        question: "What is the largest known galaxy?",
        options: ["Milky Way", "Andromeda", "IC 1101", "Messier 87"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It's in the constellation Virgo."
    },
    {
        question: "Which year did the Titanic sink?",
        options: ["1910", "1911", "1912", "1913"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It hit an iceberg on its maiden voyage."
    },
    {
        question: "What is the atomic weight of gold?",
        options: ["196.97", "197.97", "198.97", "199.97"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "It's approximately 197."
    },
    {
        question: "Who discovered the theory of relativity?",
        options: ["Newton", "Einstein", "Hawking", "Feynman"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "He was born in Germany."
    },
    {
        question: "What is the largest known planet outside our solar system?",
        options: ["HD 100546 b", "WASP-17b", "TrES-4b", "HAT-P-1b"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "It's about 6.9 times the mass of Jupiter."
    },
    {
        question: "Which year did the French Revolution begin?",
        options: ["1787", "1788", "1789", "1790"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "The Bastille was stormed in July."
    },
    {
        question: "What is the speed of Earth's rotation at the equator?",
        options: ["1000 mph", "1000 km/h", "1000 m/s", "1000 km/s"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "It's approximately 1000 miles per hour."
    },
    {
        question: "Who wrote 'The Odyssey'?",
        options: ["Virgil", "Homer", "Sophocles", "Euripides"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "He was a blind poet."
    },
    {
        question: "What is the largest known star cluster?",
        options: ["Pleiades", "Hyades", "Omega Centauri", "47 Tucanae"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It's in the constellation Centaurus."
    },
    {
        question: "Which year did Columbus discover America?",
        options: ["1490", "1491", "1492", "1493"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "He sailed the ocean blue in 1492."
    },
    {
        question: "What is the molecular formula for DNA?",
        options: ["C5H10O5", "C10H15N5O4", "C15H20N10O5", "C20H25N15O10"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "It contains nitrogen bases."
    },
    {
        question: "Who painted 'The Scream'?",
        options: ["Munch", "Klimt", "Schiele", "Kokoschka"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "He was a Norwegian artist."
    },
    {
        question: "What is the largest known asteroid?",
        options: ["Ceres", "Vesta", "Pallas", "Hygiea"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "It's also classified as a dwarf planet."
    },
    {
        question: "Which year did the American Civil War end?",
        options: ["1863", "1864", "1865", "1866"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "General Lee surrendered at Appomattox."
    },
    {
        question: "What is the speed of a bullet from a typical handgun?",
        options: ["500 m/s", "1000 m/s", "1500 m/s", "2000 m/s"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "It's approximately 1000 meters per second."
    },
    {
        question: "Who wrote 'The Iliad'?",
        options: ["Homer", "Virgil", "Sophocles", "Euripides"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "He was a blind poet."
    },
    {
        question: "What is the largest known nebula?",
        options: ["Crab Nebula", "Orion Nebula", "Tarantula Nebula", "Eagle Nebula"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It's in the Large Magellanic Cloud."
    },
    {
        question: "Which year did the Russian Revolution occur?",
        options: ["1915", "1916", "1917", "1918"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "The Bolsheviks seized power in October."
    },
    {
        question: "What is the molecular weight of carbon dioxide?",
        options: ["40 g/mol", "44 g/mol", "48 g/mol", "52 g/mol"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "CO2: 12 + 2(16) = 44."
    },
    {
        question: "Who painted 'Guernica'?",
        options: ["Dali", "Picasso", "Miro", "Gris"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "He was a Spanish artist."
    },
    {
        question: "What is the largest known white dwarf star?",
        options: ["Sirius B", "Procyon B", "Van Maanen's Star", "Stein 2051 B"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "It's the companion to the brightest star in the night sky."
    },
    {
        question: "Which year did the Industrial Revolution begin?",
        options: ["1750", "1760", "1770", "1780"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "It started in Great Britain."
    },
    {
        question: "What is the speed of a commercial jet airplane?",
        options: ["500 mph", "600 mph", "700 mph", "800 mph"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "It's approximately 600 miles per hour."
    },
    {
        question: "Who wrote 'The Aeneid'?",
        options: ["Homer", "Virgil", "Ovid", "Horace"],
        correctAnswer: 1,
        difficulty: "Hard",
        hint: "He was a Roman poet."
    },
    {
        question: "What is the largest known globular cluster?",
        options: ["M13", "M22", "M80", "M92"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "It's in the constellation Hercules."
    },
    {
        question: "Which year did the Spanish Armada sail?",
        options: ["1586", "1587", "1588", "1589"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It was defeated by the English navy."
    },
    {
        question: "What is the molecular weight of methane?",
        options: ["12 g/mol", "14 g/mol", "16 g/mol", "18 g/mol"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "CH4: 12 + 4(1) = 16."
    },
    {
        question: "Who painted 'The Persistence of Memory'?",
        options: ["Dali", "Magritte", "Ernst", "Tanguy"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "He was a Spanish surrealist artist."
    },
    {
        question: "What is the largest known neutron star?",
        options: ["PSR J0348+0432", "PSR J1614-2230", "PSR J0740+6620", "PSR J2215+5135"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It was discovered in 2019."
    },
    {
        question: "Which year did the Magna Carta get signed?",
        options: ["1213", "1214", "1215", "1216"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It was signed by King John of England."
    },
    {
        question: "What is the speed of a cheetah?",
        options: ["50 mph", "60 mph", "70 mph", "80 mph"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "It's the fastest land animal."
    },
    {
        question: "Who wrote 'The Divine Comedy'?",
        options: ["Homer", "Virgil", "Dante", "Petrarch"],
        correctAnswer: 2,
        difficulty: "Hard",
        hint: "He was exiled from Florence."
    },
    {
        question: "What is the largest known quasar?",
        options: ["3C 273", "PKS 0637-752", "PKS 1127-145", "PKS 1502+106"],
        correctAnswer: 0,
        difficulty: "Hard",
        hint: "It was the first quasar to be identified."
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TRIVIA_QUESTIONS;
}
