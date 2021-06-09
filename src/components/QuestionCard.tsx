import React from "react";
import { AnswerProps } from "../utils";
import { Button, QuestionWrapper } from "../style/main.style";

const QuestionCard: React.FC<AnswerProps> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNr,
	totalquestions,
}) => (
	<QuestionWrapper>
		<p>
			Question: {questionNr} / {totalquestions}
		</p>
		<p>{question}</p>
		{answers &&
			answers.map((answer, id) => (
				<div key={`${questionNr}-${id}`}>
					{/* double exclamation mark sets the object to boolean */}
					<Button
						disabled={!!userAnswer}
						status={
							!!userAnswer
								? userAnswer.correctAnswer === answer
									? "rightAnswer"
									: userAnswer.providedAnswer === answer
									? "wrongAnswer"
									: "noAnswer"
								: "noAnswer"
						}
						value={answer}
						onClick={callback}
					>
						{answer}
					</Button>
				</div>
			))}
	</QuestionWrapper>
);

export default QuestionCard;
