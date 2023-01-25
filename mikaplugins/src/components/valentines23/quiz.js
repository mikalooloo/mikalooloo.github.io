import React from "react";
import { Button, Stack, Row, Col } from "react-bootstrap";
import axiosInstance from "../../apis/axios-instance";

export default function Quiz() {
    const [userQuestionIndex, setUserQuestionIndex] = React.useState(-1);
    const [points, setPoints] = React.useState(0);
    const [questions, setQuestions] = React.useState([]);
    const [guesses, setGuesses] = React.useState([]);

    // get questions list
    React.useEffect(() => {
        axiosInstance.get(`/public/valentines23/questions.json`)
            .then(response => {
                console.log(response.data.questions);
                setQuestions(response.data.questions);
            })
            .catch(error => console.log(error));
    }, []);

    function CheckAnswer(selectedAnswer, selectedAnswerIndex) {
        // update guesses
        let firstGuess = false;
        let updatedGuesses = [...guesses];
        if (updatedGuesses.length < userQuestionIndex + 1) {
            updatedGuesses.push([0, 0, 0, 0]);
            firstGuess = true;
        }
        else if (updatedGuesses[userQuestionIndex].every((x) => x === 0)) firstGuess = true;
        updatedGuesses[userQuestionIndex][selectedAnswerIndex]++;
        setGuesses(updatedGuesses);

        if (questions[userQuestionIndex].correctAnswer === selectedAnswer) {
            setUserQuestionIndex(userQuestionIndex + 1);
            if (firstGuess) setPoints(points + 1);
        }
    }

    return (
        <div>
            <h1>to ethan</h1>
            <h3>if you can answer all questions from this quiz correctly, you get a prize</h3>
            <h3>Points: {points}</h3>
            {userQuestionIndex === -1 ?
                <Button onClick={() => setUserQuestionIndex(0)}>Start</Button>
                :
                <Stack gap={3}>
                    {questions.map((question, questionIndex) => {
                        return (questionIndex <= userQuestionIndex) ? (<div key={questionIndex}>
                            <h1>{question.question}</h1>
                            <Row>
                                {question.possibleAnswers.map((answer, answerIndex) => {
                                    return (
                                        <Col key={answerIndex}>
                                            <Button disabled={userQuestionIndex !== questionIndex} onClick={(e) => CheckAnswer(e.target.outerText, answerIndex)}>{answer}</Button>
                                        </Col>);
                                })}
                            </Row>
                            <Row>
                                {guesses[questionIndex] !== undefined ? guesses[questionIndex].map((guess, guessIndex) => {
                                    return (
                                        <Col key={guessIndex}>
                                            {guess > 0 ? guess : <div />}
                                        </Col>
                                    );
                                }) : <div key={questionIndex} />}
                            </Row>
                        </div>) : <div key={questionIndex} />;
                    })}
                </Stack>}
        </div>
    );
}