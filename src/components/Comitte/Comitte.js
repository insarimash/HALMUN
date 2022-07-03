import LinkButton from '../LinkButton';
import styles from './Comitte.module.css';


function Comitte(props) {
    return (
        <div className={styles['committe-container']}>
            <img src={props.imgSrc} alt={props.title}/>

            <div className={styles['committe-content']}>
                <span className='h2'>{props.title}</span>
                <span className='p'>{props.desc}</span>

                <LinkButton 
                    to={props.link}
                    className={styles['learn-more-button']}
                >
                    Learn More
                </LinkButton>
            </div>
        </div>
    );
}

export default Comitte;