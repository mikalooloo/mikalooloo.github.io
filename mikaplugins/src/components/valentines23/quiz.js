import "./quiz.css";
import React from "react";
import { Button, Stack, Row, Col, Modal } from "react-bootstrap";
import axiosInstance from "../../apis/axios-instance";

export default function Quiz() {
    // what question user is on
    const [userQuestionIndex, setUserQuestionIndex] = React.useState(-1);
    // how many times the user answered correctly on the first try
    const [points, setPoints] = React.useState(0);
    // list of questions, possible answers, and correct answer
    const [questions, setQuestions] = React.useState([]);
    // list of how many times user guessed each possible answer for each question
    const [guesses, setGuesses] = React.useState([]);
    // whether or not to show the "hooray you finished" modal
    const [show, setShow] = React.useState(false);

    // get questions list
    React.useEffect(() => {
        axiosInstance.get(`/public/valentines23/questions.json`)
            .then(response => {
                setQuestions(response.data.questions);
            })
            .catch(error => console.log(error));
    }, []);

    // check if user is done with all questions
    React.useEffect(() => {
        if (userQuestionIndex === questions.length && questions.length !== 0) {
            setShow(true);
        }
    }, [userQuestionIndex, questions.length]);

    // user has clicked an answer button
    function CheckAnswer(selectedAnswer, selectedAnswerIndex) {
        // update guesses
        let firstGuess = false;
        let updatedGuesses = [...guesses];
        // if this is the first time we're guessing for a question
        if (updatedGuesses.length < userQuestionIndex + 1) {
            updatedGuesses.push([0, 0, 0, 0]);
            firstGuess = true;
        }
        updatedGuesses[userQuestionIndex][selectedAnswerIndex]++;
        setGuesses(updatedGuesses);

        // if correct answer, move onto next question and add a point if it was their first guess
        if (questions[userQuestionIndex].correctAnswer === selectedAnswer) {
            setUserQuestionIndex(userQuestionIndex + 1);
            if (firstGuess) setPoints(points + 1);
        }
    }

    return (
        <div style={{ "fontFamily": "Anton", "textAlign": "center" }} >
            <h1 style={{ "marginTop": "1%" }}>to ethan</h1>
            <h3>if you can answer all questions from this quiz correctly, you get a prize</h3>
            <h3 style={{ "margin": "2%" }}>Points: {points}</h3>
            {userQuestionIndex === -1 ?
                <Button className="default" style={{ "fontSize": "150%" }} onClick={() => setUserQuestionIndex(0)}>Start</Button>
                :
                <Stack gap={5} style={{ "marginBottom": "10%" }}>
                    {questions.map((question, questionIndex) => {
                        return (questionIndex <= userQuestionIndex) ? (<div key={questionIndex}>
                            <h1>{question.question}</h1>
                            <Row>
                                {question.possibleAnswers.map((answer, answerIndex) => {
                                    return (
                                        <Col key={answerIndex}>
                                            <Button className="default" style={{ "fontSize": "150%" }} disabled={userQuestionIndex !== questionIndex} onClick={(e) => CheckAnswer(e.target.outerText, answerIndex)}>{answer}</Button>
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
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Hooray, you've finished!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You correctly answered {points} questions out of {questions.length}, landing you a total score of {(points / questions.length * 100).toPrecision(3)}%.<br />
                    Your prize can be found via clicking this <b><a href="https://www.hangmanwords.com/play/custom?g=YmUlMjBteSUyMHZhbGVudGluZSUzRg==" target="_blank" rel="noreferrer" style={{ "color": "black", "textDecorationThickness": "2px" }}>link</a></b>.</Modal.Body>
                <Modal.Footer>
                    <Button className="default" onClick={() => setShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}