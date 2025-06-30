import './Paragraph.css'

function Paragraph({ paragraphText, className }) {
	const paragraphClassName = 'paragraph' + (className ? ' ' + className : '')

	return <p className={paragraphClassName}>{paragraphText}</p>
}

export default Paragraph
