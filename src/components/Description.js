import React from "react"

export default function Description(props) {

  const { date, explanation, copyright } = props

  return (
		<div>
			<div className="details">
				<p className="explanation">Explanation: {explanation}</p>
				<h4 className="date">Date: {date} </h4>
				<h4 className="copyright">By: {copyright} </h4>
			</div>
		</div>
	)

}