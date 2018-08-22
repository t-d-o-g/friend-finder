const surveyQuestions = {
    "neuroticism": {
        "positive": ["Often feel blue.", "Dislike myself.", "Am often down in the dumps.",
            "Have frequent mood swings.", "Panic easily."
        ],
        "negative": ["Rarely get irritated.", "Seldom feel blue.", "Feel comfortable with myself.",
            "Am not easily bothered by things.", "Am very pleased with myself."
        ]
    },
    "extraversion": {
        "positive": ["Feel comfortable around people.", "Make friends easily.", "Am skilled in handling social situations.",
            "Am the life of the party.", "Know how to captivate people."
        ],
        "negative": ["Have little to say.", "Keep in the background.", "Would describe my experiences as somewhat dull.",
            "Don't like to draw attention to myself.", "Don't talk a lot."
        ]
    },
    "openness": {
        "positive": ["Believe in the importance of art.", "Have a vivid imagination.", "Tend to vote for liberal political candidates.",
            "Carry the conversation to a higher level.", "Enjoy hearing new ideas."
        ],
        "negative": ["Am not interested in abstract ideas.", "Do not like art.", "Avoid philosophical discussions.",
            "Do not enjoy going to art museums.", "Tend to vote for conservative political candidates."
        ]
    },
    "agreeableness": {
        "positive": ["Have a good word for everyone.", "Believe that others have good intentions.", "Respect others.",
            "Accept people as they are.", "Make people feel at ease."
        ],
        "negative": ["Have a sharp tongue.", "Cut others to pieces.", "Suspect hidden motives in others.",
            "Get back at others.", "Insult people."
        ]
    },
    "conscientiousness": {
        "positive": ["Am always prepared.", "Pay attention to details.", "Get chores done right away.",
            "Carry out my plans.", "Make plans and stick to them."
        ],
        "negative": ["Waste my time.", "Find it difficult to get down to work.", "Do just enough work to get by.",
            "Don't see things through.", "Shirk my duties."
        ]
    }
};

module.exports = surveyQuestions;