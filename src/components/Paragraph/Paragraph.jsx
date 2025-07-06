import styles from './Paragraph.module.css'
import cn from 'classnames'

function Paragraph({ paragraphText, className }) {
	return (
		<p className={cn(styles['paragraph'], styles[className])}>
			{paragraphText}
		</p>
	)
}

export default Paragraph
