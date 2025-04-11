import React, { useState, useEffect } from 'react';

const QuestionnaireForm = () => {
  // State for storing answers to all questionnaires
  const [suggestibility1, setSuggestibility1] = useState(Array(18).fill(false));
  const [suggestibility2, setSuggestibility2] = useState(Array(18).fill(false));
  const [sexuality1, setSexuality1] = useState(Array(20).fill(false));
  const [sexuality2, setSexuality2] = useState(Array(20).fill(false));
  
  // State for scores
  const [scores, setScores] = useState({
    suggestibility1Score: 0,
    suggestibility2Score: 0,
    suggestibilityCombined: 0,
    sexuality1Score: 0,
    sexuality2Score: 0,
    sexualityCombined: 0,
    physicalSuggestibility: 0,
    emotionalSuggestibility: 0,
    physicalSexuality: 0,
    emotionalSexuality: 0,
    adjustedPhysicalSexuality: 0,
    adjustedEmotionalSexuality: 0
  });
  
  // State for current view
  const [currentView, setCurrentView] = useState('intro');
  
  // Questions for each questionnaire
  const suggestibilityQuestions1 = [
    "Have you ever walked in your sleep during your adult life?",
    "As a teenager, did you feel comfortable expressing your feelings to one or both of your parents?",
    "Do you have a tendency to look directly into a person's eyes and/or move closely to them when discussing an interesting subject?",
    "Do you feel that most people, when you first meet them, are uncritical of your appearance?",
    "In a group situation with people you have just met, would you feel comfortable drawing attention to yourself by initiating a conversation?",
    "Do you feel comfortable holding hands or hugging someone you are in a relationship with in front of other people?",
    "When someone talks about feeling warm physically, do you begin to feel warm also?",
    "Do you tend to occasionally tune out when someone is talking to you because you are anxious to come up with your side, and, at times, not hear what the other person said?",
    "Do you feel that you learn and comprehend better by seeing and/or reading than by hearing?",
    "In a new class or lecture situation, do you usually feel comfortable asking questions in front of the group?",
    "When expressing your ideas, do you find it important to relate all the details leading up to the subject so the other person can understand it completely?",
    "Do you enjoy relating to children?",
    "Do you find it easy to be at ease and comfortable with your body movements, even when faced with unfamiliar people and circumstances?",
    "Do you prefer reading fiction rather than non-fiction?",
    "If you were to imagine sucking on a sour, bitter, juicy, yellow lemon, would your mouth water?",
    "If you feel that you deserve to be complimented for something well done, do you feel comfortable if the compliment is given to you in front of other people?",
    "Do you feel that you are a good conversationalist?",
    "Do you feel comfortable when complimentary attention is drawn to your physical body or appearance?"
  ];
  
  const suggestibilityQuestions2 = [
    "Have you ever awakened in the middle of the night and felt that you could not move your body and/or talk?",
    "As a child, did you feel that you were more affected by your parents tone of voice, than by what they actually said?",
    "If someone you are associated with talks about a fear that you have experienced before, do you have a tendency to have an apprehensive or fearful feeling also?",
    "After having an argument with someone, do you have a tendency to dwell on what you could or should have said?",
    "Do you tend to occasionally tune out when someone is talking to you and, therefore, do not hear what was said because your mind drifts to something totally unrelated?",
    "Do you sometimes desire to be complimented for a job well done, but feel embarrassed or uncomfortable when complimented?",
    "Do you often have a fear or dread of not being able to carry on a conversation with someone you've just met?",
    "Do you feel self-conscious when attention is drawn to your physical body or appearance?",
    "If you had a choice, would you rather avoid being around children most of the time?",
    "Do you feel that you are not relaxed or loose in body movements, especially when faced with unfamiliar people or circumstances?",
    "Do you prefer reading non-fiction rather than fiction?",
    "If someone describes a very bitter taste, do you have difficulty experiencing the physical feeling of it?",
    "Do you generally feel that you see yourself less favorably than others see you?",
    "Do you tend to feel awkward or self-conscious initiating touch (holding hands, kissing, etc.) with someone you are in a relationship with, in front of other people?",
    "In a new class or lecture situation, do you usually feel uncomfortable asking questions in front of the group, even though you may desire further explanation?",
    "Do you feel uneasy if someone you have just met, looks you directly in the eyes when talking to you, especially if the conversation is about you?",
    "In a group situation with people you have just met, would you feel uncomfortable drawing attention to yourself by initiating a conversation?",
    "If you are in a relationship, or are very close to someone, do you find it difficult or embarrassing to verbalize your love for them?"
  ];
  
  const sexualityQuestions1 = [
    "Answer yes if your parent(s) had any one or more of these traits: If raised by both parents, was your primary caregiver more outward and demonstrative in showing affection for you than the other parent? If raised by one parent only, were they outward and demonstrative in showing affection for you?",
    "Do you often desire repeated or prolonged intimate connection with your partner?",
    "After a disagreement with your partner, do you usually make up first?",
    "Are you more jealous or possessive of your partner than your partner is of you?",
    "Do you feel that having intimate connection after an argument is a good way to make up?",
    "Do you like to show your partner attention through thoughtful gestures like opening doors, helping them with their coat, etc.?",
    "Immediately following intimate connection, do you like to touch and caress your partner?",
    "If you feel that you have been unfairly criticized or rejected by your partner, are you capable of expressing extreme anger, tantrums, or vindictiveness?",
    "When you meet someone you are attracted to, are you attracted to their physical characteristics first?",
    "If you have been strongly rejected by your partner, do you feel actual physical discomfort or pain?",
    "Is it important to you to share most of your social activities and hobbies with your partner?",
    "If your partner breaks off a relationship that you did not want to end, do you find that all your energies and thoughts keep drifting back to them and you have difficulty concentrating on anything else?",
    "Do you agree with your partner at times to prevent conflict, even when you think they are wrong?",
    "Do you feel that you give more of yourself to your partner than they do to you?",
    "Would you like your partner to be more creative and expressive than they are?",
    "Do you enjoy receiving attention and flattery from your partner in the presence of others?",
    "Is your relationship your number one priority?",
    "If you suspected your partner of being unfaithful, would you put the greatest degree of blame on the other person for leading them astray?",
    "Do you feel that you have a greater capacity for love and deep emotional feelings than your partner?",
    "Does it disturb you if your partner's interest diminishes after the newness of the relationship wears off?"
  ];
  
  const sexualityQuestions2 = [
    "Answer yes if your parent(s) had any one or more of these traits: If raised by both parents, was your primary caregiver more passive and undemonstrative in showing affection for you than the other parent? If raised by one parent only, were they undemonstrative, passive, cold, withdrawn or overly strict?",
    "Instead of complimenting your partner, do you usually take the attitude that as long as you do not complain, everything is OK?",
    "Is the expectation of intimate connection often greater than the actual experience?",
    "Do you feel that it is unnecessary to buy small gifts of appreciation for your partner, even though you may do it?",
    "When you make up after a fight, do you still feel resentment and find it difficult to fully forgive?",
    "Does your partner want intimate connection more often than you do?",
    "Do you dislike expending significant effort for intimacy (assuming that resources are no object)?",
    "If in a committed relationship, do you have or prefer to have additional relationships outside of it? If single, do you usually have one steady partner but date other people at the same time?",
    "Would you avoid or refuse intimacy with your partner after an argument?",
    "Would you rather avoid verbally expressing love, tenderness or affection, immediately following intimate connection?",
    "When you meet someone new, are you first attracted to their mind and intellect, rather than to them physically?",
    "Do you turn off during intimate moments if distracted by small talk or a comment you feel criticizes you?",
    "Are you constantly searching outside of your relationship for the connection you feel is missing in your life?",
    "Do you find that as the newness of a relationship wears off, your interest towards your partner diminishes?",
    "Would you have a strong resentment against a person demanding a commitment, even though you are well established in your life, but aren't ready?",
    "Do you have the attitude that, if you felt the same way before intimate connection that you feel afterwards, you would never engage in it?",
    "During intimate moments, would you prefer to avoid verbally expressing the different physical and emotional feelings you are experiencing?",
    "During an argument, does your partner tend to bring up things you said or did in the past that hurt, angered or rejected them?",
    "When you are with your partner, do you often fantasize about someone else or about something else?",
    "Does it annoy you to have to reassure your partner by giving them compliments or attention that they outwardly solicit from you?"
  ];
  
  // Calculate scores based on form answers
  const calculateScores = () => {
    // Suggestibility 1 score
    let s1Score = 0;
    for (let i = 0; i < suggestibility1.length; i++) {
      if (suggestibility1[i]) {
        if (i < 2) {
          s1Score += 10; // Questions 1-2 worth 10 points
        } else {
          s1Score += 5; // Questions 3-18 worth 5 points
        }
      }
    }
    
    // Suggestibility 2 score
    let s2Score = 0;
    for (let i = 0; i < suggestibility2.length; i++) {
      if (suggestibility2[i]) {
        s2Score += 5; // All questions worth 5 points
      }
    }
    
    // Sexuality 1 score
    let sex1Score = 0;
    for (let i = 0; i < sexuality1.length; i++) {
      if (sexuality1[i]) {
        sex1Score += 5; // All questions worth 5 points
      }
    }
    
    // Sexuality 2 score
    let sex2Score = 0;
    for (let i = 0; i < sexuality2.length; i++) {
      if (sexuality2[i]) {
        sex2Score += 5; // All questions worth 5 points
      }
    }
    
    // Combined scores
    const suggestibilityCombined = s1Score + s2Score;
    const sexualityCombined = sex1Score + sex2Score;
    
    // Calculate physical/emotional percentages using the chart logic
    // This is a simplified approximation of the chart lookup
    const physicalSuggestibility = calculatePhysicalSuggestibility(s1Score, suggestibilityCombined);
    const emotionalSuggestibility = 100 - physicalSuggestibility;
    
    const physicalSexuality = calculatePhysicalSexuality(sex1Score, sexualityCombined);
    const emotionalSexuality = 100 - physicalSexuality;
    
    // Apply adjustment for cross-influence
    let adjustedPhysicalSexuality = physicalSexuality;
    let adjustedEmotionalSexuality = emotionalSexuality;
    
    if (physicalSexuality > 50 && emotionalSuggestibility > 40) {
      adjustedPhysicalSexuality = Math.min(100, physicalSexuality + 10);
      adjustedEmotionalSexuality = 100 - adjustedPhysicalSexuality;
    } else if (emotionalSexuality > 50 && physicalSuggestibility > 40) {
      adjustedEmotionalSexuality = Math.min(100, emotionalSexuality + 10);
      adjustedPhysicalSexuality = 100 - adjustedEmotionalSexuality;
    }
    
    setScores({
      suggestibility1Score: s1Score,
      suggestibility2Score: s2Score,
      suggestibilityCombined,
      sexuality1Score: sex1Score,
      sexuality2Score: sex2Score,
      sexualityCombined,
      physicalSuggestibility,
      emotionalSuggestibility,
      physicalSexuality,
      emotionalSexuality,
      adjustedPhysicalSexuality,
      adjustedEmotionalSexuality
    });
  };
  
  // Approximate the chart lookup for physical suggestibility
  const calculatePhysicalSuggestibility = (score1, combinedScore) => {
    // This is a simplified approximation of the chart values
    // In a real implementation, you would have the complete chart data
    if (combinedScore < 50) return 0;
    if (score1 === 0) return 0;
    
    // Simple formula that approximates the chart values
    const base = 100 * (score1 / combinedScore);
    return Math.round(base * 0.9); // Scale down slightly to match chart
  };
  
  // Approximate the chart lookup for physical sexuality
  const calculatePhysicalSexuality = (score1, combinedScore) => {
    // Similar approximation for sexuality
    if (combinedScore < 50) return 0;
    if (score1 === 0) return 0;
    
    // Simple formula that approximates the chart values
    const base = 100 * (score1 / combinedScore);
    return Math.round(base * 0.9); // Scale down slightly to match chart
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateScores();
    setCurrentView('results');
  };
  
  // Update an answer in the appropriate questionnaire
  const handleAnswerChange = (questionnaire, index, value) => {
    switch(questionnaire) {
      case 'suggestibility1':
        const newS1 = [...suggestibility1];
        newS1[index] = value;
        setSuggestibility1(newS1);
        break;
      case 'suggestibility2':
        const newS2 = [...suggestibility2];
        newS2[index] = value;
        setSuggestibility2(newS2);
        break;
      case 'sexuality1':
        const newSex1 = [...sexuality1];
        newSex1[index] = value;
        setSexuality1(newSex1);
        break;
      case 'sexuality2':
        const newSex2 = [...sexuality2];
        newSex2[index] = value;
        setSexuality2(newSex2);
        break;
      default:
        break;
    }
  };
  
  // Reset the form
  const resetForm = () => {
    setSuggestibility1(Array(18).fill(false));
    setSuggestibility2(Array(18).fill(false));
    setSexuality1(Array(20).fill(false));
    setSexuality2(Array(20).fill(false));
    setCurrentView('intro');
  };
  
  // Render questions with yes/no radio buttons
  const renderQuestions = (questions, questionnaire, answers) => {
    return questions.map((q, index) => (
      <div key={`${questionnaire}-${index}`} className="mb-4 p-4 bg-gray-100 rounded">
        <p className="mb-2">{index + 1}. {q}</p>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name={`${questionnaire}-${index}`}
              checked={answers[index] === true}
              onChange={() => handleAnswerChange(questionnaire, index, true)}
              className="form-radio"
            />
            <span>YES</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name={`${questionnaire}-${index}`}
              checked={answers[index] === false}
              onChange={() => handleAnswerChange(questionnaire, index, false)}
              className="form-radio"
            />
            <span>NO</span>
          </label>
        </div>
      </div>
    ));
  };
  
  // Render result bars
  const renderResultBar = (type, percentage) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
        <div 
          className={`h-4 rounded-full ${type === 'physical' ? 'bg-blue-500' : 'bg-green-500'}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };
  
  // Render introduction
  const renderIntro = () => (
    <div className="text-center p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Personality Assessment Questionnaire</h1>
      <p className="mb-4">This assessment consists of four questionnaires that will help identify your suggestibility and personality traits. There are no right or wrong answers - just answer honestly based on your personal experiences.</p>
      <p className="mb-4">The assessment takes about 15-20 minutes to complete.</p>
      <button 
        onClick={() => setCurrentView('suggestibility1')} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Start Assessment
      </button>
    </div>
  );
  
  // Render results
  const renderResults = () => (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Assessment Results</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Suggestibility Profile</h3>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span>Physical Suggestibility: {scores.physicalSuggestibility}%</span>
            <span>Emotional Suggestibility: {scores.emotionalSuggestibility}%</span>
          </div>
          {renderResultBar('physical', scores.physicalSuggestibility)}
        </div>
        
        <p className="text-sm mb-4">
          <strong>Physical Suggestibility</strong> refers to how you respond to direct suggestions and physical sensations. People with high physical suggestibility tend to be more responsive to direct commands, physical cues, and literal suggestions.
        </p>
        
        <p className="text-sm mb-4">
          <strong>Emotional Suggestibility</strong> refers to how you respond to emotional and indirect suggestions. People with high emotional suggestibility tend to infer meaning, read between the lines, and respond to emotional context rather than direct commands.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Personality Profile</h3>
        <div className="mb-2">
          <div className="flex justify-between mb-1">
            <span>Physical Personality: {scores.adjustedPhysicalSexuality}%</span>
            <span>Emotional Personality: {scores.adjustedEmotionalSexuality}%</span>
          </div>
          {renderResultBar('physical', scores.adjustedPhysicalSexuality)}
        </div>
        
        <p className="text-sm mb-4">
          <strong>Physical Personality</strong> traits include being more direct, expressive, demonstrative, and action-oriented in relationships and communication. Physical types tend to be more outwardly expressive of their feelings.
        </p>
        
        <p className="text-sm mb-4">
          <strong>Emotional Personality</strong> traits include being more reserved, reflective, and inwardly processing in relationships and communication. Emotional types tend to process feelings internally before expressing them.
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Score Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p>Suggestibility Q1: {scores.suggestibility1Score}</p>
            <p>Suggestibility Q2: {scores.suggestibility2Score}</p>
            <p>Combined Suggestibility: {scores.suggestibilityCombined}</p>
          </div>
          <div>
            <p>Personality Q1: {scores.sexuality1Score}</p>
            <p>Personality Q2: {scores.sexuality2Score}</p>
            <p>Combined Personality: {scores.sexualityCombined}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button 
          onClick={resetForm}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition mr-4"
        >
          Start Over
        </button>
      </div>
    </div>
  );
  
  // Handle navigation between questionnaire sections
  const handleNext = (current) => {
    switch(current) {
      case 'suggestibility1':
        setCurrentView('suggestibility2');
        break;
      case 'suggestibility2':
        setCurrentView('sexuality1');
        break;
      case 'sexuality1':
        setCurrentView('sexuality2');
        break;
      case 'sexuality2':
        handleSubmit({ preventDefault: () => {} });
        break;
      default:
        break;
    }
  };
  
  const handleBack = (current) => {
    switch(current) {
      case 'suggestibility2':
        setCurrentView('suggestibility1');
        break;
      case 'sexuality1':
        setCurrentView('suggestibility2');
        break;
      case 'sexuality2':
        setCurrentView('sexuality1');
        break;
      case 'results':
        setCurrentView('sexuality2');
        break;
      default:
        break;
    }
  };
  
  // Render the appropriate view
  const renderView = () => {
    switch(currentView) {
      case 'intro':
        return renderIntro();
      case 'suggestibility1':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Questionnaire 1</h2>
            <p className="mb-4">Please answer each question with YES or NO based on your personal experience.</p>
            <form>
              {renderQuestions(suggestibilityQuestions1, 'suggestibility1', suggestibility1)}
              <div className="flex justify-between mt-6">
                <button 
                  type="button" 
                  onClick={() => setCurrentView('intro')}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                  Back to Intro
                </button>
                <button 
                  type="button" 
                  onClick={() => handleNext('suggestibility1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Next Section
                </button>
              </div>
            </form>
          </div>
        );
      case 'suggestibility2':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Questionnaire 2</h2>
            <p className="mb-4">Please continue answering each question with YES or NO.</p>
            <form>
              {renderQuestions(suggestibilityQuestions2, 'suggestibility2', suggestibility2)}
              <div className="flex justify-between mt-6">
                <button 
                  type="button" 
                  onClick={() => handleBack('suggestibility2')}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                  Previous Section
                </button>
                <button 
                  type="button" 
                  onClick={() => handleNext('suggestibility2')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Next Section
                </button>
              </div>
            </form>
          </div>
        );
      case 'sexuality1':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Personality Questionnaire 1</h2>
            <p className="mb-4">Please answer each question with YES or NO based on your personal experience.</p>
            <form>
              {renderQuestions(sexualityQuestions1, 'sexuality1', sexuality1)}
              <div className="flex justify-between mt-6">
                <button 
                  type="button" 
                  onClick={() => handleBack('sexuality1')}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                  Previous Section
                </button>
                <button 
                  type="button" 
                  onClick={() => handleNext('sexuality1')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Next Section
                </button>
              </div>
            </form>
          </div>
        );
      case 'sexuality2':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Personality Questionnaire 2</h2>
            <p className="mb-4">Final section - please answer each question with YES or NO.</p>
            <form>
              {renderQuestions(sexualityQuestions2, 'sexuality2', sexuality2)}
              <div className="flex justify-between mt-6">
                <button 
                  type="button" 
                  onClick={() => handleBack('sexuality2')}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                  Previous Section
                </button>
                <button 
                  type="button" 
                  onClick={() => handleNext('sexuality2')}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  See Results
                </button>
              </div>
            </form>
          </div>
        );
      case 'results':
        return renderResults();
      default:
        return renderIntro();
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <header className="border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold text-center">Personality & Suggestibility Assessment</h1>
      </header>
      
      {/* Progress bar */}
      {currentView !== 'intro' && currentView !== 'results' && (
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>
              {currentView === 'suggestibility1' ? '25%' : 
               currentView === 'suggestibility2' ? '50%' : 
               currentView === 'sexuality1' ? '75%' : '100%'}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ 
                width: currentView === 'suggestibility1' ? '25%' : 
                      currentView === 'suggestibility2' ? '50%' : 
                      currentView === 'sexuality1' ? '75%' : '100%' 
              }}
            ></div>
          </div>
        </div>
      )}
      
      {renderView()}
      
      <footer className="border-t mt-8 pt-4 text-sm text-center text-gray-500">
        <p>This assessment is adapted from published questionnaires. Results are for informational purposes only.</p>
      </footer>
    </div>
  );
};

export default QuestionnaireForm;
