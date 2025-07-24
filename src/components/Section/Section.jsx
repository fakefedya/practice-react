import styles from './Section.module.css'
import cn from 'classnames'

function Section({ children }) {
	return <section className={cn(styles['section'])}>{children}</section>
}

export default Section
